import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Heading,
  Input,
  Text,
  VStack,
  chakra,
} from '@chakra-ui/react';
import { FC, KeyboardEventHandler, RefObject, useRef, useState } from 'react';
import OrchestratorAPI, { User } from '../Orchestrator';
import { useForm, SubmitHandler, FieldErrors, useWatch } from 'react-hook-form';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

const components = {
  h1: Heading,
  Heading,
};

type Props = {
  next: () => void;
  updated: (userDetails: User) => void;
  userDetails?: User;
  api?: OrchestratorAPI;
  terms: MDXRemoteSerializeResult;
};

type Inputs = {
  name: string;
  company: string;
  companyDomain: string;
  acceptedToS: boolean;
};

const UserDetails: FC<Props> = ({ next, updated, userDetails, api, terms }) => {
  const formContainerRef = useRef<HTMLDivElement>(null);

  const {
    register,
    handleSubmit,
    control,
    trigger,
    formState: { errors },
  } = useForm<Inputs>();

  const name = useWatch({ name: 'name', control, defaultValue: userDetails?.details?.name });
  const company = useWatch({
    name: 'company',
    control,
    defaultValue: userDetails?.details?.company,
  });
  const companyDomain = useWatch({
    name: 'companyDomain',
    control,
    defaultValue: userDetails?.details?.company_domain,
  });
  const acceptedToS = useWatch({
    name: 'acceptedToS',
    control,
    defaultValue: userDetails?.accepted_tos,
  });

  const [currentStep, setStep] = useState(0);

  const save: SubmitHandler<Inputs> = () => {
    if (currentStep < 3) return step(formContainerRef);
    if (!userDetails?.accepted_tos) api?.updateToS(true);
    const details = { name, company, company_domain: companyDomain };
    if (name && company && companyDomain) {
      api?.updateUserDetails(details);
    }
    const data: User = {
      accepted_tos: acceptedToS,
      details,
    };
    updated(data);
    next();
  };

  const isStepValid = async (): Promise<boolean> => {
    if (currentStep == 0) {
      await trigger('name');
      if (errors.name) return false;
    } else if (currentStep == 1) {
      await trigger('companyDomain');
      if (errors.companyDomain) return false;
    } else if (currentStep == 2) {
      await trigger('company');
      if (errors.company) return false;
    }
    return true;
  };
  const step = (ref: RefObject<HTMLDivElement>) => {
    isStepValid().then((isValid) => {
      if (!isValid) return false;
      if (ref && ref.current) {
        if (currentStep < 3) {
          ref.current.style.opacity = '0';
          setTimeout(() => {
            setStep(currentStep + 1);
            if (ref && ref.current) ref.current.style.opacity = '1';
          }, 200);
        } else {
          handleSubmit(save)();
        }
      }
    });
  };

  const checkReturnKey: KeyboardEventHandler<HTMLInputElement> = (e) => {
    const target = e.target as HTMLInputElement;
    const name = target.name as 'name' | 'company' | 'companyDomain';
    trigger(name);
    isStepValid().then(() => {
      if (e && e.key === 'Enter') step(formContainerRef);
    });
  };

  const displayField = (cs: number, es: FieldErrors<Inputs>) => (
    <>
      <VStack alignItems="flex-start" display={cs === 0 ? 'block' : 'none'}>
        <FormLabel>Your name</FormLabel>
        <FormControl isInvalid={!!es?.name}>
          <HStack w="100%">
            <Input
              maxW="25em"
              {...register('name', { value: name, required: 'Your name is required' })}
              onBlur={() => {
                trigger('name');
              }}
              onKeyUp={checkReturnKey}
            />
            <Text>
              Press <em>Enter ⏎</em>
            </Text>
          </HStack>
          {es?.name && <FormErrorMessage>{es.name.message}</FormErrorMessage>}
        </FormControl>
      </VStack>

      <VStack alignItems="flex-start" display={cs === 1 ? 'block' : 'none'}>
        <FormLabel>Company domain</FormLabel>
        <FormControl isInvalid={!!es?.companyDomain}>
          <HStack w="100%">
            <Input
              maxW="25em"
              {...register('companyDomain', {
                value: companyDomain,
                required: 'A company domain is required',
                onBlur: () => {
                  trigger('companyDomain');
                },
                onChange: () => {
                  trigger('companyDomain');
                },
              })}
              placeholder="acme.com"
              onKeyUp={checkReturnKey}
            />
            <Text>
              Press <em>Enter ⏎</em>
            </Text>
          </HStack>
          {es.companyDomain && <FormErrorMessage>{es.companyDomain.message}</FormErrorMessage>}
        </FormControl>
      </VStack>

      <VStack alignItems="flex-start" display={cs === 2 ? 'block' : 'none'}>
        <FormLabel>Company name</FormLabel>
        <FormControl isInvalid={!!es?.company}>
          <HStack w="100%">
            <Input
              maxW="25em"
              {...register('company', { value: company, required: 'A company name is required' })}
              onBlur={() => {
                trigger('company');
              }}
              placeholder="ACME Inc."
              onKeyUp={checkReturnKey}
            />
            <Text>
              Press <em>Enter ⏎</em>
            </Text>
          </HStack>
          {es.company && <FormErrorMessage>{es.company.message}</FormErrorMessage>}
        </FormControl>
      </VStack>

      <VStack
        alignItems="flex-start"
        display={cs === 3 ? 'block' : 'none'}
        maxH="40vh"
        overflow="scroll"
      >
        <MDXRemote {...terms} components={components} />
        <Input type="hidden" {...register('acceptedToS', { value: true })} />
      </VStack>
    </>
  );

  return (
    <Box>
      <Heading as="h2" size="lg" mb="4">
        {currentStep === 3 ? 'Accept Terms of Service' : 'Enter your details'}
      </Heading>
      <Box my={8}>
        <Box ref={formContainerRef} style={{ transition: 'opacity 100ms', opacity: '1' }}>
          <chakra.form
            onSubmit={handleSubmit(() => {
              step(formContainerRef);
            })}
          >
            {displayField(currentStep, errors)}
          </chakra.form>
        </Box>
      </Box>
      <Button
        colorScheme="avocado"
        mb="8"
        onClick={() => {
          step(formContainerRef);
        }}
      >
        {currentStep === 3 ? 'I accept' : 'Next'}
      </Button>
    </Box>
  );
};

export default UserDetails;
