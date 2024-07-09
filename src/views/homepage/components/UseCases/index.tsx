import { Box, Stack } from '@chakra-ui/react';
import { ReactElement } from 'react';
import NextLink from 'next/link';

import {
  KAFKA_PATH,
  PRIVATE_CONNECTIVITY_PATH,
  SAAS_PLATFORMS_PATH,
  USE_CASES_ID,
} from '@consts/paths';

import HeadingWithLogo from '../HeadingWithLogo';

import distributedSrc from './assets/distributed.png';
import secureKafkaSrc from './assets/secure-kafka.png';
import connectSaaSSrc from './assets/connect-saas.png';
import useCasesBackgroundSrc from './assets/use-cases-background.svg?url';
import WhiteTile, { DescriptionText, Image, LearnMoreLink, TitleText } from './WhiteTile';

const UseCases = (): ReactElement => (
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
          To orchistrate end-to-end encryption
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
      borderRadius={{ base: '0.75rem', lg: '2.5rem' }}
      padding={{ base: '1rem', lg: '2.5rem' }}
      background="rgba(255, 255, 255, 0.20)"
      maxW={{ base: '61.25rem' }}
      mx={{ base: 'auto' }}
      backdropFilter="blur(10px)"
    >
      <WhiteTile as={NextLink} href={PRIVATE_CONNECTIVITY_PATH}>
        <Image src={distributedSrc} alt="Distributed Data visualization" />
        <Stack gap={{ base: '1rem' }}>
          <TitleText>Access Distributed Data</TitleText>
          <DescriptionText mb={{ base: '1rem', lg: '2.5rem' }}>
            Create secure access to private databases - from any application, anywhere!
            <br />
            Stop exposing private data to the public internet with service ports. Start isolating
            data exposure to the endpoint of your application.
          </DescriptionText>
          <LearnMoreLink />
        </Stack>
      </WhiteTile>

      <WhiteTile as={NextLink} href={KAFKA_PATH}>
        <Image src={secureKafkaSrc} alt="Secure Kafka Streams visualization" />
        <Stack gap={{ base: '1rem' }}>
          <TitleText>Secure Kafka Streams</TitleText>
          <DescriptionText mb={{ base: '1rem', lg: '2.5rem' }}>
            Guarantee data authenticity and integrity from producers all-the-way to consumers.
            <br />
            Stop exposing the broker to your data streams. Start encrypting data-in-motion through
            Kafka.
          </DescriptionText>
          <LearnMoreLink />
        </Stack>
      </WhiteTile>

      <WhiteTile as={NextLink} href={SAAS_PLATFORMS_PATH}>
        <Image src={connectSaaSSrc} alt="Connect SaaS visualization" />
        <Stack gap={{ base: '1rem' }}>
          <TitleText>Connect SaaS to On-Prem systems</TitleText>
          <DescriptionText mb={{ base: '1rem', lg: '2.5rem' }}>
            Unlock new capabilities with enterprise customers. Stop asking your customers to make
            network changes. Integrate into your existing platform within minutes.
          </DescriptionText>
          <LearnMoreLink />
        </Stack>
      </WhiteTile>
    </Stack>
  </Box>
);

export default UseCases;
