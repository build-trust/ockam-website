import React, { FunctionComponent } from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

import { TTypographyContent } from '@typings/StyleGuide';

import FontCard from './components/FontCard';

type TypographySectionProps = {
  typography: TTypographyContent[];
};

const TypographySection: FunctionComponent<TypographySectionProps> = ({ typography }) => (
  <Box width="100%" marginBottom={16}>
    <Box marginBottom={14}>
      <Heading as="h3" size={{ base: 'lg', lg: 'xl' }} fontWeight="bold" marginBottom={4}>
        Typography system
      </Heading>
      <Text fontSize={{ lg: 'lg' }} fontWeight="regular" maxWidth="580px">
        We’ve got two systems - for all pages and separate for the blog.
      </Text>
    </Box>
    <Box>
      {typography.map((data) => (
        <FontCard key={data.name} {...data} />
      ))}
    </Box>
  </Box>
);

export default TypographySection;
