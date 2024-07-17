import { Box, Button, Card, CardProps, Flex, Stack, Text } from '@chakra-ui/react';
import { ReactElement } from 'react';
import NextLink from 'next/link';

import CheckIcon from './assets/check.svg';

interface PricingCardProps extends CardProps {
  title: string;
  subscriptionInterval: string;
  price: number;
  button: {
    title: string;
    href: string;
  };
  features: string[];
}

const priceFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
});
const PricingCard = ({
  title,
  subscriptionInterval,
  price,
  button,
  features,
  ...cardProps
}: PricingCardProps): ReactElement => (
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
        {title}
      </Text>
      <Box>
        <Text color="gray.500" fontSize={{ base: '0.875rem' }}>
          starting at
        </Text>
        <Text
          fontFamily="neutraface"
          color="brand.800"
          fontSize={{ base: '1.5rem', lg: '2.5rem' }}
          fontWeight={{ base: 700 }}
        >
          {priceFormatter.format(price)}{' '}
          <Box as="sub" fontSize={{ base: '0.75rem', lg: '1rem' }}>
            / {subscriptionInterval}
          </Box>
        </Text>
      </Box>
      <Button as={NextLink} href={button.href} variant="primary" height={{ base: '3.5rem' }}>
        {button.title}
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
        {features.map((feature) => (
          <Flex alignItems={{ base: 'center' }} gap={{ base: '0.5rem' }}>
            <Box as={CheckIcon} flexShrink={0} />
            <Text color="brand.800" fontWeight={{ base: 500 }} fontSize={{ base: '0.875rem' }}>
              {feature}
            </Text>
          </Flex>
        ))}
      </Stack>
    </Stack>
  </Card>
);

export default PricingCard;
