import { ReactElement, ReactNode } from 'react';
import { Box, Heading, Stack, Text } from '@chakra-ui/react';

import { NextPageWithLayout } from '@typings/NextPageWithLayout';
import SEOHead from '@root/components/SEOHead';
import allPageMessageProps, { AllPageMessage } from '@root/utils/appPageMessage';
import DarkLayout from '@layouts/DarkLayout';

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
