import { ReactElement, ReactNode } from 'react';
import { Box } from '@chakra-ui/react';
import Head from 'next/head';

import { Hero, Values, Virtues, Investors } from '@views/mission';
import { NextPageWithLayout } from '@typings/NextPageWithLayout';
import MainLayout from '@layouts/MainLayout';
import CONFIG from '@config';

const MissionAndVisionPage: NextPageWithLayout = () => (
  <Box pt={{ base: 10, lg: 20 }}>
    <Head>
      <title>{CONFIG.app.title} | Mission & Vision</title>
    </Head>

    <Hero />
    <Values />
    <Virtues />
    <Investors />
  </Box>
);

MissionAndVisionPage.getLayout = (page: ReactElement): ReactNode => <MainLayout>{page}</MainLayout>;

export default MissionAndVisionPage;
