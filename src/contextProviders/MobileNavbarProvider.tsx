import { createContext, FunctionComponent, ReactNode } from 'react';

import useLayoutMobileNav, { UseLayoutMobileNavReturnType } from '@hooks/useLayoutMobileNav';

type MobileNavbarContextProps = {
  children: ReactNode;
};

export const MobileNavbarContext = createContext<UseLayoutMobileNavReturnType>(
  {} as UseLayoutMobileNavReturnType
);

const MobileNavbarProvider: FunctionComponent<MobileNavbarContextProps> = ({ children }) => {
  const layoutMobileNav = useLayoutMobileNav();

  return (
    <MobileNavbarContext.Provider value={layoutMobileNav}>{children}</MobileNavbarContext.Provider>
  );
};

export default MobileNavbarProvider;
