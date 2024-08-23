/* eslint-disable @typescript-eslint/no-unsafe-function-type */
import { FC, useEffect } from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';

import { AWS } from '@root/components/Packaging/Marketplaces';

import OrchestratorAPI from '../Orchestrator';
import { User } from '../Auth';
import { TIERS } from '../Packaging/tiers';

type Props = {
  plan?: string;
  hasPaymentMethod?: boolean;
  complete?: Function;
  customer?: string;
  product?: string;
  user?: User;
  api?: OrchestratorAPI;
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

const MarketplaceSetup: FC<Props> = ({ plan, hasPaymentMethod, complete }) => {
  useEffect(() => {
    if (complete) {
      if (hasPaymentMethod) complete();
      if (plan) {
        const tier = TIERS.find((t) => t.name === plan.replace('developer-', ''));
        if (tier && !tier.marketplaceOnly) complete();
      }
    }
  }, []);

  return (
    <Box pb={8}>
      <MarketplaceDetails plan={plan} />
    </Box>
  );
};

export default MarketplaceSetup;
