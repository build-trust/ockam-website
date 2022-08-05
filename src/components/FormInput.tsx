import { FunctionComponent } from 'react';
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputProps,
  Textarea,
  TextareaProps,
  forwardRef,
} from '@chakra-ui/react';

type FormInputExternalProps = {
  label?: string;
  errorMessage: string;
  type: string;
};

type FormInputProps = FormInputExternalProps & InputProps & TextareaProps;

const FormInput: FunctionComponent<FormInputProps> = forwardRef(
  (
    {
      name,
      type,
      label,
      placeholder,
      errorMessage,
      isRequired,
      isInvalid,
      isDisabled,
      ...restProps
    },
    ref
  ) => {
    const InputComponent = type === 'textarea' ? Textarea : Input;

    return (
      <FormControl isInvalid={isInvalid} isDisabled={isDisabled}>
        {label && <FormLabel variant="form">{label}</FormLabel>}

        <InputComponent
          name={name}
          type={type}
          placeholder={placeholder}
          variant="outline"
          ref={ref}
          {...restProps}
        />

        <FormErrorMessage position="absolute" top="calc(100% - 6px)" left={0}>
          {errorMessage}
        </FormErrorMessage>
      </FormControl>
    );
  }
);

export default FormInput;
