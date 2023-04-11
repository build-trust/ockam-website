import { Box, BoxProps, useColorModeValue } from '@chakra-ui/react';

import CardBadge from './CardBadge';

export interface CardProps extends BoxProps {
  isPopular?: boolean;
}
const Card = (props: CardProps): JSX.Element => {
  const { children, isPopular, ...rest } = props;

  return (
    <Box
      bg={useColorModeValue('white', 'gray.700')}
      position="relative"
      px="6"
      pb="6"
      pt="16"
      overflow="hidden"
      shadow="lg"
      maxW="md"
      width="100%"
      {...rest}
    >
      {isPopular && <CardBadge>Start here</CardBadge>}
      {children}
    </Box>
  );
};
export default Card;
