import { FunctionComponent } from 'react';
import {
  Container,
  Box,
  SimpleGrid,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
  Heading,
  Flex,
} from '@chakra-ui/react';
// import { CheckCircleIcon, SmallCloseIcon } from '@chakra-ui/icons';

import ActionButton from '@components/Packaging/ActionButton';
import PricingCard from '@components/Packaging/PricingCard';

type Cta = {
  text: string;
  url: string;
};
type Tier = {
  name: string;
  text: string;
  price: string;
  price_interval?: string;
  price_unit?: string;
  isPopular?: boolean;
  cta: Cta;
};
type Feature = {
  name: string;
  description?: string;
  more_info_link?: string;
  tiers: string[];
  hasLimits?: boolean;
  limits?: string;
};

const TIERS: Tier[] = [
  {
    name: 'Starter',
    text: 'The Tools for Builders',
    price: '$X',
    price_interval: 'mo',
    isPopular: true,
    cta: {
      text: 'Get started →',
      url: '',
    },
  },

  {
    name: 'Team',
    text: 'The Tools for Builders',
    price: '$X',
    price_interval: 'mo',
    cta: {
      text: 'Start 14-day trial →',
      url: '',
    },
  },

  {
    name: 'Basic',
    text: 'The Tools for Builders',
    price: '$X',
    price_unit: 'node',
    price_interval: 'mo',
    cta: {
      text: 'Start 14-day trial →',
      url: '',
    },
  },

  {
    name: 'Pro',
    text: 'The Tools for Builders',
    price: '$X',
    price_unit: 'node',
    price_interval: 'mo',
    cta: {
      text: 'Talk to sales →',
      url: '',
    },
  },

  {
    name: 'Scale',
    text: 'The Tools for Builders',
    price: '$X',
    price_interval: 'yr',
    cta: {
      text: 'Talk to sales →',
      url: '',
    },
  },

  {
    name: 'Platform',
    text: 'The Tools for Builders',
    price: 'Talk to sales',
    cta: {
      text: 'Talk to sales →',
      url: '',
    },
  },
];

const FEATURES: Feature[] = [
  { name: 'Best price guarantee', tiers: ['*'] },
  { name: 'Team members', tiers: ['*'], hasLimits: true },
  { name: 'Identities', tiers: ['*'], hasLimits: true },
  { name: 'Included data transfer', tiers: ['*'], hasLimits: true },
  { name: 'Cloud managed', tiers: ['*'] },
  { name: 'Attribute-based access controls', tiers: ['*'] },
  { name: 'Ockam Command', tiers: ['*'] },
  { name: 'Programming libraries', tiers: ['*'] },
  { name: 'Community-based support', tiers: ['*'] },
  { name: 'Ockam support', tiers: ['Basic', 'Pro', 'Scale', 'Platform'] },
  { name: 'Premium Ockam support', tiers: ['Pro', 'Scale', 'Platform'] },
  { name: 'Volume discounts', tiers: ['Scale', 'Platform'] },
  { name: 'Private labelling', tiers: ['Platform'] },
];

const LIMITS: { [id: string]: { [id: string]: string } } = {
  'Team members': {
    Starter: 'Up to X',
    Team: 'Up to Y',
    Basic: 'Unlimited',
    Pro: 'Unlimited',
    Scale: 'Unlimited',
    Platform: 'Unlimited',
  },
  Identities: {
    Starter: 'Up to X',
    Team: 'Up to X',
    Basic: 'Unlimited',
    Pro: 'Unlimited',
    Scale: 'Unlimited',
    Platform: 'Unlimited',
  },
  'Included data transfer': {
    Starter: 'X/GB/mo',
    Team: 'X/GB/mo',
    Basic: 'X/GB/mo',
    Pro: 'X/GB/mo',
    Scale: 'X/GB/mo',
    Platform: 'X/GB/mo',
  },
};

const hasFeature = (tier: Tier, feature: Feature): boolean => {
  if (feature.tiers.indexOf('*') >= 0) return true;
  if (feature.tiers.indexOf(tier.name) >= 0) return true;
  return false;
};

const tierLimit = (tier: Tier, feature: Feature): string | undefined => {
  if (feature.name in LIMITS) {
    return LIMITS[feature.name][tier.name];
  }
  return undefined;
};
const featureValue = (tier: Tier, feature: Feature): string => {
  if (hasFeature(tier, feature)) {
    if (feature.hasLimits) {
      return tierLimit(tier, feature) || '';
    }
    return '✔️';
  }
  return `\u2013`;
};

