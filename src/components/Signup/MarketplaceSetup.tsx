import { createRef, FC, useEffect, useState } from 'react';
import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, Text } from '@chakra-ui/react';

import { AWS } from '@root/components/Packaging/Marketplaces';

import { OrchestratorAPI } from '../Orchestrator';
import { User } from '../Auth';

type Props = {
  plan?: string;
  hasPaymentMethod?: boolean;
  complete?: Function;
  hideNext: Function;
  customerId?: string;
  productId?: string;
  user?: User;
};

type BuyerProps = {
  complete?: Function;
  hideNext: Function;
  productId: string;
  customerId: string;
  user: User;
};
const BuyerDetails: FC<BuyerProps> = ({ complete, hideNext, productId, customerId, user }) => {
  const refName = createRef<HTMLInputElement>();
  const refCompany = createRef<HTMLInputElement>();

  useEffect(() => {
    hideNext();
  });

  const submit = (): void => {
    const name = refName.current?.value;
    const company = refCompany.current?.value;
    if (name && company && user.email) {
      OrchestratorAPI.updateBuyerContact(
        user.token,
        productId,
        customerId,
        name,
        company,
        user.email,
      ).then(() => {
        if (complete) complete();
      });
    }
  };

  return (
    <Flex direction="column" maxW="45em">
      <Heading as="h2" size="h2" mb="8">
        Update your details
      </Heading>
      <Box>
        <Text variant="readabilityOptimized">
          Your subscription details are almost complete! We just need a couple of final pieces of
          information and your setup will be finalized.
        </Text>
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input type="text" placeholder="Your name..." mb={4} ref={refName} />
          <FormLabel>Company</FormLabel>
          <Input type="text" placeholder="ACME Widgets" mb={4} ref={refCompany} />
          <Button colorScheme="avocado" my="4" onClick={submit} maxW="sm">
            Save
          </Button>
        </FormControl>
      </Box>
    </Flex>
  );
};

type DetailsProps = {
  plan?: string;
};
const MarketplaceDetails: FC<DetailsProps> = ({ plan }) => (
  <Flex direction="column" maxW="45em">
    <Heading as="h2" size="h2" mb="8">
      Add subscription via your cloud marketplace
    </Heading>
    <Text variant="readabilityOptimized">
      Ockam&apos;s plans can be paid for via your cloud marketplace. By subscribing via the
      marketplace the process is as frictionless as possible for you and your team. You&apos;re able
      to utilize existing spend commitments with your cloud providers, there&apos;s no paperwork to
      fill out, no budget approvals, and no vendor onboarding.
    </Text>

    <AWS plan={plan} />
  </Flex>
);

const MarketplaceSetup: FC<Props> = ({
  plan,
  hasPaymentMethod,
  complete,
  hideNext,
  customerId,
  productId,
  user,
}) => {
  const [showBuyer, setShowBuyer] = useState(true);
  useEffect(() => {
    if (hasPaymentMethod && customerId && productId) setShowBuyer(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box pb={8}>
      {!showBuyer && <MarketplaceDetails plan={plan} />}
      {showBuyer && productId && customerId && user && (
        <BuyerDetails
          complete={complete}
          hideNext={hideNext}
          productId={productId}
          customerId={customerId}
          user={user}
        />
      )}
    </Box>
  );
};

export default MarketplaceSetup;
