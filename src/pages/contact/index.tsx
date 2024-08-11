import { ReactElement, ReactNode, useCallback, useEffect } from 'react';
import { Box, useToast } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import { NextPageWithLayout } from '@typings/NextPageWithLayout';
import SEOHead from '@components/SEOHead';
import MainLayout from '@layouts/MainLayout';
import { Hero, ContactExtensiveActions } from '@views/contact';
import { CONTACT_PAGE_PATH } from '@consts/paths';

const ContactPage: NextPageWithLayout = () => {
  const router = useRouter();
  const toast = useToast();

  const onSuccessContactFormSending = useCallback((): void => {
    if (window.gtag) window.gtag('config', 'AW-11100272214');
    if (window.analytics) {
      window.analytics.track('New Lead - Contact Form', {
        landingPage: 'unknown',
      });
    }
    if (window.lintrk) window.lintrk('track', { conversion_id: 13498706 });
    toast({
      position: 'top',
      title: 'Your message has been sent!',
      status: 'success',
      duration: 3000,
      isClosable: true,
      onCloseComplete: () => router.replace(CONTACT_PAGE_PATH, undefined, { shallow: true }),
    });
  }, [router, toast]);

  useEffect(() => {
    if (router?.query.contactFormStatus === 'success') onSuccessContactFormSending();
  }, [onSuccessContactFormSending, router?.query.contactFormStatus]);

  return (
    <Box>
      <SEOHead subTitle="Contact" />

      <Hero />
      <ContactExtensiveActions />
    </Box>
  );
};

ContactPage.getLayout = (page: ReactElement): ReactNode => (
  <MainLayout backgroundColor="#ffffff" paddingTop={{ base: 20, md: 36 }}>
    {page}
  </MainLayout>
);

export default ContactPage;
