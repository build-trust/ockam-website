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
  ListItem,
  List,
  useTheme,
  Link,
} from '@chakra-ui/react';
import { HiBadgeCheck as Check } from 'react-icons/hi';

import ActionButton from '@components/Packaging/ActionButton';
import PricingCard from '@components/Packaging/PricingCard';
import { CONTACT_FORM_PATH } from '@root/consts/paths';

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
  floor?: string;
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
  onCard?: boolean;
};

const TIERS: Tier[] = [
  {
    name: 'Starter',
    text: 'The Tools for Builders',
    price: '$0',
    price_interval: 'mo',
    isPopular: true,
    cta: {
      text: 'Get started →',
      url: '/download',
    },
  },

  {
    name: 'Team',
    text: 'The Tools for Builders',
    price: '$9',
    price_interval: 'mo',
    cta: {
      text: 'Start 14-day trial →',
      url: '/download',
    },
  },

  {
    name: 'Basic',
    text: 'The Tools for Builders',
    price: '$200',
    price_interval: 'mo',
    cta: {
      text: 'Start 14-day trial →',
      url: '/download',
    },
  },

  {
    name: 'Enterprise',
    text: 'The Tools for Builders',
    price: 'Talk to sales',
    cta: {
      text: 'Talk to sales →',
      url: `${CONTACT_FORM_PATH}`,
    },
  },

  {
    name: 'Platform',
    text: 'The Tools for Builders',
    price: 'Talk to sales',
    cta: {
      text: 'Talk to sales →',
      url: `${CONTACT_FORM_PATH}`,
    },
  },
];

const FEATURES: Feature[] = [
  {
    name: 'Introductory price guarantee',
    tiers: ['Team', 'Basic', 'Pro', 'Enterprise', 'Platform'],
    onCard: true,
  },

  { name: 'Spaces', tiers: ['*'], hasLimits: true, onCard: true },
  // { name: 'Space administrators', tiers: ['*'], hasLimits: true, onCard: true  },

  { name: 'Projects per space', tiers: ['*'], hasLimits: true, onCard: false },
  // { name: 'Project administrators', tiers: ['*'], hasLimits: true, onCard: true  },

  { name: 'Project members', tiers: ['*'], hasLimits: true, onCard: true },

  { name: 'Project authority nodes', tiers: ['*'], hasLimits: true, onCard: false },
  { name: 'Credential authorities', tiers: ['*'], hasLimits: true, onCard: false },

  // { name: 'Throughput - Platform API requests', tiers: ['*'], hasLimits: true, onCard: false },

  // { name: 'TCP transport endpoints', tiers: ['*'], hasLimits: true, onCard: false },

  // { name: 'Transparency logs', tiers: ['Pro', 'Enterprise', 'Platform'], onCard: true },
  // { name: 'Audit logs', tiers: ['*'], hasLimits: true, onCard: true },

  // { name: 'Authority node identity', tiers: ['*'], hasLimits: true, onCard: false },
  // { name: 'Authority node identity keys', tiers: ['*'], hasLimits: true, onCard: false },

  // { name: 'Project enrollers', tiers: ['*'], hasLimits: true, onCard: false },
  // { name: 'Project members', tiers: ['*'], hasLimits: true, onCard: true },

  { name: 'Enrollment methods', tiers: ['*'], hasLimits: true, onCard: true },

  { name: 'Project nodes', tiers: ['*'], hasLimits: true, onCard: true },

  // { name: 'Encrypted relays', tiers: ['*'], hasLimits: true, onCard: true },

  { name: 'Identities', tiers: ['*'], hasLimits: true, onCard: true },
  { name: 'Included data transfer', tiers: ['*'], hasLimits: true, onCard: false },
  { name: 'Cloud managed', tiers: ['*'], onCard: true },
  { name: 'Attribute-based access controls', tiers: ['*'], onCard: true },
  { name: 'Ockam Command', tiers: ['*'], onCard: true },
  { name: 'Programming libraries', tiers: ['*'], onCard: true },
  { name: 'Community-based support', tiers: ['*'], onCard: true },
  { name: 'Ockam support', tiers: ['Basic', 'Pro', 'Enterprise', 'Platform'], onCard: true },
  { name: 'Premium Ockam support', tiers: ['Pro', 'Enterprise', 'Platform'], onCard: true },
  { name: 'Volume discounts', tiers: ['Enterprise', 'Platform'], onCard: true },
  { name: 'Service Level Agreements (SLAs)', tiers: ['Enterprise', 'Platform'] },
  { name: 'Customized terms', tiers: ['Enterprise', 'Platform'] },
  { name: 'Private labelling', tiers: ['Platform'], onCard: true },
  { name: 'Custom domains', tiers: ['Platform'] },
];

