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
import DesignIcon from '@assets/icons/design.svg';
import LeftIcon from '@assets/icons/left.svg';
import GreenIconWrapper from '@components/GreenIconWrapper';
import { DOCS } from '@consts/externalResources';

const TITLE = 'Built for developers, by developers';
const DESCRIPTIONS = [
  'It is hard to build and scale applications that make identity driven trust decisions. We’ve created simple and composable building blocks so you can easily deliver secure and private applications to your customers.'
];

const FEATURES = [
  {
    icon: DesignIcon,
    title: 'Secure By Design',
    texts: [
      'Secure By Design applications minimize their vulnerability surface and embrace the principle of least privillage.',
      'Ockam’s end-to-end secure channels gaurantee application layer data integrity and authenticty for all data-in-motion. This enables a deny-by-default security posture that minimizes an application’s vulnerability surface and brings true control over every access decision.',
    ],
  },
  {
    icon: LockIcon,
    title: 'Zero Trust',
    texts: [
      'Modern applications operate in untrusted networks and increasingly rely on third-party services and infrastructure. This creates exponential growth in their vulnerability surface.',
      'Ockam gives you the tools to eliminate implicit trust in networks, services, and infrastructure. Applications get provable cryptographic identities to authenticate and authorize every access decision.',
    ],
  },
  {
    icon: LeftIcon,
    title: 'Shift Left',
    texts: [
      'Software cannot be secured from the outside. Ockam provides powerful building blocks to shift security left and make it an integral part of application design and development.',
      'Application layer trust gaurantees along with tools to manage keys, credentials and authorization policies give you granular control on the security and privacy properties of your application.'
    ],
  },
  {
    icon: DeveloperIcon,
    title: 'Developer First',
    texts: [
      'Application security is easiest and most cost-effective to solve at the source. Developer-first application layer security is the only viable approach to scalable secure applications.',
      'Ockam makes it easy to securely manage the lifecycle of keys, identities, and credentials. We give you simple tools to authenticate and authorize using attribute-based credentials and policies.',
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
      'Ockam Orchestrator is built for enterprise scale.',
      'Add-ons are ready-made connectors to your hosted authentication, database, and message broker services.',
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
