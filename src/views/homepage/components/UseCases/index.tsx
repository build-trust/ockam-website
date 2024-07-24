import { Box, Stack } from '@chakra-ui/react';
import { ReactElement } from 'react';
import NextLink from 'next/link';

import {
  KAFKA_PATH,
  PRIVATE_CONNECTIVITY_PATH,
  SAAS_PLATFORMS_PATH,
  USE_CASES_ID,
} from '@consts/paths';
import ExcalidrawAnimation from '@root/components/ExcalidrawAnimation';

import AnimatedText from '../AnimatedText';
import HeadingWithLogo from '../HeadingWithLogo';
import useCycleStrings from '../AnimatedText/hooks/useCycleStrings';

import useCasesBackgroundSrc from './assets/use-cases-background.svg?url';
import WhiteTile, { DescriptionText, LearnMoreLink, TitleText } from './WhiteTile';

const casesWords = [
  'key management',
  'credential management',
  'authorization policy enforcement',
  'end-to-end encryption',
  'mutual authentication',
];
const UseCases = (): ReactElement => {
  const [casesWord] = useCycleStrings(casesWords);

  return (
    <Box
      id={USE_CASES_ID}
      px={{ base: '0.75rem' }}
      pb={{ base: '5.5rem', lg: '12.5rem' }}
      bgImage={`url(${useCasesBackgroundSrc.src})`}
      bgRepeat="no-repeat"
      bgPosition="center bottom"
    >
      <HeadingWithLogo
        title={
          <>
            <Box as="span" color="brand.500">
              Use
            </Box>{' '}
            Cases
          </>
        }
        description={
          <>
            To orchestrate <br />
            <AnimatedText as="span" color="brand.500" fontWeight={{ base: 700 }}>
              {casesWord}
            </AnimatedText>
            <br />
            at massive scale
          </>
        }
        mb={{ base: '2.5rem', lg: '5rem' }}
        maxW={{ base: '33.1875rem' }}
        mx="auto"
      />
      <Stack
        gap={{ base: '1rem' }}
        borderRadius={{ base: '0.75rem' }}
        padding={{ base: '1rem', lg: '2.5rem' }}
        background="rgba(255, 255, 255, 0.20)"
        maxW={{ base: '61.25rem' }}
        mx={{ base: 'auto' }}
        backdropFilter="blur(10px)"
      >
        <WhiteTile as={NextLink} href={PRIVATE_CONNECTIVITY_PATH}>
          <Stack gap={{ base: '1rem' }} w="100%" flexBasis={0} flexGrow={1}>
            <ExcalidrawAnimation src="app-level" animate={false} aspect="width" />
          </Stack>
          <Stack gap={{ base: '1rem' }} flexBasis={0} flexGrow={1}>
            <TitleText>Access Distributed Data</TitleText>
            <DescriptionText mb={{ base: '1rem', lg: '2.5rem' }}>
              Create secure access to private databases - from any application, anywhere!
              <br />
              <br />
              Stop exposing private data to the public internet with service ports.
              <br />
              <br />
              Start isolating data exposure to the endpoint of your application.
            </DescriptionText>
            <LearnMoreLink />
          </Stack>
        </WhiteTile>

        <WhiteTile as={NextLink} href={KAFKA_PATH}>
          <Stack gap={{ base: '1rem' }} w="100%" flexBasis={0} flexGrow={1}>
            <ExcalidrawAnimation src="kafka-encrypted-ockam" animate={false} aspect="width" />
          </Stack>
          <Stack gap={{ base: '1rem' }} flexBasis={0} flexGrow={1}>
            <TitleText>Secure Kafka Streams</TitleText>
            <DescriptionText mb={{ base: '1rem', lg: '2.5rem' }}>
              Guarantee data authenticity and integrity from producers all-the-way to consumers.
              <br />
              <br />
              Stop exposing the broker to your data streams. 
              <br />
              <br />
              Start encrypting data-in-motion through
              Kafka.
            </DescriptionText>
            <LearnMoreLink />
          </Stack>
        </WhiteTile>

        <WhiteTile as={NextLink} href={SAAS_PLATFORMS_PATH}>
          <Stack gap={{ base: '1rem' }} w="100%" flexBasis={0} flexGrow={1}>
            <ExcalidrawAnimation src="integrate-customer-systems" animate={false} aspect="width" />
          </Stack>
          <Stack gap={{ base: '1rem' }} flexBasis={0} flexGrow={1}>
            <TitleText>Connect Products to Private systems</TitleText>
            <DescriptionText mb={{ base: '1rem', lg: '2.5rem' }}>
              Create security product features for your enterprise customers. 
              <br />
              <br />
              Stop asking your customers to make network configuration changes. 
              <br />
              <br />
              Build Ockam into your existing products - in minutes.
            </DescriptionText>
            <LearnMoreLink />
          </Stack>
        </WhiteTile>
      </Stack>
    </Box>
  );
};

export default UseCases;
