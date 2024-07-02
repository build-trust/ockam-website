import { Box, Stack } from '@chakra-ui/react';
import { ReactElement } from 'react';

import HeadingWithLogo from '../HeadingWithLogo';

import WhiteTile, { DescriptionText, TitleText, Image } from './WhiteTile';
import portalsSrc from './assets/portals.png';
import virtualSrc from './assets/virtual.png';

const TheMagic = (): ReactElement => (
  <Box
    pt={{ base: '3.75rem', lg: '7.5rem' }}
    px={{ base: '0.75rem' }}
    pb={{ base: '4rem', lg: '9rem' }}
    borderTopLeftRadius={{ base: '1rem' }}
    borderTopRadius={{ base: '1rem' }}
    background="white"
    position="relative"
    top="-1rem"
  >
    <HeadingWithLogo
      title="The Magic"
      description="That means you can stop exposing your data via reverse proxies"
      mb={{ base: '3.5rem', lg: '5rem' }}
      maxW={{ base: '33.1875rem' }}
      mx="auto"
    />
    <Stack
      gap={{ base: '1rem', lg: '2.5rem' }}
      borderRadius={{ base: '0.75rem', lg: '2.5rem' }}
      padding={{ base: '1rem', lg: '2.5rem' }}
      background="linear-gradient(142deg, rgba(79, 218, 184, 0.10) 4.44%, rgba(82, 199, 234, 0.10) 94.64%)"
      maxW={{ base: '68.375rem' }}
      mx={{ base: 'auto' }}
      backdropFilter="blur(10px)"
    >
      <WhiteTile flexDirection={{ base: 'column', lg: 'row-reverse' }}>
        <Image src={portalsSrc} alt="Portals visualization" />
        <Stack flex={1}>
          <TitleText>Portals</TitleText>
          <DescriptionText>
            Portals carry various{' '}
            <Box as="span" color="brand.500">
              protocols
            </Box>{' '}
            over end-to-end encrypted Ockam secure channels. They work at the{' '}
            <Box as="span" color="brand.500">
              application
            </Box>{' '}
            level and abstract away the setup, management, and security of the network layer. When
            application connectivity and security is decoupled from your network, you no longer need
            to wait for your IT team to give you permissions to build connections.
          </DescriptionText>
        </Stack>
      </WhiteTile>

      <WhiteTile flexDirection={{ base: 'column', lg: 'row' }}>
        <Image src={virtualSrc} alt="Virtual Adjacency visualization" />
        <Stack flex={1}>
          <TitleText>Virtual Adjacency</TitleText>
          <DescriptionText>
            The magical thing that Ockam{' '}
            <Box as="span" color="brand.500">
              unlocks
            </Box>{' '}
            via Portals is what we call Virtual Adjacency. The Portal connects your application to a
            remote application, and virtually pulls it through the{' '}
            <Box as="span" color="brand.500">
              portal
            </Box>{' '}
            so that it appears as though they sit next to each other on the same machine. That means
            applications are available to each other on localhost in a peer-to-peer way.
            <br />
            <br />
            What we don&apos;t have to do in this scenario is change any of the network layer
            configurations or really need to understand anything at the network layer at all. In
            this way we say Ockam is networkless.
          </DescriptionText>
        </Stack>
      </WhiteTile>
    </Stack>
  </Box>
);

export default TheMagic;
