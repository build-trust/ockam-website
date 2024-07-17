import { Box, Flex, Stack, Text } from '@chakra-ui/react';
import { ReactElement } from 'react';

import HeadingWithLogo from '../HeadingWithLogo';

import videosBackgroundSrc from './assets/videos-background.svg?url';

const YOUTUBE_VIDEOS = [
  {
    title: 'What is Ockam?',
    description: 'The three things you need to know about Ockam.',
    id: 'psQCvYlQMNw',
  },
  {
    title: 'Networkless',
    description: "The magic that means you don't need to change the network.",
    id: 'L9ukFnqGOro',
  },
  {
    title: 'Virtual Adjacencies & Portals',
    description: "Make remote services appear as though they're local with Portals.",
    id: 'Gh6153dX3dk',
  },
];

const Videos = (): ReactElement => (
  <Box
    pt={{ base: '3.75rem', lg: '7.5rem' }}
    px={{ base: '0.75rem' }}
    pb={{ base: '5rem', lg: '12.5rem' }}
    bgImage={`url(${videosBackgroundSrc.src})`}
    bgColor="brand.800"
    bgRepeat="no-repeat"
    bgPosition="center bottom"
  >
    <HeadingWithLogo
      title={
        <Box as="span" color="white">
          Videos
        </Box>
      }
      description={
        <Box as="span" color="white">
          Introductions to key concepts and how Ockam makes your systems secure-by-design
        </Box>
      }
      mb={{ base: '3.5rem' }}
      maxW={{ base: '33.1875rem' }}
      mx="auto"
    />
    <Flex
      flexDirection={{ base: 'column', lg: 'row' }}
      gap={{ base: '1rem', lg: '1.5rem' }}
      borderRadius={{ base: '0.75rem' }}
      padding={{ base: '1rem', lg: '2.5rem' }}
      background="white"
      maxW={{ base: '64.25rem' }}
      mx={{ base: 'auto' }}
      backdropFilter="blur(10px)"
    >
      {YOUTUBE_VIDEOS.map(({ id, title, description }) => (
        <Stack
          key={id}
          flex={1}
          padding={{ base: '0.5rem', lg: '1rem' }}
          borderRadius={{ base: '0.75rem' }}
          gap={{ base: '1rem' }}
          border="1px solid"
          borderColor="gray.200"
        >
          <Box
            as="iframe"
            title={title}
            width={{ base: '100%' }}
            src={`https://www.youtube.com/embed/${id}`}
            borderRadius={{ base: '0.75rem' }}
            allowFullScreen
            mx="auto"
            maxW={{ base: 'fit-content' }}
          />
          <Text
            color="brand.800"
            fontWeight={{ base: 700 }}
            fontSize={{ base: '1.125rem' }}
            textAlign={{ base: 'center', lg: 'left' }}
          >
            {title}
          </Text>
          <Text color="gray.500" fontWeight={{ base: 500 }} fontSize={{ base: '1rem' }}>
            {description}
          </Text>
        </Stack>
      ))}
    </Flex>
  </Box>
);

export default Videos;
