import { FormEvent, FunctionComponent, useRef } from 'react';
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
    name: 'title',
    type: 'text',
    required: true,
    placeholder: 'Your message title',
    label: 'Title',
    errorMsg: 'Please use valid title',
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
      resize: 'none',
      h: '158px',
    },
  },
];

// TODO Types for react-hook-form - inputs, errors;
const ContactForm: FunctionComponent = () => {
  const {
    register,
    formState: { errors, isSubmitting },
    setValue,
    trigger,
  } = useForm();

  const contactFormRef = useRef<HTMLFormElement>(null);

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const onSubmit = async (e:FormEvent) => {
    const results = await trigger();
    if(!results) {
      e.preventDefault();
    }
  };

  return (
    <Card w="full" maxW="2xl" p={10}>
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
              {/* @ts-ignore */}
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
          <input type="hidden" value={CONFIG.salesforce.returnUrl} {...register('retURL')} />

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
              {/* @ts-ignore */}
              <FormErrorMessage>{errors?.recaptcha?.message}</FormErrorMessage>
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
