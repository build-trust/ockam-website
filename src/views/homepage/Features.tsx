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

import GitHubIcon from '@assets/icons/github.svg';
import DeveloperIcon from '@assets/icons/developer.svg';
import LockIcon from '@assets/icons/lock.svg';
import LeftIcon from '@assets/icons/left.svg';
import GreenIconWrapper from '@components/GreenIconWrapper';
import { DOCS } from '@consts/externalResources';

const TITLE = 'Built for Developers, by Developers';
const DESCRIPTIONS = [
  'Ockam is a suite of tools, programming libraries, and managed cloud services that orchestrate end-to-end encryption, cryptographic identities, mutual authentication, and authorization policies between distributed applications...at massive scale.'
];

const FEATURES = [
  {
    icon: LockIcon,
    title: 'End-to-end Encryption',
    texts: [
      'Across networks, clouds, and boundaries',
      'For enterprise messaging and event streams',
      'For any TCP protocol',
      'Elastic relays',
    ],
  },
  {
    icon: LeftIcon,
    title: 'Application Layer Trust',
    texts: [
      'Crypographic identities and authentication - everywhere',
      'Managed credential authorities and ABAC',
      'Enrollment protocols that bootstrap',
      'BYO identity providers and access control policies',

    ],
  },
  {
    icon: GitHubIcon,
    title: 'Open and Adaptable',
    texts: [
      'Open Source',
      'Add-ons for Confluent, InfluxData, Okta, KMS, UDP and more',
    ],
  },
  {
    icon: DeveloperIcon,
    title: 'Developer Experience',
    texts: [
      'Tools and Packages',
      'SLAs',
      'Support',
    ],
  },
];

type FeatureProps = {
  icon: FunctionComponent<SVGAttributes<SVGElement>>;
  title: string;
  texts: string[];
};

const Feature: FunctionComponent<FeatureProps> = ({ icon, title, texts }) => (
  <Flex>
    <Box flex={0} mr={5}>
      <GreenIconWrapper>
        <Icon as={icon} color="white" w={6} h={6} />
      </GreenIconWrapper>
    </Box>

    <Box>
      <Text fontWeight="bold" fontSize="xl" color="brand.900" mb={2}>
        {title}
      </Text>

      {texts.map((text) => (
        <Text key={text} fontSize="sm" mb={{ base: 4, lg: 2 }} _last={{ mb: { lg: 0 } }}>
          {text}
        </Text>
      ))}
    </Box>
  </Flex>
);

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
            {TITLE}
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

export default Features;
