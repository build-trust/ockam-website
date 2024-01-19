import { FunctionComponent } from 'react';
import {
  Container,
  Box,
  SimpleGrid,
  Heading,
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionButton,
  AccordionIcon,
  Text,
} from '@chakra-ui/react';
import chroma from 'chroma-js';

import ActionButton from '@components/Packaging/ActionButton';
import PricingCard from '@components/Packaging/PricingCard';
import Marketplaces from '@components/Packaging/Marketplaces';
import { Tier, Feature, TIERS, FEATURES, SEGMENTS, tierLimit } from '@components/Packaging/tiers';
import FeatureTable from '@root/components/Packaging/FeatureTable';

const hasFeature = (tier: Tier, feature: Feature): boolean => {
  if (feature.tiers.indexOf('*') >= 0) return true;
  if (feature.tiers.indexOf(tier.name) >= 0) return true;
  return false;
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

const Packages: FunctionComponent = () => {
  const expanded = SEGMENTS.reduce((p, c, cIdx) => {
    if (c.expanded) {
      p.push(cIdx);
    }
    return p;
  }, [] as number[]);

  return (
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
        <Accordion style={{ width: '100%' }} allowMultiple defaultIndex={expanded}>
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
              aria-expanded={segment.expanded}
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
                <Text mx={4} maxW="45em" letterSpacing="-0.5px">
                  {segment.text}
                </Text>
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
                              segment.tiers[segment.tiers.findIndex((t) => t === card.name) - 1],
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
                {segment.name === 'Companies' && <Marketplaces />}
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Box>

      <Box maxWidth="100%">
        <FeatureTable tiers={TIERS} features={FEATURES} segments={SEGMENTS} />
      </Box>
    </Container>
  );
};

export default Packages;
