import { Box, Flex, Heading, VStack, Link, Button, Stack, LinkProps, Text } from '@chakra-ui/react';
import { ReactElement, ReactNode } from 'react';
import NextLink from 'next/link';

import { CONTACT_PAGE_PATH } from '@consts/paths';
import { GITHUB, LINKEDIN, TWITTER, YOUTUBE } from '@consts/externalResources';

import { FOOTER_LINKS, SOCIAL_LINKS } from './consts/navLinks';
import YoutubeIcon from './assets/youtube.svg';
import LinkedInIcon from './assets/linkedin.svg';
import XIcon from './assets/x.svg';
import GitHubIcon from './assets/github.svg';
import OckamLogo from './assets/ockam.svg';

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
    <Stack
      gap={{ base: '3.125rem', lg: '4rem' }}
      maxW="70rem"
      mx="auto"
      whiteSpace={{ base: 'initial', lg: 'nowrap' }}
    >
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
          <Box as="span" color="brand.500">
            Trust
          </Box>
        </Heading>
        <Button
          as={NextLink}
          href={CONTACT_PAGE_PATH}
          variant="primary"
          px="2rem"
          py="1rem"
          height="3.5rem"
        >
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
      <Flex
        gap={{ base: '1rem' }}
        flexDirection={{ base: 'column', lg: 'row' }}
        alignItems={{ base: 'initial', lg: 'flex-end' }}
      >
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
          <NavigationLink href={YOUTUBE.href}>
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

        {/* Copy Right */}
        <Flex
          order={{ base: 'initial', lg: -1 }}
          flexDirection={{ base: 'column', lg: 'row' }}
          mt={{ base: '2.5rem', lg: 'unset' }}
          gap={{ base: '0.625rem', lg: '1.25rem' }}
          alignItems={{ base: 'center', lg: 'unset' }}
        >
          <Box as={OckamLogo} width={{ base: '9.625rem', lg: '10.25rem' }} height="auto" />
          <Text
            textAlign={{ base: 'center', lg: 'initial' }}
            color="white"
            fontWeight={400}
            alignSelf={{ base: 'unset', lg: 'end' }}
          >
            © {new Date().getFullYear()} Ockam.io All Rights Reserved
          </Text>
        </Flex>
      </Flex>
    </Stack>
  </Box>
);

export default Footer;
