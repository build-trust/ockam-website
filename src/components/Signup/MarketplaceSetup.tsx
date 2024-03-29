import { FC } from 'react';
import { Box, Heading, ListItem, OrderedList, Text } from '@chakra-ui/react';

import { AWS, Azure, GCP } from '@root/components/Packaging/Marketplaces';

type Props = {
  plan?: string;
};
const MarketplaceSetup: FC<Props> = ({ plan }) => (
  <Box pb={8}>
    <Heading as="h2" size="h2" mb="8">
      Add subscription via your cloud marketplace
    </Heading>
    <Text variant="readabilityOptimized">
      Ockam&apos;s Business and Enterprise plans are available for purchase via your cloud
      marketplace. By subscribing via the marketplace the process is as frictionless as possible for
      you and your team. You&apos;re able to utilize existing spend commitments with your cloud
      providers, there&apos;s no paperwork to fill out, no budget approvals, no vendor onboarding.
    </Text>
    <Text variant="readabilityOptimized">You can get started today! Here&apos;s the steps:</Text>
    <OrderedList>
      <ListItem>Click your preferred cloud marketplace below</ListItem>
      <ListItem>Sign in to your account at the cloud marketplace</ListItem>
      <ListItem>Choose your preferred subscription option</ListItem>
      <ListItem>Click subscribe</ListItem>
      <ListItem>Check your email for the next steps</ListItem>
    </OrderedList>
    <AWS plan={plan} />
    <Azure plan={plan} />
    <GCP plan={plan} />
  </Box>
);

export default MarketplaceSetup;
