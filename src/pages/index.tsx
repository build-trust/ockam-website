import { ReactElement, ReactNode } from 'react';
import { Box } from '@chakra-ui/react';
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
} from '@views/homepage';
import CONFIG from '@config';

const HomePage: NextPageWithLayout = () => (
  <Box pt={{ base: 10, lg: 20 }}>
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
  </Box>
);

HomePage.getLayout = (page: ReactElement): ReactNode => <MainLayout>{page}</MainLayout>;

export default HomePage;
