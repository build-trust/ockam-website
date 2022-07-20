import { FunctionComponent } from 'react';
import { Center, CenterProps } from '@chakra-ui/react';

const GreenIconWrapper: FunctionComponent<CenterProps> = ({ children, ...restProps }) => (
  <Center w={10} h={10} bgColor="avocado.500" borderRadius="base" {...restProps}>
    {children}
  </Center>
);

export default GreenIconWrapper;
