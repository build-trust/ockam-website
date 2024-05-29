import { FunctionComponent, ReactNode, useRef } from 'react';
import { Box } from '@chakra-ui/react';

import MobileNavbarProvider from '@contextProviders/MobileNavbarProvider';
import AllPageNotice, { AllPageMessage } from '@root/components/AllPageNotice';

import LayoutFooter from '../components/LayoutFooter';

import MainLayoutHeader from './MainLayoutHeader';

type LayoutProps = {
  gradient?: string[];
  hasGradient?: boolean;
  children?: ReactNode;
  backgroundColor?: string;
  allPage?: AllPageMessage | null;
};

const MainLayout: FunctionComponent<LayoutProps> = ({
  gradient,
  hasGradient,
  backgroundColor,
  children,
  allPage,
}) => {
  const headerRef = useRef<HTMLDivElement>(null);
  return (
    <MobileNavbarProvider>
      <AllPageNotice message={allPage?.message} except={allPage?.except} />
      {/* @ts-ignore */}
      <MainLayoutHeader ref={headerRef} hasGradient={hasGradient || !!gradient} />
      <Box as="main" flex={1} w="full" pt={{ base: 0 }} backgroundColor="#f9f9f9">
        {children}
      </Box>
      <Box backgroundColor={backgroundColor}>
        <LayoutFooter backgroundColor={backgroundColor} />
      </Box>
    </MobileNavbarProvider>
  );
};

export default MainLayout;
