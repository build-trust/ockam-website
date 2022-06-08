import { FunctionComponent, Ref, RefObject } from 'react';
import { Box, Container, Flex, forwardRef } from '@chakra-ui/react';

import LogoDark from '@assets/logo-dark.svg';
import {
  MainLayoutMobileNav,
  useMainLayoutMobileNav,
} from '@layouts/MainLayout/MainLayoutMobileNav';
import { MainLayoutDesktopNav } from '@layouts/MainLayout/MainLayoutDesktopNav';
import useScroll from '@hooks/useScroll';

const headerBasePaddingY = 5;

const MainLayoutHeader: FunctionComponent<{
  ref: Ref<HTMLDivElement>;
  headerCurrentHeight: number;
}> = forwardRef(({ headerCurrentHeight }, ref) => {
  const { isScrolled } = useScroll(40, true, ref as RefObject<HTMLDivElement>);
  const { isOpenMobileNav, onToggleMobileNav, isBelowSmallLaptop } = useMainLayoutMobileNav();
  const headerDesktopPaddingY = isScrolled ? headerBasePaddingY : 8;

  return (
    <Box
      ref={ref}
      as="header"
      pos="fixed"
      w="full"
      zIndex={1}
      bgColor="white"
      boxShadow={isScrolled && !isOpenMobileNav ? 'md' : 'none'}
      py={{ base: headerBasePaddingY, lg: headerDesktopPaddingY }}
      transition="all 400ms ease-in-out"
    >
      <Container variant="section" display="flex" w="full">
        <Flex w="full" alignItems="center">
          <Box flex={0} pr={{ base: 2, xl: 4 }} maxW="175px" h="auto">
            <Box
              as={LogoDark}
              transition="all 400ms ease-in-out"
              w={{ base: '126px', lg: isScrolled ? '140px' : '175px' }}
              h={{ base: '36px', lg: isScrolled ? '40px' : '50px' }}
            />
          </Box>

          {isBelowSmallLaptop ? (
            <MainLayoutMobileNav
              headerCurrentHeight={headerCurrentHeight as number}
              isOpenMobileNav={isOpenMobileNav}
              onToggleMobileNav={onToggleMobileNav}
            />
          ) : (
            <MainLayoutDesktopNav />
          )}
        </Flex>
      </Container>
    </Box>
  );
});

export default MainLayoutHeader;
