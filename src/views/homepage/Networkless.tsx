import { Box, Container, Flex, Heading } from '@chakra-ui/react';
import { FC } from 'react';

import ItsSimple from '@assets/images/its-simple-with.svg';
import RotatingText from '@root/components/RotatingText';

const Networkless: FC = () => (
  <Container variant="section" mb={{ base: 40, sm: 40, md: 12 }} pt={{ base: 16, sm: 16, md: 0 }}>
    <Flex
      direction="row-reverse"
      width="100%"
      justifyContent={{ base: 'flex-end', sm: 'flex-end', md: 'space-evenly' }}
    >
      <Box display={{ base: 'none', sm: 'none', md: 'block' }}>
        <ItsSimple width="100%" preserveAspectRatio="xMinYMin meet" height="239px" />
      </Box>
      <Box mt={{ base: '180px' }}>
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
    </Flex>
  </Container>
);

export default Networkless;
