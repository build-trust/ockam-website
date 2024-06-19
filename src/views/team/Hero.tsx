import { FunctionComponent } from 'react';
import { chakra, Container, Flex, Heading, useTheme } from '@chakra-ui/react';

import LineDivider, { DashedLineDivider } from '@components/LineDivider';
import StepsLabel from '@components/StepsLabel';
import OpenRolesButton from '@components/OpenRolesButton';

const Hero: FunctionComponent = () => {
  const { gradients } = useTheme();

  return (
    <Container variant="section">
      <Heading as="h1" size="h1" w="full" fontWeight="extrabold" textAlign="center">
        Build
        <br /> for
        <br />
        <chakra.span bgImage={gradients.primary} bgClip="text" pr="0.4rem">
          Builders
        </chakra.span>
      </Heading>

      <Flex
        direction={{ base: 'column', lg: 'row' }}
        w={{ base: 'full', md: 'auto' }}
        mt={{ base: 16, lg: 14 }}
      >
        <OpenRolesButton />
      </Flex>

      <Flex
        position="relative"
        direction="column"
        align="center"
        mt={{ base: 20, lg: 16 }}
        pt={{ base: 0, lg: 24 }}
        pb={14}
      >
        <DashedLineDivider />

        <StepsLabel>
          <LineDivider bottom="100%" h={16} bg={gradients.tertiary} />
          Join Us
          <LineDivider top="100%" h={16} borderRadius="0" />
        </StepsLabel>
      </Flex>
    </Container>
  );
};

export default Hero;
