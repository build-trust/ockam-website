import { FunctionComponent } from 'react';
import { chakra, Container, Heading, useTheme } from '@chakra-ui/react';

const Hero: FunctionComponent = () => {
  const { gradients } = useTheme();

  return (
    <Container variant="section">
      <Heading as="h1" size="h1" fontWeight="extrabold" textAlign="center">
        We are here
        <br />
        <chakra.span bgImage={gradients.primary} bgClip="text">
          to help
        </chakra.span>
      </Heading>
    </Container>
  );
};

export default Hero;
