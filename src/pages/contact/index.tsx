import { ReactElement, ReactNode, useCallback, useEffect } from 'react';
import { Box, useToast } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import { NextPageWithLayout } from '@typings/NextPageWithLayout';
import SEOHead from '@components/SEOHead';
import MainLayout from '@layouts/MainLayout';
import { Hero, ContactMainActions, ContactExtensiveActions } from '@views/contact';
import { CONTACT_PAGE_PATH } from '@consts/paths';

const ContactPage: NextPageWithLayout = () => {
  const router = useRouter();
  const toast = useToast();

  const onSuccessContactFormSending = useCallback((): void => {
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
    <Box pt={{ base: 10, lg: 20 }}>
      <SEOHead subTitle="Contact" />

      <Hero />
      <ContactMainActions />
      <ContactExtensiveActions />
    </Box>
  );
};

ContactPage.getLayout = (page: ReactElement): ReactNode => <MainLayout>{page}</MainLayout>;

export default ContactPage;
