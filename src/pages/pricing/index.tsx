import { ReactElement, ReactNode } from 'react';
import { Box, Heading } from '@chakra-ui/react';

import { Packages } from '@root/views/homepage';
import { NextPageWithLayout } from '@typings/NextPageWithLayout';
import { MainLayout } from '@root/layouts';
import SEOHead from '@root/components/SEOHead';
import GradientContainer from '@root/layouts/components/GradientContainer';

const ogFeatures = ['🎉 Start free today', '🌱 Grow to any size', '🛟 Premium support & SLAs'].join(
  '||',
);
const PricingPage: NextPageWithLayout = () => (
  <Box pt={0}>
    <SEOHead
      title="Pricing & Packages - Get started for free"
      description="Ockam's pricing is designed to get you started quickly, and support you as you grow in the future. You can even sign up through your preferred cloud marketplace to unify billing & leverage existing commitments."
      ogImageSrc={`/api/og?title=${encodeURIComponent(
        'Simple pricing that scales with you',
      )}&features=${encodeURIComponent(ogFeatures)}&template=nocheck`}
    />
    <GradientContainer
      bottomOnly
      pt={{ base: '15em' }}
      flexDir="column"
      style={{ justifyContent: 'flex-start' }}
    >
      <Heading
        as="h1"
        fontWeight="extrabold"
        textAlign="center"
        color="white"
        size={{ base: '2xl', lg: '3xl' }}
        letterSpacing={{ base: '-1.5px', lg: '-1.5px' }}
        lineHeight={{ base: 1, lg: 1.5 }}
      >
        Plans for any scale
      </Heading>
      <Heading
        as="h2"
        textAlign="center"
        fontWeight="medium"
        color="rgba(255, 255, 255, 0.8)"
        size={{ base: 'lg', lg: 'xl' }}
        letterSpacing={{ base: '-1.7px', md: '-2px', lg: '-1.7px' }}
        lineHeight={{ base: 1, md: 1.2, lg: 1 }}
        mt={{ base: 5, lg: 1 }}
        mx="20"
        mb="20"
      >
        Predictable pricing that scales when you need &mdash; no calculator needed
      </Heading>
    </GradientContainer>
    <Packages />
  </Box>
);

PricingPage.getLayout = (page: ReactElement): ReactNode => (
  <MainLayout hasGradient>{page}</MainLayout>
);

export default PricingPage;
