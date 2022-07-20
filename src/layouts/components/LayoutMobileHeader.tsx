import { FunctionComponent, ReactNode, RefObject, useContext, useRef } from 'react';
import Link from 'next/link';
import { Box, Flex, Container, BoxProps } from '@chakra-ui/react';

import { HOME_PATH } from '@consts/paths';
import LogoDark from '@assets/logo-dark.svg';
import { MobileNavbarContext } from '@contextProviders/MobileNavbarProvider';
import useScroll from '@hooks/useScroll';

import LayoutMobileNav from './LayoutMobileNav';
import LayoutMobileNavButton from './LayoutMobileNavButton';

type LayoutMobileHeaderProps = {
  children: ReactNode;
} & BoxProps;

const LayoutMobileHeader: FunctionComponent<LayoutMobileHeaderProps> = ({
  children,
  ...restProps
}) => {
  const headerContainerRef = useRef(null);
  const { isScrolled } = useScroll(40, true, headerContainerRef as RefObject<HTMLDivElement>);
  const { isOpenMobileNav, onToggleMobileNav } = useContext(MobileNavbarContext);

  return (
    <Box
      as="header"
      ref={headerContainerRef}
      display={{ base: 'block', lg: 'none' }}
      h="68px"
      pos="sticky"
      top={0}
      w="full"
      zIndex={100}
      bgColor="white"
      boxShadow={isScrolled && !isOpenMobileNav ? 'md' : 'none'}
      transition="all 400ms ease-in-out"
      {...restProps}
    >
      <Container
        variant="section"
        h={isOpenMobileNav ? '100vh' : '4.25rem'}
        px={0}
        pos="absolute"
        display="flex"
        w="full"
      >
        <Flex w="full" px={4} py={4} alignItems="center">
          <Link href={HOME_PATH} passHref>
            <Box as="a" flex={0} maxW="11rem" h="auto">
              <Box as={LogoDark} w="7.875rem" h="2.25rem" />
            </Box>
          </Link>

          <LayoutMobileNavButton isOpenMobileNav={isOpenMobileNav} onClick={onToggleMobileNav} />
        </Flex>
        <LayoutMobileNav isOpenMobileNav={isOpenMobileNav}>{children}</LayoutMobileNav>
      </Container>
    </Box>
  );
};

export default LayoutMobileHeader;
