import { FunctionComponent } from 'react';
import { Flex } from '@chakra-ui/react';

import MainLayoutCtaButtons from '../MainLayoutCtaButtons';

import MainLayoutMobileNavButton from './MainLayoutMobileNavButton';
import MainLayoutMobileNavMenu from './MainLayoutMobileNavMenu';

type MainLayoutMobileNavProps = {
  headerCurrentHeight: number;
  isOpenMobileNav: boolean;
  onToggleMobileNav: () => void;
};

const MainLayoutMobileNav: FunctionComponent<MainLayoutMobileNavProps> = ({
  headerCurrentHeight,
  isOpenMobileNav,
  onToggleMobileNav,
}) => (
  <>
    <MainLayoutMobileNavButton isOpenMobileNav={isOpenMobileNav} onClick={onToggleMobileNav} />

    <Flex
      position="absolute"
      bg="white"
      left={0}
      top={0}
      zIndex={-1}
      transition="all 0.4s ease-in-out"
      direction="column"
      align="center"
      w="full"
      p={0}
      pt={isOpenMobileNav ? headerCurrentHeight : '0'}
      px={5}
      h={isOpenMobileNav ? 'full' : 0}
      minH={isOpenMobileNav ? '100vh' : 0}
      overflow={isOpenMobileNav ? 'auto' : 'hidden'}
    >
      <MainLayoutMobileNavMenu />

      <MainLayoutCtaButtons />
    </Flex>
  </>
);

export default MainLayoutMobileNav;
