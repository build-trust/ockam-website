import { FunctionComponent } from 'react';
import {
  Button,
  GridItem,
  SimpleGrid,
  Alert,
  AlertIcon,
  Stack,
  useToast,
  FormControl,
  FormErrorMessage,
} from '@chakra-ui/react';
import { FieldValues, useForm } from 'react-hook-form';
import ReCAPTCHA from 'react-google-recaptcha';
import axios from 'axios';

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
    placeholder: 'Your message',
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

// TODO Types for react-hook-form - inputs, errors; Refactor to separately hook, axios client, etc
const ContactForm: FunctionComponent = () => {
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    setError,
    setValue,
    reset,
  } = useForm();
  const toast = useToast();

  const onSubmit = async (data: FieldValues): Promise<void> => {
    try {
      await axios({ method: 'post', url: CONFIG.salesforce.actionUrl, data });
      toast({
        title: 'Your message has been sent successfully',
        status: 'success',
        duration: 9000,
        isClosable: true,
      });
      reset();
    } catch (error) {
      // @ts-ignore
      setError('global', { message: error.message });
    }
  };

  return (
    <Card w="full" maxW="2xl" p={10}>
      <SimpleGrid
        as="form"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
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
              {...register(field.name, { required: field.required, pattern: field.pattern })}
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
            color="black"
            w="full"
            disabled={isSubmitting}
            isLoading={isSubmitting}
          >
            Submit
          </Button>
        </GridItem>
      </SimpleGrid>
    </Card>
  );
};

export default ContactForm;
