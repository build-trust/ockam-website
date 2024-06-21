import { Box, Flex, Heading, VStack, Link } from '@chakra-ui/react';
import { ReactElement } from 'react';
import NextLink from 'next/link';

import FOOTER_LINKS from './consts/navLinks';

const Footer = (): ReactElement => (
  <Box as="footer" bg="brand.800" color="white" px={{ base: '0.75rem' }} py={{ base: '2.5rem' }}>
    <Flex
      gap={{ base: '2rem', lg: 'unset' }}
      justifyContent={{ base: 'normal', lg: 'space-between' }}
      flexDir={{ base: 'column', lg: 'row' }}
      maxW="70rem"
      mx="auto"
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
  </Box>
);

export default Footer;
