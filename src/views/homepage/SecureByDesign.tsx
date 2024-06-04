import { Box, Flex, Heading } from '@chakra-ui/react';
import { FC } from 'react';

import AndIts from '@assets/images/and-its.svg';
import RotatingText from '@root/components/RotatingText';

const SecureByDesign: FC = () => (
  <>
    <Flex direction="row" gap="1rem" mx={{ base: 0, md: 'auto' }}>
      <Box display={{ base: 'none', md: 'block' }}>
        <AndIts width="100%" preserveAspectRatio="xMinYMin meet" height="160px" />
      </Box>

      <Box mt="1.5rem">
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
  </>
);

export default SecureByDesign;
