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
} from 'react-icons/hi';

import GitHubIcon from '@assets/icons/github.svg';
import DeveloperIcon from '@assets/icons/developer.svg';
import LockIcon from '@assets/icons/lock.svg';
import LeftIcon from '@assets/icons/left.svg';
import GreenIconWrapper from '@components/GreenIconWrapper';
import { DOCS } from '@consts/externalResources';

const TITLE = 'Connect Applications, not Networks';
const DESCRIPTIONS = [
  "Finally, you can forget about networks, clouds, gateways, protocols, routers, relays, ELBs, VPNs, VPCs, CAs, tokens, and <a bunch of other things you didn't get into this gig to deal with in the first place>",
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
};
const FEATURES = [
  {
    icon: LeftIcon,
    title: 'Trust at the Application Layer',
    texts: [
      'Cryptographic identities and authentication - everywhere',
      'Managed credential authorities and ABAC',
      'Enrollment protocols that bootstrap',
      'BYO identity providers and access control policies',
    ],
  },
  {
    icon: LockIcon,
    title: 'End-to-End Encryption for Data-in-Motion',
    texts: [
      'Through networks, clouds, and protocols',
      'Over enterprise messaging and event streams',
      'For existing and new infrastructure',
      'Built for high-thoughput, low-latency, and high-availability',
    ],
  },
  {
    icon: GitHubIcon,
    title: 'Open and Adaptable',
    texts: ['Open Source', 'Add-ons for Confluent, InfluxData, Okta, KMS, UDP and more'],
  },
  {
    icon: DeveloperIcon,
    title: 'Developer Experience',
    texts: ['Tools and Packages', 'SLAs and Support'],
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
        <Text fontWeight="bold" fontSize="xl" color="brand.900" mb={2}>
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
  <Box bgColor="gray.50" pt={{ base: 16, lg: 24 }} pb={{ base: 20, lg: 24 }}>
    <Container variant="section">
      <Box id="features" visibility="hidden" position="absolute" left={0} top="-80px" />

      <Flex
        direction={{ base: 'column', md: 'row' }}
        w="full"
        justify="space-between"
        mb={{ base: 10, md: 16 }}
      >
        <Box alignSelf="flex-start" w="full" maxW="2.5xl">
          <Heading as="h2" size="h2" lineHeight={1.3} mb={{ base: 6, lg: 8 }}>
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
