import { FunctionComponent } from 'react';
import { chakra, Container, Flex, Heading, useTheme } from '@chakra-ui/react';

import OpenRolesButton from '@components/OpenRolesButton';

const Hero: FunctionComponent = () => {
  const { gradients } = useTheme();

  return (
    <Container variant="section" pb={16}>
      <Heading as="h1" size="h1" fontWeight="extrabold" textAlign="center">
        <chakra.span bgImage={gradients.primary} bgClip="text">
          Trust
        </chakra.span>
        <br />
        (that&apos;s it)
      </Heading>

      <Flex direction={{ base: 'column', lg: 'row' }} w={{ base: 'full', md: 'auto' }} mt={16}>
        <OpenRolesButton />
      </Flex>
    </Container>
  );
};

export default Hero;
