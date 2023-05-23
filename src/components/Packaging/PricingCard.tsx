import {
  ComponentWithAs,
  Heading,
  HStack,
  List,
  ListItem,
  Text,
  useTheme,
  VStack,
} from '@chakra-ui/react';
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
}

interface PriceProps {
  price: string;
  unit?: string;
  interval?: string;
  floor?: string;
}
const Price = (props: PriceProps): JSX.Element => {
  const { price, unit, interval, floor } = props;

  const units = (): JSX.Element | undefined => {
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

  const priceSize = (): string => {
    if (unit || interval) {
      return '2xl';
    }
    return '1xl';
  };

  const floorPrice = (): JSX.Element => (
    <Text width="100%" fontSize="xs" as="em" textAlign="center" height="1em">
      {floor ? `min cost: ${floor}` : ''}
    </Text>
  );

  return (
    <VStack mb={4}>
      <HStack height="4em">
        <Heading size={priceSize()} fontWeight="inherit" lineHeight="0.9em" alignSelf="center">
          {price}
        </Heading>
        {units()}
      </HStack>
      {floorPrice()}
    </VStack>
  );
};
const PricingCard = (props: PricingCardProps): JSX.Element => {
  const { data, icon, button, isPopular, previousTier, ...rest } = props;
  const { features, price, priceUnit, priceInterval, name, floor } = data;
  const theme = useTheme();

  const featureName = (feature: Feature): string => {
    if (feature.limits) {
      return `${feature.name}: ${feature.limits}`;
    }
    return feature.name;
  };

  const previousFeatures = (): JSX.Element | undefined => {
    if (previousTier) {
      return (
        <ListItem fontWeight="medium" key={`${name}-prev`}>
          Everything in {previousTier.name}, plus:
        </ListItem>
      );
    }
    return undefined;
  };

  return (
    <Card {...rest} isPopular={isPopular}>
      <VStack spacing={6} h={16}>
        <Heading size="md" fontWeight="extrabold">
          {name}
        </Heading>
      </VStack>
      <Price price={price} unit={priceUnit} interval={priceInterval} floor={floor} />
      {button}
      <List spacing="1" mb="8" maxW="28ch" mx="0" fontSize="xs">
        {previousFeatures()}
        {features.map((feature) => (
          <ListItem fontWeight="medium" key={`${name}-${feature.name}`}>
            <Check
              color={theme.colors.avocado['600']}
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
