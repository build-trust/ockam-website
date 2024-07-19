import { Box, Button, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import { ReactElement } from 'react';
import NextLink from 'next/link';
import Image from 'next/image';

import { OPEN_ROLES_PATH } from '@consts/paths';

import heroBgSrc from './assets/hero-background.svg?url';

const OpenRolesHero = (): ReactElement => (
  <Box
    textAlign="center"
    px={{ base: '0.75rem' }}
    py={{ base: '2.5rem', lg: '11.5rem' }}
    pb={{ base: '3.5rem', lg: '11.5rem' }}
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
          fontSize={{ base: '2.5rem', lg: '5.5rem' }}
          fontFamily="neutraface"
          fontWeight={{ base: 700 }}
        >
          Build For{' '}
          <Box as="span" color="brand.500">
            Builders
          </Box>
        </Heading>
        <Text
          color="inherit"
          fontSize={{ base: '1.125rem', lg: '1.25rem' }}
          fontWeight={{ base: 400 }}
          maxW="26.475rem"
          mx="auto"
        >
          Join our experienced Team to create world-class tools for developers
        </Text>
      </Stack>

      <Flex
        justify="center"
        flexDirection={{ base: 'column', lg: 'row' }}
        gap={{ base: '1rem' }}
        mb={{ base: '3rem', lg: '4rem' }}
      >
        <Button
          as={NextLink}
          href={OPEN_ROLES_PATH}
          variant="primary"
          h="3.5rem"
          w={{ base: '100%', lg: '12.5rem' }}
        >
          See Open Roles
        </Button>
      </Flex>

      <Flex
        maxW="37.0625rem"
        mx="auto"
        flexDirection={{ base: 'column', lg: 'row' }}
        gap={{ base: '1rem' }}
        alignItems={{ base: 'center', lg: 'flex-start' }}
        backdropFilter="blur(3px)"
        background="linear-gradient(109deg, rgba(5, 39, 75, 0.40) 8.18%, rgba(6, 53, 60, 0.40) 88.15%)"
        borderRadius={{ base: '0.75rem' }}
        border="1px solid"
        borderColor="rgba(116, 223, 255, 0.20)"
        p={{ base: '1rem', lg: '1.5rem' }}
      >
        <Flex
          overflow="hidden"
          background="white"
          borderRadius="0.4rem"
          w={{ base: '16.5rem', lg: '7rem' }}
          height={{ base: '21rem', lg: '9.5rem' }}
        >
          <Image src="/team/matthew-gregory.png" alt="Matthew Gregory" width={382} height={425} />
        </Flex>
        <Stack gap={{ base: '1.5rem' }}>
          <Stack
            lineHeight={{ base: '140%', lg: '100%' }}
            gap="0.75rem"
            fontSize={{ base: '1.125rem' }}
            fontWeight={{ base: 500, lg: 600 }}
            textAlign="left"
            color="white"
          >
            <Text lineHeight="inherit" fontSize="inherit" color="inherit" fontWeight="inherit">
              Everything the Team does is based on{' '}
              <Box as="span" color="brand.500">
                Trust
              </Box>
              .
            </Text>
            <Text lineHeight="inherit" fontSize="inherit" color="inherit" fontWeight="inherit">
              That’s why trust in the one-and-only-value.
            </Text>
          </Stack>
          <Stack textAlign="left" fontSize="1rem" color="white" gap={{ base: '0.25rem' }}>
            <Text lineHeight="inherit" fontSize="inherit" color="inherit" fontWeight={600}>
              Matthew Gregory
            </Text>
            <Text lineHeight="inherit" fontSize="inherit" color="inherit" fontWeight={400}>
              CEO of Ockam
            </Text>
          </Stack>
        </Stack>
      </Flex>
    </Box>
  </Box>
);

export default OpenRolesHero;
