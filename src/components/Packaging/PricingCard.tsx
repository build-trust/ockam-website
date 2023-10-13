import { ComponentWithAs, Heading, HStack, List, ListItem, Text, VStack } from '@chakra-ui/react';
import { HiBadgeCheck as Check } from 'react-icons/hi';
import { ElementType, ReactElement } from 'react';

import Card, { CardProps } from './Card';

type Feature = {
  icon?: ComponentWithAs<'svg'>;
  name: string;
  has?: boolean;
  limits?: string;
};
export interface PricingCardData {
  features: Feature[];
  name: string;
  price: string;
  priceInterval?: string;
  priceUnit?: string;
  floor?: string;
  onlyFloor?: boolean;
}

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
interface PricingCardProps extends CardProps {
  data: PricingCardData;
  icon?: ElementType;
  button: ReactElement;
  previousTier?: Tier;
  segmentColor: string;
}

interface PriceProps {
  price: string;
  unit?: string;
  interval?: string;
  floor?: string;
  onlyFloor?: boolean;
  segmentColor: string;
}
const Price = (props: PriceProps): JSX.Element => {
  const { price, unit, interval, floor, onlyFloor, segmentColor } = props;

  const units = (): JSX.Element | undefined => {
    if (onlyFloor) {
      return (
        <>
          <Text fontWeight="inherit" fontSize="xl">
            / {interval}
          </Text>
        </>
      );
    }
    if (unit && interval) {
      return (
        <>
          <Text fontWeight="inherit" fontSize="xl">
            / {unit}
          </Text>
          <Text fontWeight="inherit" fontSize="xl">
            / {interval}
          </Text>
        </>
      );
    }
    if (interval) {
      return (
        <>
          <Text fontWeight="inherit" fontSize="xl">
            / {interval}
          </Text>
        </>
      );
    }
    return undefined;
  };

  const formattedPrice = (): string => {
    const numPart = price.replace('$', '');
    return `$${parseInt(numPart, 10).toLocaleString()}`;
  };

  const priceSize = (): string => {
    if (unit || interval) {
      return '2xl';
    }
    return '1xl';
  };

  const floorPrice = (): JSX.Element => (
    <Text width="100%" fontSize="xs" as="em" textAlign="center" height="1em" color={segmentColor}>
      {floor ? `min cost: ${floor}` : ''}
    </Text>
  );

  return (
    <VStack my={4} align="left">
      {onlyFloor && <Text>Starting at</Text>}
      <HStack key={`price-heading-${price}-${floor}`} letterSpacing="-1px">
        <Heading
          size={priceSize()}
          fontWeight="inherit"
          lineHeight="0.9em"
          alignSelf="center"
          letterSpacing="-4px"
          style={{ fontWeight: 'bold' }}
        >
          {formattedPrice()}
        </Heading>
        {units()}
      </HStack>
      {floorPrice()}
    </VStack>
  );
};
const PricingCard = (props: PricingCardProps): JSX.Element => {
  const { data, icon, button, isPopular, previousTier, segmentColor, ...rest } = props;
  const { features, price, priceUnit, priceInterval, name, floor, onlyFloor } = data;

  const featureName = (feature: Feature): string => {
    if (feature.limits) {
      return `${feature.name}: ${feature.limits}`;
    }
    return feature.name;
  };

  const previousFeatures = (): JSX.Element => {
    let text = 'Features';
    if (previousTier) {
      text = `Everything in ${previousTier.name}, plus`;
    }
    return (
      <Heading as="h4" size="md" letterSpacing="-0.5px" mb="2">
        {text}
      </Heading>
    );
  };

  return (
    <Card {...rest} isPopular={isPopular} pt={4}>
      <VStack spacing={6} align="left" mb={0}>
        <Heading size="md" fontWeight="extrabold" key={`price-head-${name}`} color={segmentColor}>
          {name}
        </Heading>
      </VStack>
      <Price
        price={price}
        unit={priceUnit}
        interval={priceInterval}
        floor={floor}
        onlyFloor={onlyFloor}
        segmentColor={segmentColor}
      />
      {button}
      <List spacing="1" mb="8" maxW="100%" mx="0" fontSize="xs">
        {previousFeatures()}
        {features.map((feature) => (
          <ListItem fontWeight="medium" key={`${name}-${feature.name}`}>
            <Check
              color={segmentColor}
              size="1.5em"
              style={{ display: 'inline-block', marginRight: '4px', verticalAlign: 'middle' }}
            />
            ️
            <span dangerouslySetInnerHTML={{ __html: featureName(feature) }} />
          </ListItem>
        ))}
      </List>
    </Card>
  );
};

export default PricingCard;
