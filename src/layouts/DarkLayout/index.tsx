import { ReactNode } from 'react';

import Footer from './Footer';
import Navigation from './Navigation';

interface DarkLayoutProps {
  children: ReactNode;
}
const DarkLayout = ({ children }: DarkLayoutProps): JSX.Element => (
  <>
    <Navigation />
    <main>{children}</main>
    <Footer />
  </>
);

export default DarkLayout;
