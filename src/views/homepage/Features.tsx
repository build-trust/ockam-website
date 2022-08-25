import { FunctionComponent, SVGAttributes } from 'react';
import { Box, Container, Flex, Text, Heading, SimpleGrid, Icon } from '@chakra-ui/react';

import GitHubIcon from '@assets/icons/github.svg';
import CloudIcon from '@assets/icons/cloud.svg';
import DeveloperIcon from '@assets/icons/developer.svg';
import LockIcon from '@assets/icons/lock.svg';
import KeyIcon from '@assets/icons/key.svg';
import EngineIcon from '@assets/icons/engine.svg';
import GreenIconWrapper from '@components/GreenIconWrapper';

const FEATURES = [
  {
    icon: DeveloperIcon,
    title: 'Developer First',
    texts: [
      'Stripe did it for payment rails.',
      'Twilio did it for telecom.',
      'Ockam abstracts away complex infrastructure and cryptography orchestration to empower millions of developers.',
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
    icon: GitHubIcon,
    title: 'Open Source',
    texts: [
      'Ockam’s protocols become ever more secure through transparency, community feedback, and scrutany.',
      'Add-ons can be built by anyone to create new hardware key vaults or cloud service connectors.',
    ],
  },
  {
    icon: LockIcon,
    title: 'Zero Trust',
    texts: [
      'Ockam messaging is *actually* end-to-end encrypted, so it can trustfully move data across networks that should not be trusted.',
      'Transports are agnostic and pluggable so Ockam’s protocols can work across any network topology.',
    ],
  },
  {
    icon: KeyIcon,
    title: 'Key Management',
    texts: [
      'Private keys are created inside of all of your applications. They never leave the hardware environment.',
      'Orchestration, revocation, and rotation of keys are built in, so you have one less thing to worry about.',
    ],
  },
  {
    icon: EngineIcon,
    title: 'BYO Auth Engine',
    texts: [
      'Ockam Add-ons empower you to use your existing authentication, attribute-based (ABAC) authorization tools.',
      'Bring your own Okta, Auth0, OAuth, AWS, Azure, Google or Web3 IAM tools. Ockam has an Add-on for that!',
    ],
  },
];

const DESCRIPTIONS = [
  'Managing data in motion is really, really hard. We’ve thought of the details and have reduced the vulnerability surface of your data to something manageable.',
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
  <Box bgColor="gray.50" pt={{ base: 16, lg: 24 }} pb={{ base: 16, lg: 30 }}>
    <Container variant="section">
      <Box id="features" visibility="hidden" position="absolute" left={0} top="-80px" />
      <Box alignSelf="flex-start" w="full" maxW="2.5xl" mb={{ base: 10, md: 16 }}>
        <Heading as="h2" size="h2" lineHeight={1.3} mb={{ base: 6, lg: 8 }}>
          Features of Ockam
        </Heading>

        {DESCRIPTIONS.map((text) => (
          <Text key={text} fontSize={{ lg: 'lg' }} lineHeight={1.4} _notLast={{ mb: 2 }}>
            {text}
          </Text>
        ))}
      </Box>
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
