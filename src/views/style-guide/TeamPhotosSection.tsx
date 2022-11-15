import React, { FunctionComponent } from 'react';
import { Box, Heading, Text, UnorderedList, ListItem } from '@chakra-ui/react';

import { TeamPhotoSampleContent } from '@typings/StyleGuide';

import TeamPhotoSample from './components/TeamPhotoSample';

type TeamPhotosSectionProps = {
  samples: TeamPhotoSampleContent[];
};

const TeamPhotosSection: FunctionComponent<TeamPhotosSectionProps> = ({ samples }) => (
  <Box width="100%" mb={16}>
    <Box marginBottom={4}>
      <Heading as="h3" size={{ base: 'lg', lg: 'xl' }} fontWeight="bold" marginBottom={4}>
        Team Photos
      </Heading>
    </Box>
    <Box display="flex" flexWrap="wrap" justifyContent="space-between" mb={8}>
      <Box width={{ base: '100%', md: '45%' }}>
        <Text mb={4}>
          If it’s possible please add the photo on which you can show yourself from the chest
          upwards (like on the example). Look straight ahead. It would be great if the photo won’t
          be taken from the bottom or too high.
        </Text>
        <Text>
          You can take a photo by your phone. Today’s cameras can make great pictures. More
          important is good light, so you won’t stand in the shadow.
        </Text>
      </Box>
      <Box width={{ base: '100%', md: '45%' }}>
        <Text mb={4}>
          Photo should have no background, because the color will be added by default during
          uplouding to the page. To do this use one of these online tools:
        </Text>
        <UnorderedList color="gray.500" fontSize="md">
          <ListItem>Adobe Background Removal</ListItem>
          <ListItem>Fotoclip</ListItem>
          <ListItem>Remove Background</ListItem>
          <ListItem>Removal AI</ListItem>
        </UnorderedList>
      </Box>
    </Box>
    <Box display="flex" flexWrap="wrap" gap={14} justifyContent="space-between">
      {samples.map((sample: TeamPhotoSampleContent) => (
        <TeamPhotoSample key={sample.image} {...sample} />
      ))}
    </Box>
  </Box>
);

export default TeamPhotosSection;
