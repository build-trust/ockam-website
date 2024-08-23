import { Box, BoxProps, useColorModeValue } from '@chakra-ui/react';

const Card = (props: BoxProps): JSX.Element => {
  const { children, ...rest } = props;

  return (
    <Box
      bg={useColorModeValue('white', 'gray.700')}
      position="relative"
      px="6"
      pb="6"
      pt="16"
      overflow="hidden"
      maxW="md"
      width="100%"
      {...rest}
    >
      {children}
    </Box>
  );
};
export default Card;
