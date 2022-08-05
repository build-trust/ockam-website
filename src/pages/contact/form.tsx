import { ReactElement, ReactNode } from 'react';
import { Container, Flex } from '@chakra-ui/react';

import { NextPageWithLayout } from '@typings/NextPageWithLayout';
import MainLayout from '@layouts/MainLayout';
import SEOHead from '@components/SEOHead';
import { Hero, ContactForm, Quote } from '@views/contact-form';

const ContactFormPage: NextPageWithLayout = () => (
  <Container variant="section" pt={{ base: 10, lg: 20 }}>
    <SEOHead subTitle="Contact Form" />

    <Hero />

    <Flex
      w="full"
      pt={{ base: 12, md: 24 }}
      pb={{ base: 24, md: 32 }}
      justify={{ base: 'center', lg: 'space-between' }}
      align="center"
      gap={{ base: 0, lg: 10 }}
    >
      <ContactForm />

      <Quote />
    </Flex>
  </Container>
);

ContactFormPage.getLayout = (page: ReactElement): ReactNode => <MainLayout>{page}</MainLayout>;

export default ContactFormPage;
