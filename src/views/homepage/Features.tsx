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
import CloudIcon from '@assets/icons/cloud.svg';
import DeveloperIcon from '@assets/icons/developer.svg';
import LockIcon from '@assets/icons/lock.svg';
import KeyIcon from '@assets/icons/key.svg';
import EngineIcon from '@assets/icons/engine.svg';
import GreenIconWrapper from '@components/GreenIconWrapper';
import { DOCS } from '@consts/externalResources';

const TITLE = 'Built for developers, by developers';
const DESCRIPTIONS = [
  'Managing data in motion is really, really hard. We’ve thought of the details and have reduced the vulnerability surface of your data to something manageable.',
];

const FEATURES = [
  {
    icon: KeyIcon,
    title: 'Secure By Design',
    texts: [
      'Secure By Design applications minimize their vulnerability surface and embrace the principle of least privillage.',
      'Ockam’s end-to-end secure channels enable application layer encryption of all data-in-motion. The data integrity and authenticty guarantee, of these channels, create a deny-by-default security posture that minimizes an application’s vulnerability surface and gives true control over every data or service access decision.',
    ],
  },
  {
    icon: LockIcon,
    title: 'Zero Trust',
    texts: [
      'Modern applications operate in untrusted networks and increasingly rely on third-party managed services and infrastructure. This creates exponential growth in the vulnerability surface of our application data.',
      'Ockam gives you the tools to eliminate implicit trust in network boundaries, third-party services, and infrastructure. Applications get provable cryptographic identities to authenticate and authorize every access decision.',
    ],
  },
  {
    icon: EngineIcon,
    title: 'Shift Left',
    texts: [
      'Software cannot be secured from the outside. We give developers the tools to shift security left and make it an integral part of application design and development.',
      'Application layer trust gaurantees along with tools to manage keys, credentials and authorization policies empower developers with granular control on the security and privacy properties of their application and its data.'
    ],
  },
  {
    icon: GitHubIcon,
    title: 'Open Source',
    texts: [
      'Ockam’s protocols become ever more secure through transparency, community feedback, and scrutany.',
      'Add-ons can be built by anyone to create new hardware key vaults or cloud service connectors.',
    ],
  },
  {
    icon: CloudIcon,
    title: 'Cloud Native',
    texts: [
      'Ockam is built for enterprise scale.',
      'Add-ons are ready-made connectors to your hosted authentication, database, and message broker services.',
    ],
  },
  {
    icon: DeveloperIcon,
    title: 'Developer First',
    texts: [
      'Stripe did it for payment rails.',
      'Twilio did it for telecom.',
      'Ockam abstracts away complex infrastructure and cryptography orchestration to empower millions of developers.',
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
        columns={{ base: 1, md: 2, lg: 3 }}
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
