import { FunctionComponent } from 'react';
import {
  Box,
  Button,
  chakra,
  Container,
  Flex,
  Heading,
  Link,
  Text,
  useTheme,
} from '@chakra-ui/react';

import LogoGray from '@assets/logo-gray.svg';
import { LinkedinIcon, TwitterIcon } from '@components/icons';

const LINKS = [
  { text: 'Support', href: 'https://github.com/build-trust/ockam/discussions/categories/support' },
  { text: 'Discussion', href: 'https://github.com/build-trust/ockam/discussions' },
];

const MainLayoutFooter: FunctionComponent = () => {
  const { gradients } = useTheme();

  return (
    <Box as="footer">
      <Container variant="section">
        <Flex
          direction={{ base: 'column', lg: 'row' }}
          justify={{ base: 'space-between' }}
          align="center"
          w="full"
          borderTop="1px"
          borderColor="gray.200"
          py={{ base: 10, lg: 16 }}
        >
          <Heading as="h3" size="h3" maxW="lg" mb={{ base: 9, lg: 0 }}>
            Developers{' '}
            <chakra.span bgImage={gradients.primary} bgClip="text">
              Love Ockam.
            </chakra.span>
          </Heading>

          <Button
            as="a"
            href="https://github.com/build-trust/ockam#next-steps"
            target="_blank"
            colorScheme="avocado"
            color="black"
            size="lg"
          >
            Build a Demo App
          </Button>
        </Flex>
      </Container>
      <Container variant="section">
        <Flex
          direction={{ base: 'column', lg: 'row' }}
          pb={{ base: 10, lg: 20 }}
          pt={6}
          w="full"
          align="center"
        >
          <Flex align="center" direction={{ base: 'column', lg: 'row' }} order={{ base: 1, lg: 0 }}>
            <Box
              as={LogoGray}
              w={{ base: '126px', lg: '154px' }}
              h={{ base: '36px', lg: '44px' }}
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
              {LINKS.map((link) => (
                <Text
                  key={link.text}
                  as="a"
                  href={link.href}
                  target="_blank"
                  _hover={{ textDecoration: 'underline' }}
                  opacity="0.8"
                  mr={6}
                >
                  {link.text}
                </Text>
              ))}
            </Flex>

            <Box>
              <Link href="https://www.linkedin.com/company/ockam.io/" isExternal>
                <LinkedinIcon w={6} h={6} color="gray.500" mr={5} />
              </Link>

              <Link href="https://twitter.com/ockam" isExternal>
                <TwitterIcon w={6} h={6} color="gray.500" />
              </Link>
            </Box>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default MainLayoutFooter;
