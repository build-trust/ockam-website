import { Box, Flex, Heading, VStack, Link, Button, Stack, LinkProps } from '@chakra-ui/react';
import { ReactElement, ReactNode } from 'react';
import NextLink from 'next/link';

import { CONTACT_PAGE_PATH } from '@consts/paths';
import { GITHUB, LINKEDIN, TWITTER } from '@consts/externalResources';

import { FOOTER_LINKS, SOCIAL_LINKS } from './consts/navLinks';
import YoutubeIcon from './assets/youtube.svg';
import LinkedInIcon from './assets/linkedin.svg';
import XIcon from './assets/x.svg';
import GitHubIcon from './assets/github.svg';

interface NavLinkProps extends LinkProps {
  children: ReactNode;
  href: string;
}
const NavigationLink = ({ children, href, ...props }: NavLinkProps): ReactElement => (
  <Link
    fontSize={{ base: '0.875rem' }}
    color="white"
    href={href}
    as={NextLink}
    fontWeight={{ base: 400 }}
    {...props}
  >
    {children}
  </Link>
);

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
              <NavigationLink key={link.name} href={link.href}>
                {link.name}
              </NavigationLink>
            ))}
          </VStack>
        ))}
      </Flex>

      {/* Socials */}
      <Flex gap={{ base: '1rem' }} flexDirection={{ base: 'column', lg: 'row' }}>
        <Flex
          w={{ base: 'full' }}
          gap={{ base: '1rem' }}
          justifyContent={{ base: 'center', lg: 'flex-end' }}
        >
          {SOCIAL_LINKS.map(({ name, href }) => (
            <NavigationLink href={href}>{name}</NavigationLink>
          ))}
        </Flex>
        <Flex
          w={{ base: 'full' }}
          gap={{ base: '1rem' }}
          flex={{ base: 'initial', lg: 0 }}
          justifyContent={{ base: 'center', lg: 'flex-end' }}
        >
          <NavigationLink href="https://www.youtube.com/channel/UCvIHPuSfG4-vpsNFHZZaI8Q">
            <YoutubeIcon />
          </NavigationLink>
          <NavigationLink href={LINKEDIN.href}>
            <LinkedInIcon />
          </NavigationLink>
          <NavigationLink href={TWITTER.href}>
            <XIcon />
          </NavigationLink>
          <NavigationLink href={GITHUB.href}>
            <GitHubIcon />
          </NavigationLink>
        </Flex>
      </Flex>

      {/* Copy Right */}
    </Stack>
  </Box>
);

export default Footer;
