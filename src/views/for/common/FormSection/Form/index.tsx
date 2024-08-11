import { FormEvent, FunctionComponent, useRef, useEffect } from 'react';
import {
  Button,
  GridItem,
  SimpleGrid,
  Alert,
  AlertIcon,
  Stack,
  FormControl,
  FormErrorMessage,
  Box,
  chakra,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import ReCAPTCHA from 'react-google-recaptcha';
import { useSearchParams } from 'next/navigation';

import CONFIG from '@config';
import FormInput from '@components/FormInput';

const FIELDS = [
  {
    name: 'first_name',
    type: 'text',
    required: true,
    placeholder: 'Enter name',
    label: 'First Name',
    errorMsg: 'Please use valid first name',
  },
  {
    name: 'last_name',
    type: 'text',
    required: true,
    placeholder: 'Enter last name',
    label: 'Last Name',
    errorMsg: 'Please use valid last name',
  },
  {
    name: 'email',
    type: 'email',
    required: true,
    pattern:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    placeholder: 'Enter email',
    label: 'Email',
    errorMsg: 'Please use valid e-mail',
  },
  {
    name: 'company',
    type: 'text',
    required: true,
    placeholder: 'Enter company',
    label: 'Company',
    errorMsg: 'Please use valid company name',
  },
  {
    name: 'description',
    type: 'textarea',
    required: true,
    placeholder: 'Enter message',
    label: 'Message',
    errorMsg: 'Please use valid message',

    wrapperStyles: {
      colSpan: { md: 2 },
    },
  },
];

type Props = {
  landingPage?: string;
};
const ContactForm: FunctionComponent<Props> = ({ landingPage }) => {
  const {
    register,
    formState: { errors, isSubmitting },
    setValue,
    trigger,
  } = useForm();
  const searchParams = useSearchParams();
  const featureRequest = !!searchParams.get('feature');
  const contactReason = !!searchParams.get('reason');
  const attribution = landingPage || 'general';

  const contactFormRef = useRef<HTMLFormElement>(null);

  const onSubmit = async (e: FormEvent) => {
    const results = await trigger();
    if (!results) {
      e.preventDefault();
    }
  };

  const sfdcTimestamp = async (): Promise<void> => {
    const response = document.getElementById('g-recaptcha-response') as HTMLFormElement | null;
    if (response === null || response.value.trim() === '') {
      const elems = CONFIG.salesforce.captchaSettings;
      elems.ts = JSON.stringify(new Date().getTime());
      setValue('captcha_settings', JSON.stringify(elems), {
        shouldDirty: true,
        shouldTouch: true,
      });
      setTimeout(sfdcTimestamp, 500);
    }
  };

  useEffect(() => {
    sfdcTimestamp();
  });

  const featureRequestMessage = (): string | undefined => {
    if (featureRequest) {
      switch (searchParams.get('feature')) {
        case 'marketplace': {
          let marketplace = '';
          if (searchParams.get('marketplace') === 'azure') marketplace = 'Azure';
          if (searchParams.get('marketplace') === 'gcp') marketplace = 'Google Cloud';
          return `Purchasing via the ${marketplace} marketplace is not yet complete. Speak to our sales team to get setup up.`;
          break;
        }
        default:
          return undefined;
          break;
      }
    }
    return undefined;
  };

  const contactWithReasonMessage = (): string | undefined | null => {
    if (contactReason) {
      return searchParams.get('reason');
    }
    return undefined;
  };

  return (
    <Box>
      {(featureRequest || contactReason) && (
        <Alert status="info" variant="solid" borderRadius="base" mb="8">
          <>
            <AlertIcon />
            {featureRequestMessage() || contactWithReasonMessage()}
          </>
        </Alert>
      )}
      <chakra.form
        ref={contactFormRef}
        method="POST"
        action={CONFIG.salesforce.actionUrl}
        noValidate
      >
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacingX={{ base: '1.5rem' }}
          spacingY={{ base: '1.5rem' }}
          pos="relative"
          w="full"
        >
          {FIELDS.map((field) => (
            <GridItem key={field.name} {...field.wrapperStyles}>
              <FormInput
                type={field.type}
                label={field.label}
                placeholder={field.placeholder}
                errorMessage={field.errorMsg}
                isRequired={field.required}
                isInvalid={!!errors[field.name]}
                isDisabled={isSubmitting}
                variant="ghost"
                {...register(field.name, {
                  required: field.required,
                  pattern: field.pattern,
                })}
              />
            </GridItem>
          ))}

          <input type="hidden" value={CONFIG.salesforce.oid} {...register('oid')} />
          <input
            type="hidden"
            value={`${CONFIG.salesforce.returnUrl}&landingPage=${attribution}`}
            {...register('retURL')}
          />
          <input type="hidden" value={CONFIG.salesforce.leadSource} {...register('lead_source')} />
          <input type="hidden" value={CONFIG.salesforce.debug} {...register('debug')} />
          <input type="hidden" value={CONFIG.salesforce.debugEmail} {...register('debugEmail')} />
          <input type="hidden" {...register('captcha_settings')} />

          {errors.global && (
            <GridItem colSpan={2}>
              <Stack spacing={3}>
                <Alert status="error" variant="solid" borderRadius="base">
                  <>
                    <AlertIcon />
                    {errors.global.message}
                  </>
                </Alert>
              </Stack>
            </GridItem>
          )}

          <GridItem colStart={{ base: 1 }} colEnd={{ base: -1 }}>
            <Button
              h="3.5rem"
              variant="primary"
              type="submit"
              onClick={onSubmit}
              w="full"
              disabled={isSubmitting}
              isLoading={isSubmitting}
            >
              Submit
            </Button>
          </GridItem>

          <GridItem colStart={{ base: 1 }} colEnd={{ base: -1 }}>
            <FormControl overflow="auto" isInvalid={!!errors.recaptcha}>
              <ReCAPTCHA
                sitekey={CONFIG.app.recaptchaSiteKey}
                onChange={(recaptchaValue): void => setValue('recaptcha', recaptchaValue)}
              />
              <input
                type="hidden"
                {...register('recaptcha', { required: 'Recaptcha is required' })}
              />
              <FormErrorMessage>{errors?.recaptcha?.message}</FormErrorMessage>
            </FormControl>
          </GridItem>
        </SimpleGrid>
      </chakra.form>
    </Box>
  );
};

export default ContactForm;
