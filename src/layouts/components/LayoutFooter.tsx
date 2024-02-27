import { FunctionComponent } from 'react';
import NextLink from 'next/link';
import {
  Box,
  BoxProps,
  Button,
  chakra,
  Container,
  Flex,
  Heading,
  Link as ChakraLink,
  Text,
  useTheme,
  VStack,
} from '@chakra-ui/react';

import LogoGray from '@assets/logo-gray.svg';
import { LINKEDIN, TWITTER, DISCUSSION, DISCORD } from '@consts/externalResources';
import {
  CONTACT_FORM_PATH,
  CONTACT_PAGE_PATH,
  MISSION_AND_VISION_PATH,
  SIGNUP_PATH,
  STYLE_GUIDE_PATH,
  TEAM_PATH,
} from '@consts/paths';

const NAV = [
  {
    heading: 'Learn',
    links: [
      {
        name: 'Get started',
        href: 'https://docs.ockam.io/#quick-start',
        isExternal: true,
      },
      {
        name: 'Ockam Command',
        href: 'https://docs.ockam.io/reference/command',
        isExternal: true,
      },
      {
        name: 'Programming libraries',
        href: 'https://docs.ockam.io/reference/libraries',
        isExternal: true,
      },
      {
        name: 'Cryptographic & messaging protocols',
        href: 'https://docs.ockam.io/reference/protocols',
        isExternal: true,
      },
      {
        name: 'Documentation',
        href: 'https://docs.ockam.io/',
        isExternal: true,
      },
    ],
  },

  {
    heading: 'Use cases',
    links: [
      {
        name: 'Database protection',
        href: '/for/private-connectivity',
        isExternal: false,
      },
      {
        name: 'Kafka Encryption',
        href: '/for/kafka',
        isExternal: false,
      },
      { name: 'SaaS Connectivity', href: '/for/saas-connectivity', isExternal: false },
      {
        name: 'Sales Engineers',
        href: '/for/sales-engineers',
        isExternal: false,
      },
      {
        name: 'Confluent Cloud compliance',
        href: 'https://docs.ockam.io/guides/use-cases/end-to-end-encryption-through-confluent-cloud',
        isExternal: true,
      },
    ],
  },

  {
    heading: 'Company',
    links: [
      { name: 'Open roles', href: `${TEAM_PATH}#open-roles`, isExternal: false },
      { name: 'Our mission & values', href: MISSION_AND_VISION_PATH, isExternal: false },
      { name: 'The team', href: TEAM_PATH, isExternal: false },
      { name: 'Team handbook', href: '/blog/team_handbook', isExternal: false },
      { name: 'Compliance & audit reports', href: 'https://audits.ockam.io/', isExternal: true },
      { name: 'Orchestrator status', href: 'https://status.ockam.io/', isExternal: true },
      {
        name: 'Style Guide',
        href: STYLE_GUIDE_PATH,
        isExternal: false,
      },
      { name: 'Privacy Notice', href: '/policies/privacy', isExternal: false },
    ],
  },

  {
    heading: 'Contact',
    links: [
      { ...DISCUSSION, isExternal: true },
      { name: 'Build Trust community Discord', href: DISCORD.href, isExternal: true },
      {
        name: 'Support',
        href: CONTACT_PAGE_PATH,
        isExternal: false,
      },
      { ...LINKEDIN, isExternal: true },
      { ...TWITTER, isExternal: true },
      { name: 'Newsletter - The Razor', href: '/the-razor', isExternal: false },
    ],
  },
];

interface Props extends BoxProps {
  landingPage?: boolean;
  backgroundColor?: string;
}
const LayoutFooter: FunctionComponent<Props> = ({ landingPage, ...restProps }) => {
  const { gradients } = useTheme();
  const contactFormPath = (): string => {
    if (landingPage) return '#contact';
    return CONTACT_FORM_PATH;
  };

  const contentLinks = (): JSX.Element => {
    if (landingPage) return <></>;
    const links = (
      <Flex
        direction={{ base: 'column', lg: 'row' }}
        pb={{ base: 10, lg: 20 }}
        pt={6}
        w="full"
        align={{ base: 'center', lg: 'flex-start' }}
      >
        {NAV.map((section) => (
          <VStack
            align={{ base: 'center', lg: 'flex-start' }}
            verticalAlign="top"
            key={section.heading}
            mx={0}
            px={6}
            mb={{ base: 6, lg: 0 }}
          >
            <Heading as="h4" maxWidth="md" fontSize="sm" color="gray.500">
              {section.heading}
            </Heading>
            {section.links.map((link) => (
              <ChakraLink
                key={link.name}
                href={link.href}
                mt={0}
                {...(link.isExternal ? { isExternal: true } : { passHref: true, as: NextLink })}
              >
                <Text _hover={{ textDecoration: 'underline' }} opacity={0.8} fontSize="sm">
                  {link.name}
                </Text>
              </ChakraLink>
            ))}
          </VStack>
        ))}
      </Flex>
    );
    return links;
  };
  return (
    <Container as="footer" variant="section" {...restProps}>
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
          Build{' '}
          <chakra.span bgImage={gradients.primary} bgClip="text">
            Trust
          </chakra.span>
        </Heading>
        <Box>
          <Button
            as="a"
            href={SIGNUP_PATH}
            textAlign="center"
            target="_blank"
            colorScheme="avocado"
            color="black"
            size="lg"
            display={{ base: 'block', lg: 'inline-block' }}
            mr={{ base: 0, lg: 8 }}
            my={{ base: 2, lg: 0 }}
          >
            Sign Up
          </Button>
          <Button
            as="a"
            href={contactFormPath()}
            colorScheme="avocado"
            color="black"
            size="lg"
            display={{ base: 'block', lg: 'inline-block' }}
            mr={{ base: 0, lg: 0 }}
            my={{ base: 2, lg: 0 }}
          >
            Get a Demo
          </Button>
        </Box>
      </Flex>

      {contentLinks()}
      <Flex align="center" direction={{ base: 'column', lg: 'column' }} order={{ base: 1, lg: 0 }}>
        <Box
          as={LogoGray}
          w={{ base: '7.875rem', lg: '9.625rem' }}
          h={{ base: '2.25rem', lg: '2.75rem' }}
          mb={{ base: 6, lg: 2 }}
          mr={{ base: 0, lg: 0 }}
        />

        <Text opacity="0.8" fontSize={{ base: 'md', lg: 'md' }}>
          © {new Date().getFullYear()} Ockam.io All Rights Reserved
        </Text>
      </Flex>
    </Container>
  );
};

export default LayoutFooter;
