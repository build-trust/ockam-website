import { ReactElement, ReactNode } from 'react';
import { Box } from '@chakra-ui/react';

import { Packages } from '@root/views/homepage';
import { NextPageWithLayout } from '@typings/NextPageWithLayout';
import { MainLayout } from '@root/layouts';
import SEOHead from '@root/components/SEOHead';

const ogFeatures = ['🎉 Start free today', '🌱 Grow to any size', '🛟 Premium support & SLAs'].join(
  '||'
);
const PricingPage: NextPageWithLayout = () => (
  <Box pt={{ base: 10, lg: 10 }}>
    <SEOHead
      title="Pricing & Packages - Get started for free"
      description="Ockam's pricing is designed to get you started quickly, and support you as you grow in the future. You can even sign up through your preferred cloud marketplace to unify billing & leverage existing commitments."
      ogImageSrc={`/api/og?title=${encodeURIComponent(
        'Simple pricing that scales with you'
      )}&features=${encodeURIComponent(ogFeatures)}&template=nocheck`}
    />

    <Packages />
  </Box>
);

PricingPage.getLayout = (page: ReactElement): ReactNode => (
  <MainLayout gradient={['#4FDAB8', '#52C7EA']}>{page}</MainLayout>
);

export default PricingPage;
