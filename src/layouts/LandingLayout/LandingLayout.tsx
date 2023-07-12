import { FunctionComponent, useRef } from 'react';
import { Box, Flex } from '@chakra-ui/react';

import { ChildrenProp } from '@typings/ChildrenProp';
import MobileNavbarProvider from '@contextProviders/MobileNavbarProvider';

import LayoutFooter from '../components/LayoutFooter';

import LandingLayoutHeader from './LandingLayoutHeader';

const LandingLayout: FunctionComponent<ChildrenProp> = ({ children }) => {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerHeight = `${headerRef.current?.clientHeight || 80}px`;

  return (
    <MobileNavbarProvider>
      {/* @ts-ignore */}
      <LandingLayoutHeader ref={headerRef} />

      <Flex direction="column" minH="full" w="full" overflowX="hidden">
        <Box as="main" flex={1} w="full" pt={{ base: 0, lg: headerHeight }}>
          {children}
        </Box>

        <LayoutFooter landingPage />
      </Flex>
    </MobileNavbarProvider>
  );
};

export default LandingLayout;
