import { useBreakpointValue, useDisclosure } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

type UseMainLayoutMobileNavReturnType = {
  isOpenMobileNav: boolean;
  onCloseMobileNav: () => void;
  onToggleMobileNav: () => void;
  isBelowSmallLaptop?: boolean;
};

const useMainLayoutMobileNav = (): UseMainLayoutMobileNavReturnType => {
  const router = useRouter();
  const {
    isOpen: isOpenMobileNav,
    onClose: onCloseMobileNav,
    onToggle: onToggleMobileNav,
  } = useDisclosure();
  const isBelowSmallLaptop = useBreakpointValue({ base: true, lg: false });

  useEffect(() => {
    if (typeof document === undefined) return;
    document.body.style.overflow = isBelowSmallLaptop && isOpenMobileNav ? 'hidden' : 'auto';
  }, [isBelowSmallLaptop, isOpenMobileNav]);

  useEffect(() => {
    const handleRouteChange = (): void => {
      if (isOpenMobileNav) {
        onCloseMobileNav();
      }
    };

    router.events.on('hashChangeStart', handleRouteChange);
    router.events.on('routeChangeStart', handleRouteChange);

    return (): void => {
      router.events.off('hashChangeStart', handleRouteChange);
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router.events, isOpenMobileNav, onCloseMobileNav]);

  return {
    isOpenMobileNav,
    onCloseMobileNav,
    onToggleMobileNav,
    isBelowSmallLaptop,
  };
};

export default useMainLayoutMobileNav;
