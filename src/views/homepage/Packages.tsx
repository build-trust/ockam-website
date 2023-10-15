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
import chroma from 'chroma-js';

import ActionButton from '@components/Packaging/ActionButton';
import PricingCard from '@components/Packaging/PricingCard';
import AwsLogo from '@assets/images/logos/aws.svg';
import AzureLogo from '@assets/images/logos/azure.svg';
import GcpLogo from '@assets/images/logos/gcp.svg';
import { Tier, Feature, LIMITS, TIERS, FEATURES, SEGMENTS } from '@components/Packaging/tiers';
import MarketplaceButton from '@root/components/Packaging/MarketplaceButton';

const hasFeature = (tier: Tier, feature: Feature): boolean => {
  if (feature.tiers.indexOf('*') >= 0) return true;
  if (feature.tiers.indexOf(tier.name) >= 0) return true;
  return false;
};

const tierColor = (tier: Tier): string | undefined =>
  SEGMENTS.find((s) => s.tiers.includes(tier.name))?.color;
const tierColorLight = (tier: Tier): string | undefined =>
  chroma(tierColor(tier) || 'white')
    .brighten(2.5)
    .desaturate(0.4)
    .hex();
const tierColorDark = (tier: Tier): string | undefined =>
  chroma(tierColor(tier) || 'black')
    .darken(0.75)
    .saturate(0.75)
    .hex();

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
      const segment = SEGMENTS.find((s) => s.tiers.includes(tier.name));
      if (idx > 0) {
        if (feature.hasLimits) {
          if (tierLimit(tier, feature) === tierLimit(TIERS[idx - 1], feature)) {
            return false;
          }
          return true;
        }
        // if (feature.tiers.indexOf('*') >= 0) return false;
        if (hasFeature(TIERS[idx - 1], feature) && segment?.tiers.includes(TIERS[idx - 1].name))
          return false;
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
    <Heading
      as="h1"
      fontWeight="extrabold"
      textAlign="center"
      color="white"
      size={{ base: '2xl', lg: '3xl' }}
      letterSpacing={{ base: '-1.5px', lg: '-1.5px' }}
      lineHeight={{ base: 1, lg: 1.5 }}
    >
      Plans for any scale
    </Heading>
    <Heading
      as="h2"
      textAlign="center"
      fontWeight="medium"
      color="rgba(255, 255, 255, 0.8)"
      size={{ base: 'lg', lg: 'xl' }}
      letterSpacing={{ base: '-1.7px', md: '-2px', lg: '-1.7px' }}
      lineHeight={{ base: 1, md: 1.2, lg: 1 }}
      mt={{ base: 5, lg: 1 }}
      mx="20"
      mb="20"
    >
      Start free &mdash; with predictable pricing that scales when you need
    </Heading>
    <Box as="section" py="14" px={{ base: '4', md: '8' }} style={{ width: '100%' }}>
      <Accordion style={{ width: '100%' }} allowMultiple defaultIndex={[0, 1, 2]}>
        {SEGMENTS.map((segment) => (
          <AccordionItem
            key={segment.name}
            style={{
              width: '100%',
              borderStyle: 'none',
              backgroundColor: 'white',
              borderRadius: 15,
            }}
            p="4"
            shadow="2xl"
            my={8}
          >
            <AccordionButton _hover={{ background: 'white' }}>
              <Box as="span" flex="1" textAlign="left">
                <Heading as="h3" letterSpacing="-1.5px">
                  For {segment.name}
                </Heading>
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel padding={{ base: '0', lg: '0' }}>
              <SimpleGrid
                // columns={[1, null]}
                minChildWidth={{ base: 'xxs', lg: 'xs' }}
                spacing={{ base: '8', lg: '0' }}
                maxW="7xl"
                mx="auto"
                justifyItems="center"
                alignItems="stretch"
                mt="8"
                gap={{ base: '4', lg: '8' }}
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
                    segmentColor={segment.color}
                    borderStyle="solid"
                    borderColor="#ddd"
                    borderWidth="1px"
                    borderRadius={15}
                    isPopular={card.isPopular}
                    display="flex"
                    flexDirection="column"
                    previousTier={
                      TIERS[
                        TIERS.findIndex(
                          (tier: Tier) =>
                            tier.name ===
                            segment.tiers[segment.tiers.findIndex((t) => t === card.name) - 1]
                        )
                      ]
                    }
                    button={
                      <ActionButton
                        variant="outline"
                        borderWidth="2px"
                        mt={2}
                        mb={8}
                        href={card.cta.url}
                        border="none"
                        borderColor={chroma(segment.color).darken(0.75).saturate(0.75).hex()}
                        color={chroma(segment.color).darken(0.75).saturate(0.75).hex()}
                        background={chroma(segment.color).brighten(1.5).desaturate(0.75).hex()}
                        _hover={{
                          background: chroma(segment.color).darken(0.75).saturate(0.75).hex(),
                          color: chroma(segment.color).brighten(1.5).desaturate(0.75).hex(),
                        }}
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
    <Box textAlign="center" mt="10" mb="20">
      <Heading
        as="h4"
        letterSpacing="-1px"
        size="lg"
        style={{ textWrap: 'balance' }}
        mb="4"
        color="#242A31"
      >
        Sign up through marketplaces to unify billing and leverage existing commitments with cloud
        providers
      </Heading>
      <Link href="https://aws.amazon.com/marketplace/pp/prodview-wsd42efzcpsxk" isExternal>
        <MarketplaceButton padding={3} mx={2} my={4} shadow="lg" _hover={{ shadow: 'sm' }}>
          <AwsLogo style={{ maxWidth: '100%', maxHeight: '100%' }} />
        </MarketplaceButton>
      </Link>
      <MarketplaceButton padding={3} mx={2} my={4} shadow="lg" _hover={{ shadow: 'sm' }}>
        <AzureLogo style={{ maxWidth: '100%', maxHeight: '100%' }} />
      </MarketplaceButton>
      <MarketplaceButton padding={1} mx={2} my={4} shadow="lg" _hover={{ shadow: 'sm' }}>
        <GcpLogo style={{ maxWidth: '100%', maxHeight: '100%' }} />
      </MarketplaceButton>
    </Box>

    <Box>
      <TableContainer fontSize="xs">
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th key="blank-header-column-1" border="none" />
              {TIERS.map((tier) => (
                <Th
                  textAlign="center"
                  key={tier.name}
                  borderTop={`4px solid ${tierColor(tier)}`}
                  background={tierColorLight(tier)}
                  color={tierColorDark(tier)}
                  borderBottom="none"
                >
                  {tier.name}
                </Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {FEATURES.map((feature) => (
              <Tr key={feature.name}>
                <Td fontSize="xs" border="none">
                  {feature.name}
                </Td>
                {TIERS.map((tier) => {
                  if (hasFeature(tier, feature))
                    return (
                      <Td
                        textAlign="center"
                        fontSize="small"
                        key={`${feature.name}-${tier.name}`}
                        background={tierColorLight(tier)}
                        color={tierColorDark(tier)}
                        border="none"
                      >
                        {featureValue(tier, feature)}️
                      </Td>
                    );
                  return (
                    <Td
                      textAlign="center"
                      fontSize="xs"
                      background={tierColorLight(tier)}
                      color={tierColorDark(tier)}
                      key={`${feature.name}-${tier.name}`}
                      border="none"
                    >{`\u2013`}</Td>
                  );
                })}
              </Tr>
            ))}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th key="blank-footer-column-1" />
              {TIERS.map((tier) => (
                <Th key={`cta-${tier.name}`} color={tierColorDark(tier)}>
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
