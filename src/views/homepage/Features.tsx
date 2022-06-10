import { FunctionComponent } from 'react';
import { Box, Container, Flex, Text, Heading, SimpleGrid } from '@chakra-ui/react';
import { IconProps } from '@chakra-ui/icons';

import {
  GitHubIcon,
  CloudIcon,
  DeveloperIcon,
  LockIcon,
  KeyIcon,
  EngineIcon,
} from '@components/icons';
import { GreenIconWrapper } from '@components/icons/wrappers';

const FEATURES = [
  {
    icon: DeveloperIcon,
    title: 'Developer First',
    text: 'Stripe did is for payment rails. Twilio did it for telecom. Ockam abstracts away complex infrastructure and cryptogrpahic protocols to empower millions of developers.',
  },
  {
    icon: CloudIcon,
    title: 'Cloud Native',
    text: 'Ockam is built for enterprise scale. Add-ons are ready-made connectors for your favorite authentication, database and message broker services.',
  },
  {
    icon: GitHubIcon,
    title: 'Open Source',
    text: `Built with community feedback and scrutany, Ockam’s protocol security becomes stronger through transparency. Add-ons can be built by anyone.`,
  },
  {
    icon: LockIcon,
    title: 'Zero Trust',
    text: `Ockam is *actually* end-to-end encrypted, and suitable for use on networks that can not be trusted. Transports are agnostic and pluggable so our protocols work across any network topology.`,
  },
  {
    icon: KeyIcon,
    title: 'Key Management',
    text: `Private keys are created inside of the app and never leave the hardware environment. Revocation and rotation are already built in, so you have one less thing to worry about.`,
  },
  {
    icon: EngineIcon,
    title: 'BYO Auth Engine',
    text: `Ockam Add-ons empower you to use your existing authentication, roll-based authorization tools. Bring your own Okta, Auth0, OAuth, or even Web3 tools. We’ve got an Add-on for that!`,
  },
];

type FeatureProps = {
  icon: FunctionComponent<IconProps>;
  title: string;
  text: string;
};

const Feature: FunctionComponent<FeatureProps> = ({ icon: IconComponent, title, text }) => (
  <Flex>
    <Box flex={0} mr={5}>
      <GreenIconWrapper>
        <IconComponent color="white" w={5} h={5} />
      </GreenIconWrapper>
    </Box>

    <Box>
      <Text fontWeight="bold" fontSize="xl" color="brand.900" mb={2}>
        {title}
      </Text>
      <Text fontSize="sm">{text}</Text>
    </Box>
  </Flex>
);

const Features: FunctionComponent = () => (
  <Box bgColor="gray.50" pt={{ base: 16, lg: 24 }} pb={{ base: 16, lg: 30 }}>
    <Container variant="section" id="features">
      <Box alignSelf="flex-start" w="full" maxW="2.5xl" mb={{ base: 10, md: 16 }}>
        <Heading as="h2" size="h2" lineHeight={1.3} mb={{ base: 6, lg: 8 }}>
          Features of Ockam
        </Heading>

        <Text fontSize={{ lg: 'lg' }} lineHeight={1.4}>
          Managing data in motion is really really hard. We’ve thought of the details and have
          reduced the vulnerability surface of your data to something manageable.
        </Text>
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
