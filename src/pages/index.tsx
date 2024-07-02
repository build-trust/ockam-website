import React, { ReactElement, ReactNode } from 'react';

import { NextPageWithLayout } from '@typings/NextPageWithLayout';
import { AllPageMessage } from '@root/components/AllPageNotice';
import DarkLayout from '@layouts/DarkLayout';
import allPageMessageProps from '@utils/appPageMessage';
import BuildTrustHero from '@views/homepage/components/BuildTrustHero';
import TheMagic from '@views/homepage/components/TheMagic';
import UseCases from '@views/homepage/components/UseCases';
import Videos from '@views/homepage/components/Videos';

interface HomepageProps {
  allPageMessage?: AllPageMessage | null;
}

const HomePage: NextPageWithLayout<HomepageProps> = () => (
  <>
    <BuildTrustHero />
    <TheMagic />
    <UseCases />
    <Videos />
  </>
);

export async function getStaticProps(): Promise<{ props: HomepageProps }> {
  return {
    props: {
      allPageMessage: await allPageMessageProps,
    },
  };
}

HomePage.getLayout = (page: ReactElement, pageProps?: HomepageProps): ReactNode => (
  <DarkLayout
    except={pageProps?.allPageMessage?.except}
    message={pageProps?.allPageMessage?.message}
  >
    {page}
  </DarkLayout>
);

export default HomePage;
