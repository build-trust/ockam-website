import { FunctionComponent, ReactNode, useRef } from 'react';
import { Box, ResponsiveValue } from '@chakra-ui/react';

import MobileNavbarProvider from '@contextProviders/MobileNavbarProvider';

import LayoutFooter from '../components/LayoutFooter';

import MainLayoutHeader from './MainLayoutHeader';

type LayoutProps = {
  gradient?: string[];
  hasGradient?: boolean;
  children?: ReactNode;
  backgroundColor?: string;
  paddingTop?: ResponsiveValue<number>;
};

const MainLayout: FunctionComponent<LayoutProps> = ({
  gradient,
  hasGradient,
  backgroundColor,
  children,
  paddingTop,
}) => {
  const headerRef = useRef<HTMLDivElement>(null);
  return (
    <MobileNavbarProvider>
      <MainLayoutHeader ref={headerRef} hasGradient={hasGradient || !!gradient} />
      <Box
        as="main"
        flex={1}
        w="full"
        pt={paddingTop || { base: 0 }}
        backgroundColor={backgroundColor}
      >
        {children}
      </Box>
      <Box backgroundColor={backgroundColor}>
        <LayoutFooter backgroundColor={backgroundColor} />
      </Box>
    </MobileNavbarProvider>
  );
};

export default MainLayout;
