import { FunctionComponent } from 'react';
import { Box } from '@chakra-ui/react';

import { ChildrenProp } from '@typings/ChildrenProp';
import MobileNavbarProvider from '@contextProviders/MobileNavbarProvider';

import LayoutFooter from '../components/LayoutFooter';

import MainLayoutHeader from './MainLayoutHeader';

const MainLayout: FunctionComponent<ChildrenProp> = ({ children }) => (
  <MobileNavbarProvider>
    <MainLayoutHeader />

    <Box as="main" w="full" p={0} flex={1}>
      {children}
    </Box>

    <LayoutFooter />
  </MobileNavbarProvider>
);

export default MainLayout;
