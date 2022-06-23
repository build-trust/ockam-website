import { FunctionComponent } from 'react';
import { Center, CenterProps } from '@chakra-ui/react';

// eslint-disable-next-line import/prefer-default-export
export const GreenIconWrapper: FunctionComponent<CenterProps> = ({ children, ...restProps }) => (
  <Center w={10} h={10} bgColor="avocado.500" borderRadius="4px" {...restProps}>
    {children}
  </Center>
);
