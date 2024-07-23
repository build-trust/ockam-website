import { FC } from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

import { AWS } from '@root/components/Packaging/Marketplaces';

type Props = {
  plan?: string;
};
const MarketplaceSetup: FC<Props> = ({ plan }) => (
  <Box pb={8}>
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
  </Box>
);

export default MarketplaceSetup;
