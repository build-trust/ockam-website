import { FunctionComponent, ReactNode, useRef } from 'react';
import { Box, Flex, ResponsiveValue } from '@chakra-ui/react';

import MobileNavbarProvider from '@contextProviders/MobileNavbarProvider';

import LayoutFooter from '../components/LayoutFooter';

import LandingLayoutHeader from './LandingLayoutHeader';
import styles from './styles.module.css';

type Props = {
  hideNav?: boolean;
  children: ReactNode;
};
const LandingLayout: FunctionComponent<Props> = ({ hideNav, children }) => {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerHeight = `${headerRef.current?.clientHeight || 80}px`;

  const nav = (): ReactNode => {
    if (hideNav) return <></>;
    /* @ts-ignore */
    return <LandingLayoutHeader ref={headerRef} />;
  };
  const headerPadding = (): ResponsiveValue<
    ((string & {}) | number) | '3xl' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'xs' | '4xl'
  > => {
    if (hideNav) return { base: 0, lg: 0 };
    return { base: 0, lg: headerHeight };
  };
  return (
    <MobileNavbarProvider>
      {nav()}
      <Flex direction="column" minH="full" w="full" overflowX="hidden" className={styles.container}>
        <Box as="main" flex={1} w="full" pt={headerPadding()}>
          {children}
        </Box>

        <LayoutFooter landingPage />
      </Flex>
    </MobileNavbarProvider>
  );
};

export default LandingLayout;