const CARDS = TIERS.filter((tier) => !['Platform', 'Scale'].includes(tier.name)).map(
  (tier, idx) => {
    const features = FEATURES.filter((feature) => {
      if (idx > 0) {
        if (feature.name === 'Best price guarantee') return true;
        if (feature.hasLimits) return true;
        if (feature.tiers.indexOf('*') >= 0) return false;
        if (hasFeature(TIERS[idx - 1], feature)) return false;
      }
      if (feature.tiers.indexOf('*') >= 0) return true;
      if (feature.tiers.indexOf(tier.name) >= 0) return true;
      return false;
    }).map((feature) => {
      const f = { ...feature };
      if (f.hasLimits) {
        f.limits = tierLimit(tier, feature);
      }
      return f;
    });
    return { ...tier, features };
  }
);

const Packages: FunctionComponent = () => (
  <Container id="pricing" variant="section" py={{ base: 16, lg: 24 }}>
    <Heading as="h1" size="h2">
      Very compelling headline about why you want to use Ockam!
    </Heading>
    <Heading as="h2" size="h4" color="gray.400">
      And a follow-up sentence
    </Heading>
    <Box as="section" py="14" px={{ base: '4', md: '8' }}>
      <SimpleGrid
        columns={{ base: 1, lg: 4 }}
        spacing={{ base: '8', lg: '0' }}
        maxW="7xl"
        mx="auto"
        justifyItems="center"
        alignItems="stretch"
      >
        {CARDS.map((card) => (
          <PricingCard
            data={{
              price: card.price,
              name: card.name,
              priceUnit: card.price_unit,
              priceInterval: card.price_interval,
              features: card.features,
            }}
            isPopular={card.isPopular}
            display="flex"
            flexDirection="column"
            button={
              <ActionButton variant="outline" borderWidth="2px" mt={2} mb={8}>
                {card.cta.text}
              </ActionButton>
            }
          />
        ))}
      </SimpleGrid>
    </Box>

    <Box
      width="100%"
      bgGradient="linear-gradient(296.58deg, #36A7C9 -6.45%, #3AC6A3 96.92%)"
      borderRadius="base"
      p={4}
      mx={0}
      my={4}
    >
      <Heading color="white">Ockam Scale</Heading>
      <Flex w="full" mt={2} flexDirection={{ base: 'column-reverse', lg: 'row' }}>
        <Box flexGrow={0.5} width={{ base: '100%', lg: '50%' }} position="relative">
          <ActionButton
            variant="solid"
            colorScheme="whiteAlpha"
            borderWidth="2px"
            mt={2}
            w={{ base: 'full', lg: 'auto' }}
            position="absolute"
            bottom="0"
          >
            {TIERS.find((tier) => tier.name === 'Scale')?.cta.text}
          </ActionButton>
        </Box>
        <Box flexGrow={0.5} width={{ base: '100%', lg: '50%' }} color="white">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero itaque quisquam fugiat
          laudantium delectus illo veritatis eum repudiandae quaerat numquam. Laboriosam atque
          magnam libero perferendis nulla ut rem incidunt nam.
        </Box>
      </Flex>
    </Box>

    <Box
      width="100%"
      bgGradient="linear-gradient(296.58deg, #36A7C9 -6.45%, #0A1A2B 96.92%)"
      borderRadius="base"
      p={4}
      mx={0}
      my={4}
    >
      <Heading color="white">Ockam Platform</Heading>
      <Flex w="full" mt={2} flexDirection={{ base: 'column-reverse', lg: 'row' }}>
        <Box flexGrow={0.5} width={{ base: '100%', lg: '50%' }} position="relative">
          <ActionButton
            variant="solid"
            colorScheme="whiteAlpha"
            borderWidth="2px"
            mt={2}
            w={{ base: 'full', lg: 'auto' }}
            position="absolute"
            bottom="0"
          >
            {TIERS.find((tier) => tier.name === 'Platform')?.cta.text}
          </ActionButton>
        </Box>
        <Box flexGrow={0.5} width={{ base: '100%', lg: '50%' }} color="white">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero itaque quisquam fugiat
          laudantium delectus illo veritatis eum repudiandae quaerat numquam. Laboriosam atque
          magnam libero perferendis nulla ut rem incidunt nam.
        </Box>
      </Flex>
    </Box>

    <Box>
      <TableContainer fontSize="xs">
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th />
              {TIERS.map((tier) => (
                <Th textAlign="center">{tier.name}</Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {FEATURES.map((feature) => (
              <Tr>
                <Td fontSize="xs">{feature.name}</Td>
                {TIERS.map((tier) => {
                  if (hasFeature(tier, feature))
                    return (
                      <Td textAlign="center" fontSize="xx-small">
                        {featureValue(tier, feature)}️
                      </Td>
                    );
                  return <Td textAlign="center" fontSize="xs">{`\u2013`}</Td>;
                })}
              </Tr>
            ))}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th />
              {TIERS.map((tier) => (
                <Th>{tier.cta.text}</Th>
              ))}
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </Box>
  </Container>
);

export default Packages;
