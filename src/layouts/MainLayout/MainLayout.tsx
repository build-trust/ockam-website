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
    <Flex direction="column" minH="100vh" w="full">
      <MainLayoutHeader headerCurrentHeight={headerCurrentHeight} ref={headerContainerRef} />

      <Box as="main" w="full" p={0} flex={1} mt={headerCurrentHeight}>
        {children}
      </Box>

      <MainLayoutFooter />
    </Flex>
  );
};

export default MainLayout;
