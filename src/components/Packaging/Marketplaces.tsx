import { FunctionComponent } from 'react';
import { Box, Heading, Link } from '@chakra-ui/react';

import MarketplaceButton from '@root/components/Packaging/MarketplaceButton';
import AwsLogo from '@assets/images/logos/aws.svg';
import AzureLogo from '@assets/images/logos/azure.svg';
import GcpLogo from '@assets/images/logos/gcp.svg';

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
    <Link href="https://aws.amazon.com/marketplace/pp/prodview-wsd42efzcpsxk" isExternal>
      <MarketplaceButton
        padding={3}
        mx={2}
        my={4}
        shadow="lg"
        _hover={{ shadow: 'sm', cursor: 'hand' }}
      >
        <AwsLogo style={{ maxWidth: '100%', maxHeight: '100%' }} />
      </MarketplaceButton>
    </Link>
    <MarketplaceButton padding={3} mx={2} my={4} shadow="lg" _hover={{ shadow: 'sm' }}>
      <AzureLogo style={{ maxWidth: '100%', maxHeight: '100%' }} />
    </MarketplaceButton>
    <MarketplaceButton padding={1} mx={2} my={4} shadow="lg" _hover={{ shadow: 'sm' }}>
      <GcpLogo style={{ maxWidth: '100%', maxHeight: '100%' }} />
    </MarketplaceButton>
  </Box>
);
export default Marketplaces;
