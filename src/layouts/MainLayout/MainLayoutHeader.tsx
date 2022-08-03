import { FunctionComponent, useContext, useRef } from 'react';
import { Box, Container, Flex } from '@chakra-ui/react';
import Link from 'next/link';

import LogoDark from '@assets/logo-dark.svg';
import MainLayoutMobileNav from '@layouts/MainLayout/MainLayoutMobileNav';
import { MainLayoutDesktopNav } from '@layouts/MainLayout/MainLayoutDesktopNav';
import useScroll from '@hooks/useScroll';
import { HOME_PATH } from '@consts/paths';
import { MobileNavbarContext } from '@contextProviders/MobileNavbarProvider';

import LayoutMobileHeader from '../components/LayoutMobileHeader';

const MainLayoutHeader: FunctionComponent = () => {
  const ref = useRef(null);
  const { isScrolled } = useScroll(40, true, ref);
  const { isBelowSmallLaptop } = useContext(MobileNavbarContext);
  const headerDesktopPaddingY = isScrolled ? 5 : 8;

  if (isBelowSmallLaptop) {
    return (
      <LayoutMobileHeader>
        <MainLayoutMobileNav />
      </LayoutMobileHeader>
    );
  }

  return (
    <Box
      ref={ref}
      as="header"
      w="full"
      pos="sticky"
      top={0}
      zIndex={1}
      bgColor="white"
      boxShadow={isScrolled ? 'md' : 'none'}
      py={{ base: 4, lg: headerDesktopPaddingY }}
      transition="all 400ms ease-in-out"
    >
      <Container variant="section" display="flex" w="full">
        <Flex w="full" alignItems="center">
          <Link href={HOME_PATH} passHref>
            <Box as="a" flex={0} pr={{ base: 2, xl: 4 }} maxW="11rem" h="auto">
              <Box
                as={LogoDark}
                alt="Homepage link"
                transition="all 400ms ease-in-out"
                w={{ base: '7.875rem', lg: isScrolled ? '8.75rem' : '11rem' }}
                h={{ base: '2.25rem', lg: isScrolled ? '2.5rem' : '3.125rem' }}
              />
            </Box>
          </Link>

          <MainLayoutDesktopNav />
        </Flex>
      </Container>
    </Box>
  );
};
export default MainLayoutHeader;
