import { FC } from 'react';
import { Box, BoxProps, Container, Flex, Heading } from '@chakra-ui/react';

import GradientContainer from '@root/layouts/components/GradientContainer';

import Hero from './Hero';

type Props = {
  title: string;
  videoId: string;
} & BoxProps;

const Video: FC<Props> = ({ title, videoId, ...restProps }) => (
  <Box {...restProps}>
    <Box
      p={4}
      mb={4}
      boxShadow="2xl"
      borderRadius="15"
      borderStyle="none"
      background="white"
      position="relative"
      border="2px solid none"
      _hover={{
        boxShadow: 'xl',
      }}
    >
      <Flex direction="column">
        <Heading size="md" mb={2}>
          {title}
        </Heading>
        <iframe
          height={207}
          title={title}
          src={`https://www.youtube.com/embed/${videoId}`}
          allowFullScreen
        />
      </Flex>
    </Box>
  </Box>
);

const vids = [
  {
    title: 'What is Ockam?',
    id: 'psQCvYlQMNw',
  },
  {
    title: 'Networkless',
    id: 'L9ukFnqGOro',
  },
  {
    title: 'Virtual Adjacencies & Portals',
    id: 'Gh6153dX3dk',
  },
];
const Videos: FC = () => (
  <Flex
    flexDir="column"
    alignContent="center"
    justifyContent="center"
    mt={20}
    width="100%"
    id="videos"
    pb={20}
  >
    <GradientContainer flexDir="column" justifyContent="flex-start" pt={32} h1={14} h2={6}>
      <Hero
        text="Videos"
        subtext="Introductions to key concepts and how Ockam makes your systems secure-by-design"
        darkGradient
      />
    </GradientContainer>
    <Container variant="section" py={{ base: 0, lg: 0 }} maxW="container.max" px={0}>
      <Flex width="100%" justifyContent="space-evenly" flexWrap="wrap">
        {vids.map(({ title, id }) => (
          <Video title={title} videoId={id} maxW="400px" w="100%" mx="auto" />
        ))}
      </Flex>
    </Container>
  </Flex>
);

export default Videos;
