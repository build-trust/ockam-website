import { FunctionComponent } from 'react';
import { Box, Flex } from '@chakra-ui/react';

import { ChildrenProp } from '@typings/ChildrenProp';
import MobileNavbarProvider from '@contextProviders/MobileNavbarProvider';

import LayoutFooter from '../components/LayoutFooter';

import MainLayoutHeader from './MainLayoutHeader';

const MainLayout: FunctionComponent<ChildrenProp> = ({ children }) => (
  <MobileNavbarProvider>
    <MainLayoutHeader />

    <Flex direction="column" minH="full" w="full" overflowX="hidden">
      <Box as="main" w="full" p={0} flex={1}>
        {children}
      </Box>

      <LayoutFooter />
    </Flex>
  </MobileNavbarProvider>
);

export default MainLayout;
