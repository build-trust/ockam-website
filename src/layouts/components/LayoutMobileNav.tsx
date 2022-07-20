import { FunctionComponent, ReactNode } from 'react';
import { Flex } from '@chakra-ui/react';

type LayoutMobileNavProps = {
  children: ReactNode;
  isOpenMobileNav?: boolean;
};

const LayoutMobileNav: FunctionComponent<LayoutMobileNavProps> = ({
  children,
  isOpenMobileNav,
}) => (
  <Flex
    direction="column"
    align="center"
    pb={isOpenMobileNav ? 33 : 0}
    px={5}
    w="full"
    h={isOpenMobileNav ? 'full' : 0}
    minH={isOpenMobileNav ? '100vh' : 0}
    overflow={isOpenMobileNav ? 'auto' : 'hidden'}
    bg="white"
    transition="all 400ms ease-in-out"
  >
    {children}
  </Flex>
);

export default LayoutMobileNav;
