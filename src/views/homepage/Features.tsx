import { FunctionComponent, SVGAttributes } from 'react';
import {
  Box,
  Container,
  Flex,
  Text,
  Heading,
  SimpleGrid,
  Icon,
  Button,
  Link,
} from '@chakra-ui/react';
import styled from 'styled-components';
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
import { DOCS } from '@consts/externalResources';

const TITLE = 'Connect Applications, not Networks';
const DESCRIPTIONS = [
  'Forget about configuring networks, clouds, gateways, protocols, routers, relays, ELBs, VPNs, VPCs, Private Links, reverse proxies, VPC Peering, PKIs, CAs, and tokens.',
  "You don't want to touch the network, and you don't need to engage your IT teams either!",
];
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
    title: 'Authentication between Applications',
    texts: [
      'Orchestrated cryptographic identifiers and mutual authentication',
      'Managed credential authorities and ABAC',
      'Enroll applications with bootstrap services',
    ],
  },
  {
    icon: LockIcon,
    title: 'Encrypted Data-in-Motion',
    texts: [
      'End-to-end across networks and clouds',
      'Transport and infrastructure agnostic',
      'For existing and new infrastructure',
    ],
  },
  {
    icon: GitHubIcon,
    title: 'Open and Adaptable',
    texts: ['Open Source', 'Add-ons for Confluent, Snowflake, Okta, KMS, UDP, and more'],
  },
  {
    icon: DeveloperIcon,
    title: 'Developer-first Experience',
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

const NoBr = styled.span`
  white-space: nowrap;
`;
const noWidows = (str: string): JSX.Element => {
  const lastIndex = str.lastIndexOf(' ');
  const sndLastIndex = str.lastIndexOf(' ', lastIndex - 1);
  const endWords = <NoBr>{str.substring(sndLastIndex + 1)}</NoBr>;
  const el = (
    <>
      {str.substring(0, sndLastIndex)} {endWords}
    </>
  );
  return el;
};

const Features: FunctionComponent = () => (
  <Box
    pt={{ base: 16, lg: 24 }}
    pb={{ base: 20, lg: 24 }}
    boxShadow="2xl"
    borderRadius="15"
    borderStyle="none"
    background="white"
    maxW="80%"
    mx="auto"
  >
    <Container variant="section">
      <Box id="features" visibility="hidden" position="absolute" left={0} top="-80px" />

      <Flex
        direction={{ base: 'column', md: 'row' }}
        w="full"
        justify="space-between"
        mb={{ base: 10, md: 16 }}
      >
        <Box alignSelf="flex-start" w="full" maxW="2.5xl">
          <Heading as="h2" size="h2" lineHeight={1.3} mb={{ base: 6, lg: 8 }} letterSpacing="-2px">
            {noWidows(TITLE)}
          </Heading>

          {DESCRIPTIONS.map((text) => (
            <Text key={text} fontSize={{ lg: 'lg' }} lineHeight={1.4} _notLast={{ mb: 2 }}>
              {text}
            </Text>
          ))}
        </Box>

        <Link
          as={Link}
          isExternal
          href={DOCS.href}
          _hover={{ textDecoration: 'none' }}
          mt={{ base: 8, md: 0 }}
        >
          <Button as="span" colorScheme="avocado" color="black" size="lg">
            Learn More
          </Button>
        </Link>
      </Flex>

      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 2 }}
        spacingX={{ base: 8, md: 20, lg: 24 }}
        spacingY={{ base: 8, md: 12, lg: 16 }}
      >
        {FEATURES.map((card) => (
          <Feature key={card.title} {...card} />
        ))}
      </SimpleGrid>
    </Container>
  </Box>
);
export { Feature };
export default Features;
