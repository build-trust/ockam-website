import React, { FunctionComponent } from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

import { TColorsContent } from '@typings/StyleGuide';

import ColorContent from './components/ColorContent';

type OurColorsSectionProps = {
  colors: TColorsContent[];
};

const OurColorsSection: FunctionComponent<OurColorsSectionProps> = ({ colors }) => (
  <Box width="100%" marginBottom={16}>
    <Box marginBottom={14}>
      <Heading as="h3" size={{ base: 'lg', lg: 'xl' }} fontWeight="bold" marginBottom={4}>
        Our colors
      </Heading>
      <Text fontSize={{ lg: 'lg' }} fontWeight="regular" maxWidth="580px">
        These color system should be used in all web and social assets. Mixing Ockam with other
        colors is forbidden.
      </Text>
    </Box>
    <Box display="flex" flexWrap="wrap" gap={10} justifyContent="flex-start">
      {colors.map((color: TColorsContent) => (
        <ColorContent key={color.heading} {...color} />
      ))}
    </Box>
  </Box>
);

export default OurColorsSection;
