import { ReactNode } from 'react';

import AllPageNotice, { AllPageMessage } from '@components/AllPageNotice';

import Footer from './Footer';
import Navigation from './Navigation';

interface DarkLayoutProps {
  children: ReactNode;
  message?: AllPageMessage['message'];
  except?: AllPageMessage['except'];
}
const DarkLayout = ({ message, except, children }: DarkLayoutProps): JSX.Element => (
  <>
    <AllPageNotice message={message} except={except} />
    <Navigation />
    <main>{children}</main>
    <Footer />
  </>
);

export default DarkLayout;
