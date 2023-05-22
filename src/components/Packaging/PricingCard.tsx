import {
  ComponentWithAs,
  Flex,
  Heading,
  List,
  ListIcon,
  ListItem,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
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
}

interface PricingCardProps extends CardProps {
  data: PricingCardData;
  icon?: ElementType;
  button: ReactElement;
}

interface PriceProps {
  price: string;
  unit?: string;
  interval?: string;
}
const Price = (props: PriceProps): JSX.Element => {
  const { price, unit, interval } = props;
  const accentColor = useColorModeValue('blue.600', 'blue.200');

  const units = (): JSX.Element | undefined => {
    if (unit && interval) {
      return (
        <>
          <Text fontWeight="inherit" fontSize="2xl">
            / {unit}
          </Text>
          <Text fontWeight="inherit" fontSize="2xl">
            / {interval}
          </Text>
        </>
      );
    }
    if (interval) {
      return (
        <>
          <Text fontWeight="inherit" fontSize="2xl">
            / {interval}
          </Text>
        </>
      );
    }
    return undefined;
  };

  const priceSize = (): string => {
    if (unit || interval) {
      return '3xl';
    }
    return '1xl';
  };

  return (
    <Flex
      align="flex-end"
      justify="center"
      fontWeight="extrabold"
      color={accentColor}
      my="8"
      h={14}
    >
      <Heading size={priceSize()} fontWeight="inherit" lineHeight="0.9em" alignSelf="center">
        {price}
      </Heading>
      {units()}
    </Flex>
  );
};
const PricingCard = (props: PricingCardProps): JSX.Element => {
  const { data, icon, button, isPopular, ...rest } = props;
  const { features, price, priceUnit, priceInterval, name } = data;
  const accentColor = useColorModeValue('avocado.600', 'avocado.200');
  const absentColor = 'red';

  const featureName = (feature: Feature): string => {
    if (feature.limits) {
      return `${feature.name}: ${feature.limits}`;
    }
    return feature.name;
  };

  return (
    <Card {...rest} isPopular={isPopular}>
      <VStack spacing={6} h={16}>
        <Heading size="md" fontWeight="extrabold">
          {name}
        </Heading>
      </VStack>
      <Price price={price} unit={priceUnit} interval={priceInterval} />
      {button}
      <List spacing="1" mb="8" maxW="28ch" mx="auto" fontSize="xs">
        {features.map((feature) => (
          <ListItem fontWeight="medium" key={`${name}-${feature.name}`}>
            <ListIcon
              fontSize="xs"
              as={feature.icon}
              marginEnd={2}
              color={feature.has ? accentColor : absentColor}
            />
            <span dangerouslySetInnerHTML={{ __html: featureName(feature) }} />
          </ListItem>
        ))}
      </List>
    </Card>
  );
};

export default PricingCard;
