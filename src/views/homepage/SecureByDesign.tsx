import { Box, Container, Flex, Heading } from '@chakra-ui/react';
import { FC } from 'react';

import AndIts from '@assets/images/and-its.svg';
import RotatingText from '@root/components/RotatingText';

const SecureByDesign: FC = () => (
  <Container variant="section" style={{ clear: 'both' }} mb={{ base: 0, md: 12 }}>
    <Flex
      direction="row"
      width="100%"
      justifyContent={{ base: 'flex-start', sm: 'flex-start', md: 'space-evenly' }}
    >
      <Box display={{ base: 'none', sm: 'none', md: 'block' }}>
        <AndIts width="100%" preserveAspectRatio="xMinYMin meet" height="180px" />
      </Box>

      <Box mt={{ base: 18, md: '180px' }}>
        <Heading as="h2" size="h2" lineHeight={1.3} mb={{ base: 6, lg: 8 }} letterSpacing="-2px">
          Secure-by-design
        </Heading>
        <Heading size="h4" as="h3">
          Ockam is{' '}
          <RotatingText
            interval={3000}
            delay={4000}
            words={['audited', 'point-to-point', 'open source', 'zero trust']}
          />
          .
        </Heading>
        <Heading as="h3" size="md" color="gray.500" fontWeight="500" letterSpacing="-0.07em">
          So your applications can be secure too.
        </Heading>
      </Box>
    </Flex>
  </Container>
);

export default SecureByDesign;
