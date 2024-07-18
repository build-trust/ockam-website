import { Box, Button, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import { ReactElement } from 'react';
import NextLink from 'next/link';

import { CONTACT_PAGE_PATH, SIGNUP_PATH } from '@consts/paths';

import AnimatedText from '../AnimatedText';
import useCycleStrings from '../AnimatedText/hooks/useCycleStrings';

import heroBgSrc from './assets/hero-background.svg?url';
import ShadowBox from './ShadowBox';

const heroWords = ['application', 'database', 'repo', 'agent', 'SaaS', 'datalake'];
const networklessWords = [
  'sysadmins',
  'implicit trust in your network',
  'firewalls',
  'VPNs',
  'reverse proxies',
  'certificate management',
  'IP lists',
  'IT backlogs',
];
const secureWords = ['zero trust', 'audited', 'point-to-point', 'open source'];

const BuildTrustHero = (): ReactElement => {
  const [heroWord] = useCycleStrings(heroWords);
  const [networkWord] = useCycleStrings(networklessWords);
  const [secureWord] = useCycleStrings(secureWords);

  return (
    <Box
      textAlign="center"
      px={{ base: '0.75rem' }}
      pt={{ base: '2.5rem', lg: '11.5rem' }}
      pb={{ base: '3.75rem', lg: '12rem' }}
      // Chakra issue with multiple backgrounds, the empty comment prefix is needed.
      // https://github.com/chakra-ui/chakra-ui/issues/7548#issuecomment-1684034030
      bgImage={`/**/url(${heroBgSrc.src}), linear-gradient(#0D1721, #162535)`}
      bgPosition="center bottom"
      bgRepeat="no-repeat"
      backgroundSize={{ base: 'cover', lg: 'initial' }}
    >
      <Box maxW={{ base: '40rem', lg: 'initial' }} mx="auto">
        <Stack
          gap={{ base: '0.75rem', lg: '0.5rem' }}
          mb={{ base: '2rem', lg: '2.5rem' }}
          color="white"
        >
          <Heading
            lineHeight={{ base: 'initial', lg: '95%' }}
            color="inherit"
            as="h1"
            fontSize={{ base: '2.5rem', lg: '8.75rem' }}
            fontFamily="neutraface"
            fontWeight={{ base: 700 }}
          >
            Build{' '}
            <Box as="span" color="brand.500">
              Trust
            </Box>
          </Heading>
          <Text
            color="inherit"
            fontFamily="neutraface"
            fontSize={{ base: '1.375rem', lg: '1.75rem' }}
            fontWeight={{ base: 500 }}
          >
            Between your platform
            <br />
            and every
            <br />
            <AnimatedText as="span" color="brand.500" fontWeight={{ base: 700 }}>
              {heroWord}
            </AnimatedText>
            <br />
            everywhere.
          </Text>
        </Stack>

        <Flex
          justify="center"
          flexDirection={{ base: 'column', lg: 'row' }}
          gap={{ base: '1rem' }}
          mb={{ base: '3rem', lg: '16.25rem' }}
        >
          <Button
            as={NextLink}
            href={SIGNUP_PATH}
            variant="primary"
            h="3.5rem"
            w={{ base: '100%', lg: '12.5rem' }}
          >
            Get started
          </Button>
          <Button
            as={NextLink}
            href={CONTACT_PAGE_PATH}
            w={{ base: '100%', lg: '12.5rem' }}
            variant="ghost"
            h="3.5rem"
          >
            Contact us
          </Button>
        </Flex>

        <Stack gap={{ base: '1rem', lg: '16.25rem' }} alignItems={{ base: 'center' }}>
          <ShadowBox
            text="Networkless connectivity"
            maxW={{ base: '17rem', lg: '24.675rem' }}
            description={
              <>
                Ockam works at
                <br />
                application layer.
                <br />
                When application security is
                <br />
                decoupled from your network,
                <br />
                you can skip the pain of
                <br />
                <AnimatedText as="span" color="brand.500" fontWeight={{ base: 700 }}>
                  {networkWord}
                </AnimatedText>
                .
              </>
            }
          />
          <ShadowBox
            text="Secure-by-design"
            maxW={{ base: '14.5rem', lg: '22.1875rem' }}
            description={
              <>
                Ockam is
                <br />
                <AnimatedText as="span" color="brand.500" fontWeight={{ base: 700 }}>
                  {secureWord}
                </AnimatedText>
                .
                <br />
                So your application
                <br />
                can be secure too.
              </>
            }
          />
        </Stack>
      </Box>
    </Box>
  );
};

export default BuildTrustHero;
