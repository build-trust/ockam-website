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
  chakra,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import ReCAPTCHA from 'react-google-recaptcha';
import { useSearchParams } from 'next/navigation';

import CONFIG from '@config';
import FormInput from '@components/FormInput';
import Card from '@components/Card';

const FIELDS = [
  {
    name: 'first_name',
    type: 'text',
    required: true,
    placeholder: 'John',
    label: 'First Name',
    errorMsg: 'Please use valid first name',
  },
  {
    name: 'last_name',
    type: 'text',
    required: true,
    placeholder: 'Doe',
    label: 'Last Name',
    errorMsg: 'Please use valid last name',
  },
  {
    name: 'email',
    type: 'email',
    required: true,
    pattern:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    placeholder: 'johndoe@mail.com',
    label: 'E-mail',
    errorMsg: 'Please use valid e-mail',
  },
  {
    name: 'company',
    type: 'text',
    required: true,
    placeholder: 'Your company',
    label: 'Company',
    errorMsg: 'Please use valid company name',
  },
  {
    name: 'country',
    type: 'text',
    required: true,
    placeholder: 'Your country',
    label: 'Country',
    errorMsg: 'Please use valid country',
  },
  {
    name: 'description',
    type: 'textarea',
    required: true,
    placeholder: 'What are you working on and how can we help?',
    label: 'Message',
    errorMsg: 'Please use valid message',

    wrapperStyles: {
      colSpan: { md: 2 },
    },
    inputStyles: {
      resize: { base: undefined },
      h: '158px',
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
    <Card w="full" maxW="2xl" p={10}>
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
          spacingX={10}
          spacingY={{ base: 4, md: 7 }}
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
                {...field.inputStyles}
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

          <GridItem colStart={{ md: 1 }}>
            <FormControl isInvalid={!!errors.recaptcha}>
              <ReCAPTCHA
                sitekey={CONFIG.app.recaptchaSiteKey}
                onChange={(recaptchaValue): void => setValue('recaptcha', recaptchaValue)}
              />
              <input
                type="hidden"
                {...register('recaptcha', { required: 'Recaptcha is required' })}
              />
              <FormErrorMessage>
                <>{errors?.recaptcha?.message}</>
              </FormErrorMessage>
            </FormControl>
          </GridItem>

          <GridItem
            colStart={{ md: 2 }}
            justifySelf="end"
            mt={{ base: 2, md: 1 }}
            w={{ base: 'full', md: '80%' }}
          >
            <Button
              colorScheme="avocado"
              type="submit"
              onClick={onSubmit}
              color="black"
              w="full"
              disabled={isSubmitting}
              isLoading={isSubmitting}
            >
              Submit
            </Button>
          </GridItem>
        </SimpleGrid>
      </chakra.form>
    </Card>
  );
};

export default ContactForm;
