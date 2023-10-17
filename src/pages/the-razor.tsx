import { ReactElement, ReactNode } from 'react';
import { Box } from '@chakra-ui/react';

import SEOHead from '@components/SEOHead';
import { NextPageWithLayout } from '@typings/NextPageWithLayout';
import { Hero } from '@views/homepage';
import LandingLayout from '@layouts/LandingLayout';

const TheRazorSignupPage: NextPageWithLayout = () => (
  <Box pt={{ base: 10, lg: 20 }}>
    <SEOHead
      subTitle="The Razor - newsletter signup"
      description="The latest & most interesting news about secure-by-design systems, developer experience, and related tooling"
      ogImageSrc="/the-razor.gif"
    />
    <Hero
      text="The Razor"
      subtext="The latest & most interesting news about secure-by-design systems, developer experience, and related tooling"
      landingPage
    />

    <iframe
      id="why"
      title="The Razor - signup"
      width="100%"
      height="500px"
      src="https://cdn.forms-content.sg-form.com/d0d5f678-5032-11ee-81f9-026e7845c92d"
    />
  </Box>
);

TheRazorSignupPage.getLayout = (page: ReactElement): ReactNode => (
  <LandingLayout>{page}</LandingLayout>
);

export default TheRazorSignupPage;
