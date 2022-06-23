import { FunctionComponent, useRef } from 'react';
import { Flex, Box, useDimensions } from '@chakra-ui/react';

import { ChildrenProp } from '@typings/ChildrenProp';

import MainLayoutHeader from './MainLayoutHeader';
import MainLayoutFooter from './MainLayoutFooter';

const MainLayout: FunctionComponent<ChildrenProp> = ({ children }) => {
  const headerContainerRef = useRef(null);
  const dimensions = useDimensions(headerContainerRef);
  const headerCurrentHeight = dimensions?.borderBox.height as number;

  return (
    <Flex direction="column" minH="100vh" w="full" overflowX="hidden">
      <MainLayoutHeader headerCurrentHeight={headerCurrentHeight} ref={headerContainerRef} />

      <Box as="main" w="full" p={0} flex={1} mt={headerCurrentHeight || { base: 68, lg: 114 }}>
        {children}
      </Box>

      <MainLayoutFooter />
    </Flex>
  );
};

export default MainLayout;
