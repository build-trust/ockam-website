import { ReactElement, ReactNode } from 'react';
import { Box } from '@chakra-ui/react';

import { NextPageWithLayout } from '@typings/NextPageWithLayout';
import MainLayout from '@layouts/MainLayout';
import { Hero, GetStarted, Features, Cases } from '@views/homepage';

const HomePage: NextPageWithLayout = () => (
  <Box pt={{ base: 0 }}>
    <Hero subtext="Between your platform and every <Application|Database|Repo|Agent|SaaS|Datalake> everywhere" />
    <Features />
    <Cases />
    <GetStarted />
  </Box>
);

HomePage.getLayout = (page: ReactElement): ReactNode => (
  <MainLayout gradient={['#4FDAB8', '#52C7EA']}>{page}</MainLayout>
);

export default HomePage;
