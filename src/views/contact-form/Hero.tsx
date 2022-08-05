import { FunctionComponent } from 'react';
import { chakra, Heading, useTheme } from '@chakra-ui/react';

const Hero: FunctionComponent = () => {
  const { gradients } = useTheme();

  return (
    <Heading as="h1" size="h1" fontWeight="extrabold" textAlign="center">
      <chakra.span bgImage={gradients.primary} bgClip="text">
        Talk{' '}
      </chakra.span>
      to Us!
    </Heading>
  );
};

export default Hero;
