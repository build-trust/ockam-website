import { Box, Button, Card, CardProps, Flex, Stack, Text } from '@chakra-ui/react';
import { ReactElement } from 'react';
import NextLink from 'next/link';

import { featuresForTier, Tier } from '@root/components/Packaging/tiers';

import CheckIcon from './assets/check.svg';

type PricingCardProps = CardProps & {
  tier: Tier;
};

const priceFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
});
const PricingCard = ({ tier, ...cardProps }: PricingCardProps): ReactElement => (
  <Card
    borderRadius={{ base: '0.75rem' }}
    p={{ base: '1rem', lg: '1.5rem' }}
    border="1px solid"
    borderColor="gray.200"
    width="16.5rem"
    {...cardProps}
  >
    <Stack gap={{ base: '0.75rem', lg: '1rem' }}>
      <Text fontWeight={{ base: 700 }} color="brand.800">
        {tier.name}
      </Text>
      <Box>
        <Text color="gray.500" fontSize={{ base: '0.875rem' }}>
          starting at
        </Text>
        <Text
          fontFamily="neutraface"
          color="brand.800"
          fontSize={{ base: '1.5rem', lg: '2rem' }}
          fontWeight={{ base: 700 }}
        >
          {priceFormatter.format(tier.price)}{' '}
          <Box
            fontFamily="Inter"
            bottom={0}
            as="sub"
            mb={{ base: '0.25rem' }}
            fontWeight={500}
            color="gray.500"
            fontSize={{ base: '0.875rem' }}
          >
            / {tier.price_interval}
          </Box>
        </Text>
      </Box>
      <Button as={NextLink} href={tier.cta.url} variant="primary" height={{ base: '3.5rem' }}>
        {tier.cta.text}
      </Button>
      <Text
        color="gray.500"
        fontSize={{ base: '0.875rem' }}
        fontWeight={{ base: 600 }}
        mt={{ base: 'initial', lg: '1rem' }}
      >
        Includes:
      </Text>
      <Stack gap={{ base: '0.5rem' }}>
        {featuresForTier(tier.name, true).map((feature) => (
          <Flex key={feature.name} alignItems={{ base: 'center' }} gap={{ base: '0.5rem' }}>
            <Box as={CheckIcon} flexShrink={0} />
            <Text color="brand.800" fontWeight={{ base: 500 }} fontSize={{ base: '0.875rem' }}>
              {feature.name}
            </Text>
          </Flex>
        ))}
      </Stack>
    </Stack>
  </Card>
);

export default PricingCard;
