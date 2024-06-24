import { Card, CardProps } from '@chakra-ui/react';
import { ReactElement } from 'react';

interface PricingCardProps extends CardProps {}
const PricingCard = (props: PricingCardProps): ReactElement => (
  <Card
    borderRadius={{ base: '0.25rem', lg: '0.75rem' }}
    p={{ base: '1rem', lg: '1.5rem' }}
    border="1px solid"
    borderColor="gray.200"
    {...props}
  >
    W
  </Card>
);

export default PricingCard;
