import { ReactElement, ReactNode } from 'react';
import { Box } from '@chakra-ui/react';

import SEOHead from '@components/SEOHead';
import { Hero, Values, Virtues, Investors, Team } from '@views/mission';
import { NextPageWithLayout } from '@typings/NextPageWithLayout';
import DarkLayout from '@layouts/DarkLayout';

const MissionAndVisionPage: NextPageWithLayout = () => (
  <Box pt={{ base: 10, lg: 20 }}>
    <SEOHead subTitle="Our Mission" />
    <Hero />
    <Values />
    <Virtues />
    <Investors />
    <Team />
  </Box>
);

MissionAndVisionPage.getLayout = (page: ReactElement): ReactNode => <DarkLayout>{page}</DarkLayout>;

export default MissionAndVisionPage;
