import { FunctionComponent } from 'react';
import { chakra, Container, Flex, Heading, Button, useTheme } from '@chakra-ui/react';

import LineDivider, { DashedLineDivider } from '@components/LineDivider';
import StepsLabel from '@components/StepsLabel';

const Hero: FunctionComponent = () => {
  const { gradients } = useTheme();

  return (
    <Container variant="section">
      <Heading as="h1" size="h1" fontWeight="extrabold" textAlign="center">
        Build
        <br /> for
        <br />
        <chakra.span bgImage={gradients.primary} bgClip="text">
          Builders
        </chakra.span>
        .
      </Heading>

      <Flex
        direction={{ base: 'column', lg: 'row' }}
        w={{ base: 'full', md: 'auto' }}
        mt={{ base: 16, lg: 14 }}
      >
        <Button as="a" href="#open-roles" size="lg" colorScheme="avocado" color="black">
          See the Open Roles
        </Button>
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
          Our only value is trust
          <LineDivider top="100%" h={16} borderRadius="0" />
        </StepsLabel>
      </Flex>
    </Container>
  );
};

export default Hero;
