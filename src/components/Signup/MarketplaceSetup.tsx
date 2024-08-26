/* eslint-disable @typescript-eslint/no-unsafe-function-type */
import { FC, KeyboardEventHandler, useEffect, useRef, useState } from 'react';
import {
  Box,
  Button,
  Flex,
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
import { useForm, useWatch } from 'react-hook-form';

import { AWS } from '@root/components/Packaging/Marketplaces';

import OrchestratorAPI from '../Orchestrator';
import { User } from '../Auth';
import { TIERS } from '../Packaging/tiers';

type Props = {
  plan: string;
  hasPaymentMethod: boolean;
  complete: () => void;
  customer?: string;
  product?: string;
  user: User;
  api: OrchestratorAPI;
  companyDomain: string;
  spaceId: string;
  isDelegate: boolean;
};

type DetailsProps = {
  plan: string;
  onDelegate: () => void;
  isDelegate: boolean;
};
const MarketplaceDetails: FC<DetailsProps> = ({ plan, onDelegate, isDelegate }) => {
  const title = () => {
    if (isDelegate) return 'Attach marketplace subscription';
    return 'Add subscription via your cloud marketplace';
  };

  const text = () => {
    if (isDelegate) {
      return [
        `Your teammate has already completed most of your account setup. To ensure they 
      can continue using the service uninterrupted a subscription in the AWS marketplace must be attached 
      — and they've requested that you complete that process for them.`,

        `Click the button below to complete the setup.`,
      ];
    }
    return [
      `Ockam's plans can be paid for via your cloud marketplace. By subscribing via the
      marketplace the process is as frictionless as possible for you and your team. You&apos;re able
      to utilize existing spend commitments with your cloud providers, there&apos;s no paperwork to
      fill out, no budget approvals, and no vendor onboarding.`,
    ];
  };

  return (
    <Flex direction="column" maxW="45em">
      <Heading as="h2" size="h2" mb="8">
        {title()}
      </Heading>
      {text().map((t, ix) => (
        <Text variant="readabilityOptimized" key={`mpt-${ix}`}>
          {t}
        </Text>
      ))}

      <AWS plan={plan} />

      {!isDelegate && (
        <Button colorScheme="gray" mx={4} my={8} onClick={onDelegate}>
          I don&apos;t have the required permissions to complete this
        </Button>
      )}
    </Flex>
  );
};

type Inputs = {
  email: string;
};

type DelegationProps = {
  companyDomain: string;
  onBack: () => void;
  api: OrchestratorAPI;
  spaceId: string;
  onComplete: () => void;
};
const MarketplaceDelegation: FC<DelegationProps> = ({
  companyDomain,
  onBack,
  spaceId,
  api,
  onComplete,
}) => {
  const {
    register,
    handleSubmit,
    control,
    trigger,
    formState: { errors },
  } = useForm<Inputs>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const email = useWatch({ name: 'email', control, defaultValue: '' });

  const checkReturnKey: KeyboardEventHandler<HTMLInputElement> = (e) => {
    const target = e.target as HTMLInputElement;
    const name = target.name as 'email';
    return trigger(name).then((isValid) => {
      if (!isValid || errors.email) return false;
      if (errors.email) return false;
      if (e && e.key === 'Enter') submit();
    });
  };

  const submit = async () => {
    setIsSubmitting(true);
    await api.createPaymentDelegate(spaceId, email);
    onComplete();
  };

  return (
    <Flex direction="column" maxW="45em">
      <Heading as="h2" size="h2" mb="8">
        👋 Invite a teammate&hellip;
      </Heading>
      <Text variant="readabilityOptimized">
        To complete the setup your free trial needs to be attached to your organization&apos;s AWS
        Marketplace account. If you don&apos;t have the required permissions to accept a marketplace
        subscription let us know the email address of the person that does, and we&apos;ll invite
        them to complete the process.
      </Text>
      <chakra.form onSubmit={handleSubmit(submit)}>
        <VStack alignItems="flex-start">
          <FormLabel>Their email address:</FormLabel>
          <FormControl isInvalid={!!errors.email}>
            <HStack w="100%">
              <Input
                maxW="25em"
                {...register('email', {
                  value: '',
                  required: 'An email address is required',
                  pattern: { value: /^.+@.+\..+$/, message: 'invalid email address' },
                })}
                onBlur={() => {
                  trigger('email');
                }}
                onKeyUp={checkReturnKey}
                placeholder={`someone@${companyDomain}`}
              />
              <Text>
                Press <em>Enter ⏎</em>
              </Text>
            </HStack>
            {errors.email && <FormErrorMessage>{errors.email.message}</FormErrorMessage>}
          </FormControl>
        </VStack>
        <Button
          colorScheme="gray"
          my={8}
          onClick={onBack}
          disabled={isSubmitting}
          isLoading={isSubmitting}
        >
          Go back
        </Button>
      </chakra.form>
    </Flex>
  );
};
const MarketplaceSetup: FC<Props> = ({
  plan,
  hasPaymentMethod,
  complete,
  companyDomain,
  api,
  spaceId,
  isDelegate,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showDelegate, setShowDelegate] = useState(false);

  useEffect(() => {
    if (complete) {
      if (hasPaymentMethod) complete();
      if (plan) {
        const tier = TIERS.find((t) => t.name === plan.replace('developer-', ''));
        if (tier && !tier.marketplaceOnly) complete();
      }
    }
  }, []);

  const toggle = () => {
    if (containerRef && containerRef.current) containerRef.current.style.opacity = '0';
    setTimeout(() => {
      setShowDelegate(!showDelegate);
      if (containerRef && containerRef.current) containerRef.current.style.opacity = '1';
    }, 800);
  };

  return (
    <Box pb={8} style={{ transition: '200ms opacity ease-in', opacity: '1' }} ref={containerRef}>
      {!showDelegate && (
        <MarketplaceDetails plan={plan} onDelegate={toggle} isDelegate={isDelegate} />
      )}
      {showDelegate && (
        <MarketplaceDelegation
          companyDomain={companyDomain}
          onBack={toggle}
          api={api}
          onComplete={complete}
          spaceId={spaceId}
        />
      )}
    </Box>
  );
};

export default MarketplaceSetup;
