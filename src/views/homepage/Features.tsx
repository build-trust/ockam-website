import { FunctionComponent, SVGAttributes } from 'react';
import { Box, Container, Flex, Text, Heading, Icon } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import {
  HiFingerPrint,
  HiHeart,
  HiShieldCheck,
  HiClock,
  HiBan,
  HiGlobeAlt,
  HiLockClosed,
  HiKey,
  HiCubeTransparent,
  HiCloud,
} from 'react-icons/hi';

import GitHubIcon from '@assets/icons/github.svg';
import DeveloperIcon from '@assets/icons/developer.svg';
import LockIcon from '@assets/icons/lock.svg';
import LeftIcon from '@assets/icons/left.svg';
import GreenIconWrapper from '@components/GreenIconWrapper';
import SideBySidePanel from '@root/components/mdx/SideBySidePanel';

const IconLookup: { [key: string]: IconType } = {
  fingerprint: HiFingerPrint,
  shieldcheck: HiShieldCheck,
  clock: HiClock,
  heart: HiHeart,
  ban: HiBan,
  globe: HiGlobeAlt,
  lock: HiLockClosed,
  key: HiKey,
  transparentcube: HiCubeTransparent,
  cloud: HiCloud,
};
const FEATURES = [
  {
    icon: LeftIcon,
    image: 'app-level',
    title: 'Virtual Adjacency',
    text: 'The magical thing about Ockam - it is built around application layer protocols that abstract away the setup, management, and security of the network layer. When application connectivity and security is decoupled from your network, you no longer need to wait for your IT team to give you permissions to build connections.',
    texts: [
      'Orchestrated cryptographic identifiers and mutual authentication',
      'Managed credential authorities and ABAC',
      'Enroll applications with bootstrap services',
    ],
  },

  {
    icon: LeftIcon,
    image: 'app-level',
    title: 'Portals',
    text: 'The magical thing about Ockam - it is built around application layer protocols that abstract away the setup, management, and security of the network layer. When application connectivity and security is decoupled from your network, you no longer need to wait for your IT team to give you permissions to build connections.',
    texts: [
      'Orchestrated cryptographic identifiers and mutual authentication',
      'Managed credential authorities and ABAC',
      'Enroll applications with bootstrap services',
    ],
  },

  {
    icon: LeftIcon,
    image: 'app-level',
    title: 'Authentication between Applications',
    text: 'The magical thing about Ockam - it is built around application layer protocols that abstract away the setup, management, and security of the network layer. When application connectivity and security is decoupled from your network, you no longer need to wait for your IT team to give you permissions to build connections.',
    texts: [
      'Orchestrated cryptographic identifiers and mutual authentication',
      'Managed credential authorities and ABAC',
      'Enroll applications with bootstrap services',
    ],
  },
  {
    icon: LockIcon,
    image: 'guaranteed-authenticity',
    title: 'Encrypted Data-in-Motion',
    text: 'Modern applications are distributed and have an unwieldy number of interconnections that must trustfully exchange data. To trust data-in-motion, applications need end-to-end guarantees of data authenticity, integrity, and confidentiality. To be private and secure by-design, applications must have granular control over every trust and access decision. Ockam allows you to add these controls and guarantees to any application.',
    texts: [
      'End-to-end across networks and clouds',
      'Transport and infrastructure agnostic',
      'For existing and new infrastructure',
    ],
  },
  {
    icon: GitHubIcon,
    image: 'five-stars',
    title: 'Open and Adaptable',
    text: "Our programming libraries are open source and can be included in any applications. We've a thriving open source community and we're regularly ranked among the most popular open source security projects.",
    texts: ['Open Source', 'Add-ons for Confluent, Snowflake, Okta, KMS, UDP, and more'],
  },
  {
    icon: DeveloperIcon,
    image: 'any-language',
    title: 'Developer-first Experience',
    text: 'Ockam has been built by and for developers first. Use our OSS programming libraries to embed our protocols directly into your application, or use Ockam Command to manage your portals and secure channels via the CLI.',
    texts: ['CLI and a Rust Library', 'As simple as it should be to get data moving'],
  },
];

type FeatureProps = {
  icon?: FunctionComponent<SVGAttributes<SVGElement>> | string;
  title: string;
  texts?: string[];
  text?: string;
};

const Feature: FunctionComponent<FeatureProps> = ({ icon, title, texts, text }) => {
  const useIcon = typeof icon === 'string' ? IconLookup[icon] : icon;

  const displayText = (): JSX.Element | JSX.Element[] => {
    if (texts && texts?.length > 0) {
      return texts.map((t) => (
        <Text key={t} fontSize="sm" mb={{ base: 4, lg: 2 }} _last={{ mb: { lg: 0 } }}>
          {t}
        </Text>
      ));
    }
    if (text) {
      return (
        <Text key={`${title}-0`} fontSize="sm" mb={{ base: 4, lg: 2 }} _last={{ mb: { lg: 0 } }}>
          {text}
        </Text>
      );
    }
    return <></>;
  };
  return (
    <Flex>
      <Box flex={0} mr={5}>
        <GreenIconWrapper>
          <Icon as={useIcon} color="white" w={6} h={6} />
        </GreenIconWrapper>
      </Box>

      <Box>
        <Text fontWeight="bold" fontSize="xl" color="brand.900" mb={2} letterSpacing="-1px">
          {title}
        </Text>
        {displayText()}
      </Box>
    </Flex>
  );
};

const Features: FunctionComponent = () => (
  <Container id="pricing" variant="section" py={{ base: 16, lg: 24 }}>
    <Heading
      as="h1"
      fontWeight="extrabold"
      textAlign="center"
      color="white"
      size={{ base: '2xl', lg: '3xl' }}
      letterSpacing={{ base: '-1.5px', lg: '-1.5px' }}
      lineHeight={{ base: 1, lg: 1.5 }}
    >
      How Ockam Works
    </Heading>
    <Heading
      as="h2"
      textAlign="center"
      fontWeight="medium"
      color="rgba(255, 255, 255, 0.8)"
      size={{ base: 'lg', lg: 'xl' }}
      letterSpacing={{ base: '-1.7px', md: '-2px', lg: '-1.7px' }}
      lineHeight={{ base: 1, md: 1.2, lg: 1 }}
      mt={{ base: 5, lg: 1 }}
      mx="20"
      mb="20"
    >
      Orchestrate end-to-end encryption, mutual authentication, key management, credential
      management, and authorization policy enforcement &mdash; at massive scale.
    </Heading>
    <Box
      pt={{ base: 16, lg: 24 }}
      pb={{ base: 20, lg: 24 }}
      boxShadow="2xl"
      borderRadius="15"
      borderStyle="none"
      background="white"
      maxW="container.max"
      mx="auto"
    >
      <Container variant="section">
        <Box id="features" visibility="hidden" position="absolute" left={0} top="-80px" />

        {FEATURES.map((card, ix) => (
          <SideBySidePanel image={card.image} textOrientation={ix % 2 === 0 ? 'left' : 'right'}>
            <Heading>{card.title}</Heading>
            <Text mt="4">{card.text}</Text>
          </SideBySidePanel>
        ))}
      </Container>
    </Box>
  </Container>
);
export { Feature };
export default Features;
