import { FunctionComponent, ReactNode, useRef } from 'react';
import { Box, Flex } from '@chakra-ui/react';

import MobileNavbarProvider from '@contextProviders/MobileNavbarProvider';
import AllPageNotice, { AllPageMessage } from '@root/components/AllPageNotice';

import LayoutFooter from '../components/LayoutFooter';

import LandingLayoutHeader from './LandingLayoutHeader';
import styles from './styles.module.css';

type Props = {
  hideNav?: boolean;
  children: ReactNode;
  allPage?: AllPageMessage | null;
};
const LandingLayout: FunctionComponent<Props> = ({ hideNav, children, allPage }) => {
  const headerRef = useRef<HTMLDivElement>(null);

  const nav = (): ReactNode => {
    if (hideNav) return <></>;
    /* @ts-ignore */
    return <LandingLayoutHeader ref={headerRef} />;
  };

  return (
    <MobileNavbarProvider>
      <AllPageNotice message={allPage?.message} except={allPage?.except} />
      {nav()}
      <Flex
        direction="column"
        minH="full"
        w="full"
        overflowX="hidden"
        className={styles.container}
        h="100vh"
        overflowY="scroll"
      >
        <Box as="main" flex={1} w="full" pt={0}>
          {children}
        </Box>

        <LayoutFooter />
      </Flex>
    </MobileNavbarProvider>
  );
};

export default LandingLayout;
