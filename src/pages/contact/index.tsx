import { ReactElement, ReactNode } from 'react';
import { Box } from '@chakra-ui/react';

import { NextPageWithLayout } from '@typings/NextPageWithLayout';
import SEOHead from '@components/SEOHead';
import MainLayout from '@layouts/MainLayout';
import { Hero, ContactMainActions, ContactExtensiveActions } from '@views/contact';

const ContactPage: NextPageWithLayout = () => (
  <Box pt={{ base: 10, lg: 20 }}>
    <SEOHead subTitle="Contact" />

    <Hero />
    <ContactMainActions />
    <ContactExtensiveActions />
  </Box>
);

ContactPage.getLayout = (page: ReactElement): ReactNode => <MainLayout>{page}</MainLayout>;

export default ContactPage;
