import { FunctionComponent } from 'react';

import MainLayoutCtaButtons from '../MainLayoutCtaButtons';

import MainLayoutMobileNavMenu from './MainLayoutMobileNavMenu';

const MainLayoutMobileNav: FunctionComponent = () => (
  <>
    <MainLayoutMobileNavMenu />

    <MainLayoutCtaButtons />
  </>
);

export default MainLayoutMobileNav;
