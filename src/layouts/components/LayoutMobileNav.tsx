import { FunctionComponent, ReactNode } from 'react';
import { Flex } from '@chakra-ui/react';

type LayoutMobileNavProps = {
  children: ReactNode;
  isOpenMobileNav: boolean | undefined;
};

const LayoutMobileNav: FunctionComponent<LayoutMobileNavProps> = ({
  children,
  isOpenMobileNav,
}) => (
  <Flex
    bg="white"
    transition="all 0.4s ease-in-out"
    direction="column"
    align="center"
    w="full"
    p={0}
    pb={isOpenMobileNav ? '132px' : '0'}
    px={5}
    h={isOpenMobileNav ? 'full' : 0}
    minH={isOpenMobileNav ? '100vh' : 0}
    overflow={isOpenMobileNav ? 'auto' : 'hidden'}
  >
    {children}
  </Flex>
);

export default LayoutMobileNav;
