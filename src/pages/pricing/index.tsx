import { ReactElement, ReactNode } from 'react';
import { Box } from '@chakra-ui/react';

import { Packages } from '@root/views/homepage';
import { NextPageWithLayout } from '@typings/NextPageWithLayout';
import { MainLayout } from '@root/layouts';
import SEOHead from '@root/components/SEOHead';

const PricingPage: NextPageWithLayout = () => (
  <Box pt={{ base: 10, lg: 10 }}>
    <SEOHead title="Pricing & Packages - Get started for free" />
    <Packages />
  </Box>
);

PricingPage.getLayout = (page: ReactElement): ReactNode => <MainLayout>{page}</MainLayout>;

export default PricingPage;
