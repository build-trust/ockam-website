import { ReactNode } from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import theme from '@theme';

type StylesProviderProps = {
  children: ReactNode;
};

const StylesProvider = ({ children }: StylesProviderProps): JSX.Element => (
  <ChakraProvider theme={theme} portalZIndex={2147483647} resetCSS>
    {children}
  </ChakraProvider>
);

export default StylesProvider;
