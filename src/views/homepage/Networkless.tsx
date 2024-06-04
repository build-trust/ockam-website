import { Box, Flex, Heading } from '@chakra-ui/react';
import { FC } from 'react';

import ItsSimple from '@assets/images/its-simple-with.svg';
import RotatingText from '@root/components/RotatingText';

const Networkless: FC = () => (
  <>
    <Flex gap="1rem" mx={{ base: 0, md: 'auto' }}>
      <Box mt={{ base: 0, md: '1.5rem' }}>
        <Heading as="h2" size="h2" lineHeight={1.3} mb={{ base: 6, lg: 8 }} letterSpacing="-2px">
          Networkless connectivity
        </Heading>
        <Heading size="h4" as="h3">
          Ockam works at the application layer.
        </Heading>
        <Heading as="h3" size="md" color="gray.500" fontWeight="500" letterSpacing="-0.07em">
          When application security is decoupled from your network, <br />
          you can skip the pain of{' '}
          <RotatingText
            interval={3000}
            delay={4000}
            words={[
              'implicit trust in your network',
              'firewalls',
              'VPNs',
              'reverse proxies',
              'certificate management',
              'IP lists',
              'IT backlogs',
              'sysadmins',
            ]}
          />
          .
        </Heading>
      </Box>
      <Box display={{ base: 'none', md: 'block' }}>
        <ItsSimple width="100%" preserveAspectRatio="xMinYMin meet" height="160px" />
      </Box>
    </Flex>
  </>
);

export default Networkless;
