import { ReactElement, ReactNode } from 'react';
import { Box, Container, SimpleGrid, useBreakpointValue } from '@chakra-ui/react';

import { NextPageWithLayout } from '@typings/NextPageWithLayout';
import MainLayout from '@layouts/MainLayout';
import Hero from '@views/features/Hero';
import SEOHead from '@components/SEOHead';
import FeaturesMenu from '@views/features/FeaturesMenu';
import DevelopFirstSection from '@views/features/featureSections/DevelopFirstSection';
import CloudNativeSection from '@views/features/featureSections/CloudNativeSection';
import OpenSourceSection from '@views/features/featureSections/OpenSourceSection';
import ZeroThrustSection from '@views/features/featureSections/ZeroThrustSection';
import KeyManagementSection from '@views/features/featureSections/KeyManagementSection';
import ByoAutoEngine from '@views/features/featureSections/ByoAutoEngine';

const FeaturesPage: NextPageWithLayout = () => {
  const showFeatureMenu = useBreakpointValue({
    base: false,
    xl: true,
  })
  return (
    <Box pt={{ base: 10, lg: 20 }}>
      <SEOHead subTitle="Features" />
      <Hero />
      <Container variant="section" width="full" mt={18}>
        <SimpleGrid gap={18} templateColumns={{ base: '1fr', xl: '280px 1fr' }} alignItems="flex-start">
          {showFeatureMenu && <FeaturesMenu />}
          <Box>
            <DevelopFirstSection />
            <CloudNativeSection />
            <OpenSourceSection />
            <ZeroThrustSection />
            <KeyManagementSection />
            <ByoAutoEngine />
          </Box>
        </SimpleGrid>


      </Container>
    </Box>
  )
};

FeaturesPage.getLayout = (page: ReactElement): ReactNode => <MainLayout>{page}</MainLayout>;

export default FeaturesPage;
