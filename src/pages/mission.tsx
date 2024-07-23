import { ReactElement, ReactNode } from 'react';

import SEOHead from '@components/SEOHead';
import { Hero, Virtues, Team } from '@views/mission';
import { NextPageWithLayout } from '@typings/NextPageWithLayout';
import DarkLayout from '@layouts/DarkLayout';

const MissionAndVisionPage: NextPageWithLayout = () => (
  <>
    <SEOHead subTitle="Our Mission" />
    <Hero />
    <Virtues />
    <Team />
  </>
);

MissionAndVisionPage.getLayout = (page: ReactElement): ReactNode => <DarkLayout>{page}</DarkLayout>;

export default MissionAndVisionPage;
