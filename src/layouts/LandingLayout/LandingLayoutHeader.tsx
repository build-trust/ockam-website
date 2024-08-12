import { useContext } from 'react';
import { Box, Container, Flex, forwardRef } from '@chakra-ui/react';
import Link from 'next/link';

import LogoDark from '@assets/logo-dark.svg';
import MainLayoutMobileNav from '@layouts/MainLayout/MainLayoutMobileNav';
import { MainLayoutDesktopNav } from '@layouts/MainLayout/MainLayoutDesktopNav';
import { HOME_PATH } from '@consts/paths';
import { MobileNavbarContext } from '@contextProviders/MobileNavbarProvider';

import LayoutMobileHeader from '../components/LayoutMobileHeader';

const LandingLayoutHeader = forwardRef((props, ref) => {
  const { isBelowSmallLaptop } = useContext(MobileNavbarContext);

  if (isBelowSmallLaptop) {
    return (
      <LayoutMobileHeader {...props}>
        <MainLayoutMobileNav landingPage />
      </LayoutMobileHeader>
    );
  }

  return (
    <Box
      ref={ref}
      as="header"
      w="full"
      pos="fixed"
      top={0}
      zIndex={10}
      bgColor="white"
      boxShadow="md"
      py={{ base: 4 }}
      transition="all 400ms ease-in-out"
    >
      <Container variant="section" display="flex" w="full">
        <Flex w="full" alignItems="center">
          <Link href={HOME_PATH} passHref legacyBehavior>
            <Box as="a" flex={0} pr={{ base: 2, xl: 4 }} maxW="11rem" h="auto">
              <Box
                as={LogoDark}
                alt="Homepage link"
                transition="all 400ms ease-in-out"
                w={{ base: '7.875rem', lg: '8.75rem' }}
                h={{ base: '2.25rem', lg: '2.5rem' }}
              />
            </Box>
          </Link>
          <MainLayoutDesktopNav landingPage />
        </Flex>
      </Container>
    </Box>
  );
});
export default LandingLayoutHeader;
