import { FunctionComponent } from 'react';
import { Box, Button, Container, Flex, Heading, Text, chakra, useTheme } from '@chakra-ui/react';

import LogoDark from '@assets/logo-dark.svg';
import { LinkedinIcon, TwitterIcon } from '@components/icons';

const MainLayoutFooter: FunctionComponent = () => {
  const { gradients } = useTheme();

  return (
    <Box as="footer">
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
            <chakra.span bgImage={gradients.primaryGradient} bgClip="text">
              Developers Love Ockam.
            </chakra.span>{' '}
            Start Building With Us!
          </Heading>

          <Button colorScheme="avocado" color="black" size="lg">
            Go To Open Source
          </Button>
        </Flex>

        <Flex
          direction={{ base: 'column', lg: 'row' }}
          pb={{ base: 10, lg: 20 }}
          pt={6}
          w="full"
          align="center"
        >
          <Flex align="center" direction={{ base: 'column', lg: 'row' }} order={{ base: 1, lg: 0 }}>
            <Box
              as={LogoDark}
              w={{ base: '126px', lg: '154px' }}
              h={{ base: '36px', lg: '44px' }}
              filter="grayscale(100%) brightness(20%)"
              mb={{ base: 6, lg: 0 }}
              mr={{ base: 0, lg: 8 }}
            />

            <Text opacity="0.8" fontSize={{ base: 'lg', lg: 'md' }}>
              © 2022 Ockam.io All Rights Reserved
            </Text>
          </Flex>

          <Flex
            direction={{ base: 'column', lg: 'row' }}
            flex={1}
            align="center"
            justify="flex-end"
            mb={{ base: 12, lg: 0 }}
          >
            <Flex mb={{ base: 4, lg: 0 }}>
              <Text opacity="0.8" mr={6}>
                Request Demo
              </Text>
              <Text opacity="0.8" mr={6}>
                Discussion
              </Text>
              <Text opacity="0.8" mr={6}>
                Contact
              </Text>
            </Flex>
            <Box>
              <LinkedinIcon w={6} h={6} color="gray.500" mr={5} />
              <TwitterIcon w={6} h={6} color="gray.500" />
            </Box>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default MainLayoutFooter;
