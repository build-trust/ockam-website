import { ReactElement, ReactNode } from 'react';
import {
  Box,
  Flex,
  Heading,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from '@chakra-ui/react';

import { NextPageWithLayout } from '@typings/NextPageWithLayout';
import SEOHead from '@root/components/SEOHead';
import allPageMessageProps, { AllPageMessage } from '@root/utils/appPageMessage';
import DarkLayout from '@layouts/DarkLayout';
import PricingCard from '@views/pricing/components/PricingCard';
import {
  FOR_COMPANIES,
  FOR_DEVELOPERS,
} from '@views/pricing/components/PricingCard/consts/pricings';
import DescriptionText from '@views/pricing/components/DescriptionText';

const ogFeatures = ['🎉 Start free today', '🌱 Grow to any size', '🛟 Premium support & SLAs'].join(
  '||',
);
interface Props {
  allPageMessage: AllPageMessage | null;
}

const PricingPage: NextPageWithLayout<Props> = () => (
  <Box bg="brand.800">
    <SEOHead
      title="Pricing & Packages - Get started for free"
      description="Ockam's pricing is designed to get you started quickly, and support you as you grow in the future. You can even sign up through your preferred cloud marketplace to unify billing & leverage existing commitments."
      ogImageSrc={`/api/og?title=${encodeURIComponent(
        'Simple pricing that scales with you',
      )}&features=${encodeURIComponent(ogFeatures)}&template=nocheck`}
    />
    <Stack
      px={{ base: '0.75rem' }}
      gap={{ base: '0.75rem', lg: '0.5rem' }}
      pt={{ base: '2.5rem', lg: '5rem' }}
      pb={{ base: '3.75rem', lg: '4rem' }}
      textAlign={{ base: 'center' }}
      alignItems={{ base: 'center' }}
    >
      <Heading
        maxW={{ base: '15rem', lg: 'unset' }}
        lineHeight={{ base: '95%' }}
        color="white"
        fontFamily="neutraface"
        as="h1"
        fontSize={{ base: '2.5rem', lg: '5.5rem' }}
        fontWeight={{ base: 700 }}
      >
        Plans for any{' '}
        <Box as="span" color="avocado.200">
          sale
        </Box>
      </Heading>
      <Text fontSize={{ base: '1.125rem', lg: '1.25rem' }} color="white">
        Predictable pricing that scales when you need — no calculator needed
      </Text>
    </Stack>
    <Box mx="auto" px={{ base: '0.75rem' }} maxW="71rem" pb={{ base: '2.5rem', lg: '6.25rem' }}>
      <Tabs variant="ockam">
        <TabList mx={{ base: 'auto' }} maxW={{ base: '28rem' }}>
          <Tab>Developers</Tab>
          <Tab>Companies</Tab>
          <Tab>Enterprises</Tab>
        </TabList>
        <TabPanels>
          {/* Developers Panel */}
          <TabPanel>
            <Flex
              margin="auto"
              flexDirection="column"
              gap={{ base: '1.25rem', lg: '1.5rem' }}
              maxW="34rem"
            >
              <Flex gap={{ base: '0.75rem', lg: '1rem' }} flexWrap="nowrap" overflow="auto">
                {FOR_DEVELOPERS.map((cardProps) => (
                  <PricingCard {...cardProps} flexGrow={1} flexShrink={0} />
                ))}
              </Flex>
              <DescriptionText>
                <Box as="span" color="avocado.200">
                  The Developer editions
                </Box>{' '}
                of Ockam are intended to be used by individual developers, that are working on hobby
                projects, and not by companies. Support is via our community in Discord and GitHub,
                and does not come with an SLA. If you are using Portals for Mac you will need a
                developer edition license to use the application with your 14 day free trial.
              </DescriptionText>
            </Flex>
          </TabPanel>

          {/* Companies Panel */}
          <TabPanel>
            <Flex
              margin="auto"
              flexDirection="column"
              gap={{ base: '1.25rem', lg: '1.5rem' }}
              maxW="75rem"
            >
              <Flex gap={{ base: '0.75rem', lg: '1rem' }} flexWrap="nowrap" overflow="auto">
                {FOR_COMPANIES.map((cardProps) => (
                  <PricingCard
                    {...cardProps}
                    flexGrow={1}
                    flexShrink={{ base: 0, lg: 1 }}
                    width="16.5rem"
                  />
                ))}
              </Flex>
              <DescriptionText>
                <Box as="span" color="avocado.200">
                  Ockam&apos;s Company Editions
                </Box>{' '}
                are built for production workloads, with direct support from the Ockam team, and can
                elastically scale to your needs. This product is purchased through your cloud
                marketplace vendor, so you can start building today with your 14 day free trial.
              </DescriptionText>
            </Flex>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  </Box>
);

interface StaticProps {
  props: Props;
}

export async function getStaticProps(): Promise<StaticProps> {
  return {
    props: {
      allPageMessage: await allPageMessageProps,
    },
  };
}

PricingPage.getLayout = (page: ReactElement, pageProps?: Props): ReactNode => (
  <DarkLayout
    message={pageProps?.allPageMessage?.message}
    except={pageProps?.allPageMessage?.except}
  >
    {page}
  </DarkLayout>
);

export default PricingPage;
