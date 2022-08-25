import { FunctionComponent } from 'react';
import { chakra, Container, Text, Heading, useTheme } from '@chakra-ui/react';

const Hero: FunctionComponent = () => {
  const { gradients } = useTheme();

  return (
    <Container variant="section">
      <Heading as="h1" size="h1" w="full" fontWeight="extrabold" textAlign="center">
        <chakra.span bgImage={gradients.primary} bgClip="text">
          Features
        </chakra.span>
        <br />
        of Ockam
      </Heading>
      <Text mt={12} fontSize="xl" w={{ base: 'full', lg: '700px' }} textAlign="center">
        Managing data in motion is really really hard. We’ve thought of the details and have reduced
        the vulnerability surface of your data to something manageable.
      </Text>
    </Container>
  );
};

export default Hero;
