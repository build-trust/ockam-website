import { ReactElement, ReactNode } from 'react';
import Head from 'next/head';

import { NextPageWithLayout } from '@typings/NextPageWithLayout';
import MainLayout from '@layouts/MainLayout';
import {
  Hero,
  Solution,
  GetStarted,
  Tools,
  Infrastructure,
  Features,
  Cases,
  Packages,
  Footer,
} from '@views/homepage';
import CONFIG from '@config';

const HomePage: NextPageWithLayout = () => (
  <>
    <Head>
      <title>{CONFIG.app.title} | Homepage</title>
    </Head>

    <Hero />
    <Solution />
    <GetStarted />
    <Tools />
    <Infrastructure />
    <Features />
    <Cases />
    <Packages />
    <Footer />
  </>
);

HomePage.getLayout = (page: ReactElement): ReactNode => <MainLayout>{page}</MainLayout>;

export default HomePage;
