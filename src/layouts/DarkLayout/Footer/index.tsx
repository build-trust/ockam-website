import { Box, Flex, Heading, VStack, Link, Button, Stack } from '@chakra-ui/react';
import { ReactElement } from 'react';
import NextLink from 'next/link';

import { CONTACT_PAGE_PATH } from '@consts/paths';

import FOOTER_LINKS from './consts/navLinks';

const Footer = (): ReactElement => (
  <Box as="footer" bg="brand.800" color="white" px={{ base: '0.75rem' }} py={{ base: '2.5rem' }}>
    <Stack gap={{ base: '3.125rem', lg: '4rem' }} maxW="70rem" mx="auto">
      {/* Heading + Contact Button */}
      <Flex
        gap={{ base: '1.25rem' }}
        flexDirection={{ base: 'column', lg: 'row' }}
        justifyContent={{ base: 'center', lg: 'space-between' }}
        alignItems={{ base: 'center' }}
      >
        <Heading
          as="p"
          color="white"
          fontFamily="neutraface"
          letterSpacing={{ base: '0rem', lg: '0.01rem' }}
          fontSize={{ base: '2.5rem', lg: '6rem' }}
          fontWeight={{ base: 700 }}
        >
          Build{' '}
          <Box as="span" color="avocado.200">
            Trust
          </Box>
        </Heading>
        <Button as={NextLink} href={CONTACT_PAGE_PATH} variant="primary" px="2rem" py="1rem">
          Book a demo
        </Button>
      </Flex>

      {/* Nav Links */}
      <Flex
        gap={{ base: '2rem', lg: 'unset' }}
        justifyContent={{ base: 'normal', lg: 'space-between' }}
        flexDir={{ base: 'column', lg: 'row' }}
      >
        {FOOTER_LINKS.map((section) => (
          <VStack
            gap={{ base: '1rem', lg: '0.5rem' }}
            align={{ base: 'flex-start' }}
            key={section.heading}
          >
            <Heading as="h4" color="white" fontSize={{ base: '1rem' }} fontWeight={{ base: 700 }}>
              {section.heading}
            </Heading>
            {section.links.map((link) => (
              <Link
                fontSize={{ base: '0.875rem' }}
                color="white"
                key={link.name}
                href={link.href}
                as={NextLink}
                fontWeight={{ base: 400 }}
              >
                {link.name}
              </Link>
            ))}
          </VStack>
        ))}
      </Flex>
    </Stack>
  </Box>
);

export default Footer;