const LIMITS: { [id: string]: { [id: string]: string } } = {
  Spaces: {
    Starter: 'Up to 1',
    Team: 'Up to 1',
    Basic: 'Unlimited',
    Pro: 'Unlimited',
    Enterprise: 'Unlimited',
    Platform: 'Unlimited',
  },

  'Projects per space': {
    Starter: 'Up to 1',
    Team: 'Up to 1',
    Basic: 'Unlimited',
    Pro: 'Unlimited',
    Enterprise: 'Unlimited',
    Platform: 'Unlimited',
  },

  'Project authority nodes': {
    Starter: 'Up to 1',
    Team: 'Up to 1',
    Basic: 'Unlimited',
    Pro: 'Unlimited',
    Enterprise: 'Unlimited',
    Platform: 'Unlimited',
  },
  'Credential authorities': {
    Starter: 'Up to 1',
    Team: 'Up to 1',
    Basic: 'Unlimited',
    Pro: 'Unlimited',
    Enterprise: 'Unlimited',
    Platform: 'Unlimited',
  },

  // 'Throughput - Platform API requests': {
  //   Starter: 'Up to X',
  //   Team: 'Up to Y',
  //   Basic: 'Unlimited',
  //   Pro: 'Unlimited',
  //   Enterprise: 'Unlimited',
  //   Platform: 'Unlimited',
  // },

  // 'TCP transport endpoints': {
  //   Starter: 'Up to X',
  //   Team: 'Up to Y',
  //   Basic: 'Unlimited',
  //   Pro: 'Unlimited',
  //   Enterprise: 'Unlimited',
  //   Platform: 'Unlimited',
  // },
  // 'Audit logs': {
  //   Starter: 'Up to X',
  //   Team: 'Up to Y',
  //   Basic: 'Unlimited',
  //   Pro: 'Unlimited',
  //   Enterprise: 'Unlimited',
  //   Platform: 'Unlimited',
  // },

  // 'Authority node identity': {
  //   Starter: 'Up to X',
  //   Team: 'Up to Y',
  //   Basic: 'Unlimited',
  //   Pro: 'Unlimited',
  //   Enterprise: 'Unlimited',
  //   Platform: 'Unlimited',
  // },
  // 'Authority node identity keys': {
  //   Starter: 'Up to X',
  //   Team: 'Up to Y',
  //   Basic: 'Unlimited',
  //   Pro: 'Unlimited',
  //   Enterprise: 'Unlimited',
  //   Platform: 'Unlimited',
  // },

  // 'Project enrollers': {
  //   Starter: 'Up to X',
  //   Team: 'Up to Y',
  //   Basic: 'Unlimited',
  //   Pro: 'Unlimited',
  //   Enterprise: 'Unlimited',
  //   Platform: 'Unlimited',
  // },
  'Project members': {
    Starter: 'Up to 2',
    Team: 'Up to 10',
    Basic: 'Unlimited',
    Pro: 'Unlimited',
    Enterprise: 'Unlimited',
    Platform: 'Unlimited',
  },

  'Enrollment methods': {
    Starter: '1',
    Team: 'Up to 2',
    Basic: 'Unlimited',
    Pro: 'Unlimited',
    Enterprise: 'Unlimited',
    Platform: 'Unlimited',
  },

  'Project nodes': {
    Starter: 'Up to 5',
    Team: 'Up to 10',
    Basic: '40 included',
    Enterprise: 'Unlimited',
    Platform: 'Unlimited',
  },

  // 'Encrypted relays': {
  //   Starter: 'Up to X',
  //   Team: 'Up to Y',
  //   Basic: 'Unlimited',
  //   Pro: 'Unlimited',
  //   Enterprise: 'Unlimited',
  //   Platform: 'Unlimited',
  // },
  // 'Team members': {
  //   Starter: 'Up to X',
  //   Team: 'Up to Y',
  //   Basic: 'Unlimited',
  //   Pro: 'Unlimited',
  //   Enterprise: 'Unlimited',
  //   Platform: 'Unlimited',
  // },
  Identities: {
    Starter: 'Up to 5',
    Team: 'Up to 20',
    Basic: 'Unlimited',
    Pro: 'Unlimited',
    Enterprise: 'Unlimited',
    Platform: 'Unlimited',
  },
  'Included data transfer': {
    Starter: '10/GB/mo',
    Team: '80/GB/mo',
    Basic: '2,000/GB/mo',
    Pro: '50,000/GB/mo',
    Enterprise: 'Custom',
    Platform: 'Custom',
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

const CARDS = TIERS.filter((tier) => !['Platform'].includes(tier.name)).map((tier, idx) => {
  const features = FEATURES.filter((f) => f.onCard)
    .filter((feature) => {
      if (idx > 0) {
        // if (feature.name === 'Introductory price guarantee') return true;
        if (feature.hasLimits) {
          if (tierLimit(tier, feature) === tierLimit(TIERS[idx - 1], feature)) {
            return false;
          }
          return true;
        }
        if (feature.tiers.indexOf('*') >= 0) return false;
        if (hasFeature(TIERS[idx - 1], feature)) return false;
      }
      if (feature.tiers.indexOf('*') >= 0) return true;
      if (feature.tiers.indexOf(tier.name) >= 0) return true;
      return false;
    })
    .map((feature) => {
      const f = { ...feature };
      if (f.hasLimits) {
        f.limits = tierLimit(tier, feature);
      }
      return f;
    });
  return { ...tier, features };
});

const Packages: FunctionComponent = () => {
  const theme = useTheme();

  return (
    <Container id="pricing" variant="section" py={{ base: 16, lg: 24 }}>
      <Heading as="h1" size="h2">
        Elevate your security
      </Heading>
      <Heading as="h2" size="h4" color="gray.400">
        Keep trust at the application layer instead of deferring to the network
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
              key={card.name}
              data={{
                price: card.price,
                name: card.name,
                priceUnit: card.price_unit,
                priceInterval: card.price_interval,
                features: card.features,
                floor: card.floor,
              }}
              isPopular={card.isPopular}
              display="flex"
              flexDirection="column"
              previousTier={TIERS[TIERS.findIndex((tier: Tier) => tier.name === card.name) - 1]}
              button={
                <ActionButton variant="outline" borderWidth="2px" mt={2} mb={8} href={card.cta.url}>
                  {card.cta.text}
                </ActionButton>
              }
            />
          ))}
        </SimpleGrid>
      </Box>
      <Box width="100%" p={4} mx={0} my={0}>
        <Heading>What&apos;s an &quot;introductory price guarantee&quot;?</Heading>
        We know pricing is hard to get right (this isn&apos;t our first rodeo). We&apos;re also much
        more interested in spending our time building the most amazing product experience possible
        rather than trying to have the perfect pricing. So the prices you see here are just enough
        to let us get back to work. We know they&apos;ll change in the future. Will they go up? Or
        will they go down? 🤷‍♂️ We don&apos;t know for sure.
        <br />
        <br />
        What we do know is that if you sign up today no new customer will get a better deal than
        you. If our prices go up, we agree honour the price you signed up at for 12 months. If
        prices go down we&apos;ll automatically put you onto the better price. We&apos;re here to
        build trust and a decades long relationship with you.
      </Box>

      <Box
        width="100%"
        bgGradient={`linear-gradient(296.58deg, ${theme.colors.brand['600']} -6.45%, ${theme.colors.brand['900']} 96.92%)`}
        borderRadius="base"
        p={4}
        mx={0}
        my={4}
      >
        <Heading color="white">Ockam Platform</Heading>
        <Flex w="full" mt={2} flexDirection={{ base: 'column-reverse', lg: 'row' }}>
          <Box flexGrow={0.5} width={{ base: '100%', lg: '50%' }} position="relative">
            <ActionButton
              href={TIERS.find((tier) => tier.name === 'Platform')?.cta.url || ''}
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
            If you&apos;re running a SaaS plaform, deploying solutions on-prem in your
            customers&apos; infrastructure, or even a hybrid approach that requires you to securely
            connect to your customers&apos; private systems then we&apos;ve got the solutions to
            integrate directly into your own product.
            <List spacing="1" mb="2" mt="2" mx="0" fontSize="s">
              <ListItem fontWeight="medium">
                <Check
                  size="1.5em"
                  style={{ display: 'inline-block', marginRight: '4px', verticalAlign: 'middle' }}
                  color={theme.colors.brand['600']}
                />
                Service Level Agreements
              </ListItem>
              <ListItem fontWeight="medium">
                <Check
                  size="1.5em"
                  style={{ display: 'inline-block', marginRight: '4px', verticalAlign: 'middle' }}
                  color={theme.colors.brand['600']}
                />
                Customized terms
              </ListItem>
              <ListItem fontWeight="medium">
                <Check
                  size="1.5em"
                  style={{ display: 'inline-block', marginRight: '4px', verticalAlign: 'middle' }}
                  color={theme.colors.brand['600']}
                />
                Volume discounts
              </ListItem>
              <ListItem fontWeight="medium">
                <Check
                  size="1.5em"
                  style={{ display: 'inline-block', marginRight: '4px', verticalAlign: 'middle' }}
                  color={theme.colors.brand['600']}
                />
                Private labelling & reseller features
              </ListItem>
            </List>
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
                  <Th>
                    <Link href={tier.cta.url}>{tier.cta.text}</Link>
                  </Th>
                ))}
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
};

export default Packages;
