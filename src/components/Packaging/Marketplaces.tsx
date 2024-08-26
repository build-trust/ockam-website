import { FC, FunctionComponent } from 'react';
import { Box, Heading, Link, Text } from '@chakra-ui/react';

import MarketplaceButton from '@root/components/Packaging/MarketplaceButton';
import AwsLogo from '@assets/images/logos/aws.svg';
import AzureLogo from '@assets/images/logos/azure.svg';
import GcpLogo from '@assets/images/logos/gcp.svg';

import { TIERS } from './tiers';

type Props = {
  plan?: string;
};

const getMarketplaceLink = (platform: string, plan?: string): string => {
  const tier = TIERS.find((t) => t.name.toLowerCase() === plan?.toLowerCase());
  if (tier?.marketplaces) {
    const marketplace = tier.marketplaces[platform];
    if (marketplace) return marketplace.link;
  }
  return '/download';
};
const AWS: FC<Props> = ({ plan }) => (
  <Link href={getMarketplaceLink('aws', plan)} isExternal>
    <MarketplaceButton
      padding={3}
      mx={2}
      my={4}
      shadow="lg"
      _hover={{ shadow: 'sm', cursor: 'hand' }}
    >
      <AwsLogo style={{ maxWidth: '100%', maxHeight: '50px', minHeight: '40px' }} />
      <Text my={2}>Setup payment in AWS Marketplace</Text>
    </MarketplaceButton>
  </Link>
);

const Azure: FC<Props> = ({ plan }) => (
  <Link href={getMarketplaceLink('azure', plan)} isExternal>
    <MarketplaceButton padding={3} mx={2} my={4} shadow="lg" _hover={{ shadow: 'sm' }}>
      <AzureLogo style={{ maxWidth: '100%', maxHeight: '100%' }} />
    </MarketplaceButton>
  </Link>
);

const GCP: FC<Props> = ({ plan }) => (
  <Link href={getMarketplaceLink('gcp', plan)} isExternal>
    <MarketplaceButton padding={1} mx={2} my={4} shadow="lg" _hover={{ shadow: 'sm' }}>
      <GcpLogo style={{ maxWidth: '100%', maxHeight: '100%' }} />
    </MarketplaceButton>
  </Link>
);

const Marketplaces: FunctionComponent = () => (
  <Box textAlign="center" mt="10" mb="20">
    <Heading
      as="h4"
      letterSpacing="-1px"
      size="lg"
      style={{ textWrap: 'balance' }}
      mb="4"
      color="#242A31"
    >
      Sign up through your preferred cloud marketplace to unify billing &amp; leverage existing
      commitments
    </Heading>
    <AWS />
    <Azure />
    <GCP />
  </Box>
);

export { AWS, Azure, GCP };
export default Marketplaces;
