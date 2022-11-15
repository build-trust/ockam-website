import React, { FunctionComponent } from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

import { TGraphicsContent } from '@typings/StyleGuide';

import GraphicsCard from './components/GraphicsCard';

type GraphicsSectionProps = {
  graphics: TGraphicsContent[];
};

const GraphicsSection: FunctionComponent<GraphicsSectionProps> = ({ graphics }) => (
  <Box width="100%" marginBottom={16}>
    <Box marginBottom={14}>
      <Heading as="h3" size={{ base: 'lg', lg: 'xl' }} fontWeight="bold" marginBottom={4}>
        Graphics
      </Heading>
      <Text fontSize={{ lg: 'lg' }} fontWeight="regular">
        Images used in social media
      </Text>
    </Box>
    <Box
      display="flex"
      flexWrap="wrap"
      gap={8}
      justifyContent={{ base: 'center', md: 'flex-start' }}
    >
      {graphics.map((graphic: TGraphicsContent) => (
        <GraphicsCard key={graphic.image} {...graphic} />
      ))}
    </Box>
  </Box>
);

export default GraphicsSection;
