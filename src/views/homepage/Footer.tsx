import { FunctionComponent } from 'react';
import { Button, chakra, Container, Flex, Heading, useTheme } from '@chakra-ui/react';

const Footer: FunctionComponent = () => {
  const { gradients } = useTheme();

  return (
    <Container variant="section">
      <Flex
        direction={{ base: 'column', lg: 'row' }}
        justify="space-between"
        align={{ base: 'flex-start', lg: 'center' }}
        w="full"
        borderTop="1px"
        borderColor="gray.200"
        py={{ base: 10, lg: 16 }}
      >
        <Heading as="h3" size="h3" maxW="lg" mb={{ base: 9, lg: 0 }}>
          <chakra.span bgImage={gradients.primary} bgClip="text">
            Developers Love Ockam.
          </chakra.span>{' '}
          Start Building With Us!
        </Heading>

        <Button colorScheme="avocado" color="black" size="lg">
          Go To Open Source
        </Button>
      </Flex>
    </Container>
  );
};

export default Footer;
