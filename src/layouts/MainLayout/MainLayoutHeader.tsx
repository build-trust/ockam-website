import { FunctionComponent, useContext, RefObject } from 'react';
import { Box, Container, Flex, forwardRef, useDisclosure } from '@chakra-ui/react';
import Link from 'next/link';

import LogoGray from '@assets/logo-gray.svg';
import LogoDark from '@assets/logo-dark.svg';
import MainLayoutMobileNav from '@layouts/MainLayout/MainLayoutMobileNav';
import { MainLayoutDesktopNav } from '@layouts/MainLayout/MainLayoutDesktopNav';
import useScroll from '@hooks/useScroll';
import { HOME_PATH } from '@consts/paths';
import { MobileNavbarContext } from '@contextProviders/MobileNavbarProvider';
import BrandAssetPopover from '@root/components/BrandAssetPopover';

import LayoutMobileHeader from '../components/LayoutMobileHeader';

const MainLayoutHeader: FunctionComponent = forwardRef((props, ref) => {
  const { hasGradient } = props;
  const { isScrolled } = useScroll(40, true, ref as RefObject<HTMLDivElement>);
  const { isBelowSmallLaptop } = useContext(MobileNavbarContext);
  const { isOpen, onToggle, onClose } = useDisclosure();
  const headerDesktopPaddingY = isScrolled ? 5 : 8;
  const StartLogo = hasGradient ? LogoGray : LogoDark;
  const startbg = hasGradient ? 'transparent' : 'white';

  if (isBelowSmallLaptop) {
    return (
      <LayoutMobileHeader>
        <MainLayoutMobileNav />
      </LayoutMobileHeader>
    );
  }

  const handleLogoContextClick = (): void => {
    onToggle();
  };
  return (
    <Box
      ref={ref}
      as="header"
      w="full"
      pos="fixed"
      top={0}
      zIndex={10}
      bgColor={isScrolled ? 'white' : startbg}
      boxShadow={isScrolled ? 'md' : 'none'}
      py={{ base: 4, lg: headerDesktopPaddingY }}
      transition="all 400ms ease-in-out"
    >
      <Container variant="section" display="flex" w="full">
        <Flex w="full" alignItems="center">
          <BrandAssetPopover isOpen={isOpen} onClose={onClose} />
          <Link href={HOME_PATH} passHref legacyBehavior>
            <Box as="a" flex={0} pr={{ base: 2, xl: 4 }} maxW="11rem" h="auto">
              <Box
                as={isScrolled ? LogoDark : StartLogo}
                alt="Homepage link"
                transition="all 400ms ease-in-out"
                w={{ base: '7.875rem', lg: isScrolled ? '8.75rem' : '11rem' }}
                h={{ base: '2.25rem', lg: isScrolled ? '2.5rem' : '3.125rem' }}
                onContextMenu={handleLogoContextClick}
              />
            </Box>
          </Link>

          <MainLayoutDesktopNav />
        </Flex>
      </Container>
    </Box>
  );
});
export default MainLayoutHeader;
