import { FunctionComponent } from 'react';
import { Box, BoxProps } from '@chakra-ui/react';

const BorderDot: FunctionComponent<BoxProps> = (props) => (
  <Box
    display={{ base: 'none', lg: 'block' }}
    w="16px"
    h="16px"
    bgColor="avocado.200"
    position="absolute"
    top="calc(50% - 8px)"
    left="-9.5px"
    borderRadius="50%"
    {...props}
  />
);

export default BorderDot;
