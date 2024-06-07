import { FunctionComponent, useContext, RefObject } from 'react';
import { Box, Container, Flex, forwardRef, useDisclosure, Link } from '@chakra-ui/react';
import NextLink from 'next/link';

import LogoGray from '@assets/logo-gray.svg';
import LogoDark from '@assets/logo-dark.svg';
import MainLayoutMobileNav from '@layouts/MainLayout/MainLayoutMobileNav';
import { MainLayoutDesktopNav } from '@layouts/MainLayout/MainLayoutDesktopNav';
import useScroll from '@hooks/useScroll';
import { HOME_PATH } from '@consts/paths';
import { MobileNavbarContext } from '@contextProviders/MobileNavbarProvider';
import BrandAssetPopover, { BrandAssetPopoverTrigger } from '@root/components/BrandAssetPopover';

import LayoutMobileHeader from '../components/LayoutMobileHeader';

const MainLayoutHeader: FunctionComponent = forwardRef((props, ref) => {
  const { hasGradient } = props;
  const { isScrolled } = useScroll(40, true, ref as RefObject<HTMLDivElement>);
  const { isBelowSmallLaptop } = useContext(MobileNavbarContext);
  const { isOpen, onToggle, onClose } = useDisclosure();
  const headerDesktopPaddingY = isScrolled ? 5 : 8;

  const startbg = hasGradient ? 'transparent' : 'white';
  const scrolledProps = isScrolled
    ? {
        bgColor: 'white',
        boxShadow: 'md',
        className: 'scrolled',
      }
    : {
        bgColor: startbg,
        boxShadow: 'none',
      };

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
      py={{ base: 4, lg: headerDesktopPaddingY }}
      transition="all 400ms ease-in-out"
      {...scrolledProps}
    >
      <Container variant="section" display="flex" w="full">
        <Flex w="full" alignItems="center">
          <BrandAssetPopover isOpen={isOpen} onClose={onClose}>
            <BrandAssetPopoverTrigger>
              <Link
                as={NextLink}
                href={HOME_PATH}
                flex={0}
                pr={{ base: 2, xl: 4 }}
                maxW="11rem"
                h="auto"
              >
                <Box
                  as={isScrolled ? LogoDark : LogoGray}
                  alt="Homepage link"
                  transition="all 400ms ease-in-out"
                  w={{ base: '7.875rem', lg: '8.75rem' }}
                  h={{ base: '2.25rem', lg: '2.5rem' }}
                  onContextMenu={handleLogoContextClick}
                />
              </Link>
            </BrandAssetPopoverTrigger>
          </BrandAssetPopover>

          <MainLayoutDesktopNav />
        </Flex>
      </Container>
    </Box>
  );
});
export default MainLayoutHeader;
