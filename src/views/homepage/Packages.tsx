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
  Link,
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionButton,
  AccordionIcon,
} from '@chakra-ui/react';

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
  onlyFloor?: boolean;
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

type Segment = {
  name: string;
  tiers: string[];
};
const SEGMENTS: Segment[] = [
  { name: 'Developers', tiers: ['Free', 'Premium'] },
  { name: 'Companies', tiers: ['Small', 'Medium', 'Large'] },
  { name: 'Enterprise', tiers: ['Business Critical'] },
];
const TIERS: Tier[] = [
  {
    name: 'Free',
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
    name: 'Premium',
    text: 'The Tools for Builders',
    price: '$5',
    price_interval: 'mo',
    cta: {
      text: 'Start 14-day trial →',
      url: '/download',
    },
  },

  {
    name: 'Small',
    text: 'The Tools for Builders',
    price: '$500',
    price_interval: 'mo',
    onlyFloor: true,
    cta: {
      text: 'Start 14-day trial →',
      url: '/download',
    },
  },
  {
    name: 'Medium',
    text: 'The Tools for Builders',
    price: '$2500',
    price_interval: 'mo',
    onlyFloor: true,
    cta: {
      text: 'Start 14-day trial →',
      url: '/download',
    },
  },
  {
    name: 'Large',
    text: 'The Tools for Builders',
    price: '$10000',
    price_interval: 'mo',
    onlyFloor: true,
    cta: {
      text: 'Talk to sales →',
      url: `${CONTACT_FORM_PATH}`,
    },
  },

  {
    name: 'Business Critical',
    text: 'The Tools for Builders',
    price: '50000',
    price_interval: 'mo',
    onlyFloor: true,
    cta: {
      text: 'Talk to sales →',
      url: `${CONTACT_FORM_PATH}`,
    },
  },

  // {
  //   name: 'Platform',
  //   text: 'The Tools for Builders',
  //   price: 'Talk to sales',
  //   cta: {
  //     text: 'Talk to sales →',
  //     url: `${CONTACT_FORM_PATH}`,
  //   },
  // },
];

const FEATURES: Feature[] = [
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
  { name: 'Ockam support', tiers: ['Small', 'Medium', 'Large', 'Business Critical'], onCard: true },
  { name: 'Premium Ockam support', tiers: ['Large', 'Business Critical'], onCard: true },
  { name: 'Volume discounts', tiers: ['Large', 'Business Critical', 'Platform'], onCard: true },
  {
    name: 'Service Level Agreements (SLAs)',
    tiers: ['Medium', 'Large', 'Business Critical', 'Platform'],
  },
  { name: 'Customized terms', tiers: ['Large', 'Business Critical', 'Platform'] },
];

const LIMITS: { [id: string]: { [id: string]: string } } = {
  Spaces: {
    Free: 'Up to 1',
    Premium: 'Up to 1',
    Small: 'Unlimited',
    Medium: 'Unlimited',
    Large: 'Unlimited',
    'Business Critical': 'Unlimited',
    Platform: 'Unlimited',
  },

  'Projects per space': {
    Free: 'Up to 1',
    Premium: 'Up to 1',
    Small: 'Unlimited',
    Medium: 'Unlimited',
    Large: 'Unlimited',
    'Business Critical': 'Unlimited',
    Platform: 'Unlimited',
  },

  'Project authority nodes': {
    Free: 'Up to 1',
    Premium: 'Up to 1',
    Small: 'Unlimited',
    Medium: 'Unlimited',
    Large: 'Unlimited',
    'Business Critical': 'Unlimited',
    Platform: 'Unlimited',
  },
  'Credential authorities': {
    Free: 'Up to 1',
    Premium: 'Up to 1',
    Small: 'Unlimited',
    Medium: 'Unlimited',
    Large: 'Unlimited',
    'Business Critical': 'Unlimited',
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
    Free: 'Up to 2',
    Premium: 'Up to 10',
    Small: 'Unlimited',
    Medium: 'Unlimited',
    Large: 'Unlimited',
    'Business Critical': 'Unlimited',
    Platform: 'Unlimited',
  },

  'Enrollment methods': {
    Free: '1',
    Premium: '1',
    Small: 'Up to 2',
    Medium: 'Unlimited',
    Large: 'Unlimited',
    'Business Critical': 'Unlimited',
  },

  'Project nodes': {
    Free: 'Up to 5',
    Premium: 'Up to 10',
    Small: '40 included',
    Medium: 'Unlimited',
    Large: 'Unlimited',
    'Business Critical': 'Unlimited',
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
    Free: 'Up to 5',
    Premium: 'Up to 5',
    Small: 'Up to 20',
    Medium: 'Unlimited',
    Large: 'Unlimited',
    'Business Critical': 'Unlimited',
    Platform: 'Unlimited',
  },
  'Included data transfer': {
    Free: '10/GB/mo',
    Premium: '20/GB/mo',
    Small: '80/GB/mo',
    Medium: '2,000/GB/mo',
    Large: '50,000/GB/mo',
    'Business Critical': 'Custom',
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

const Packages: FunctionComponent = () => (
  <Container id="pricing" variant="section" py={{ base: 16, lg: 24 }}>
    <Heading as="h1" size="h2">
      Elevate your security
    </Heading>
    <Heading as="h2" size="h4" color="gray.400">
      Keep trust at the application layer instead of deferring to the network
    </Heading>
    <Box as="section" py="14" px={{ base: '4', md: '8' }} style={{ width: '100%' }}>
      <Accordion style={{ width: '100%' }}>
        {SEGMENTS.map((segment) => (
          <AccordionItem style={{ width: '100%' }}>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  For {segment.name}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel>
              <SimpleGrid
                minChildWidth={2}
                spacing={{ base: '8', lg: '0' }}
                maxW="7xl"
                mx="auto"
                justifyItems="center"
                alignItems="stretch"
              >
                {CARDS.filter((card) => segment.tiers.includes(card.name)).map((card) => (
                  <PricingCard
                    key={card.name}
                    data={{
                      price: card.price,
                      name: card.name,
                      priceUnit: card.price_unit,
                      priceInterval: card.price_interval,
                      features: card.features,
                      floor: card.floor,
                      onlyFloor: card.onlyFloor,
                    }}
                    isPopular={card.isPopular}
                    display="flex"
                    flexDirection="column"
                    previousTier={
                      TIERS[TIERS.findIndex((tier: Tier) => tier.name === card.name) - 1]
                    }
                    button={
                      <ActionButton
                        variant="outline"
                        borderWidth="2px"
                        mt={2}
                        mb={8}
                        href={card.cta.url}
                      >
                        {card.cta.text}
                      </ActionButton>
                    }
                  />
                ))}
              </SimpleGrid>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
    {/* <Box
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
      </Box> */}

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

export default Packages;
