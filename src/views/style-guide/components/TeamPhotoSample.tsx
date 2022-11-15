import { FunctionComponent } from 'react';
import { Box, Text, UnorderedList, ListItem } from '@chakra-ui/react';
import Image from 'next/image';

import { TeamPhotoSampleContent } from '@root/typings/StyleGuide';

const TeamPhotoSampleCard: FunctionComponent<TeamPhotoSampleContent> = ({
  image,
  heading,
  text,
  bulletPoints,
}) => (
  <Box minWidth={20} width={{ base: '100%', md: '45%' }} display="flex">
    <Box minWidth="160px" height="220px" position="relative" mr={4}>
      <Image
        layout="fill"
        // eslint-disable-next-line import/no-dynamic-require, global-require
        src={require(`@assets/images/teamPhotos/${image}.png`)}
        alt="Dan Abramov"
      />
    </Box>
    <Box>
      <Text color="brand.900" fontWeight="bold" fontSize="lg" marginBottom={3}>
        {heading}
      </Text>
      <Text color="gray.500" fontSize="sm">
        {text}
      </Text>
      <Box display="flex" flexWrap="wrap" mt={2} ml={2} justifyContent="space-between">
        <UnorderedList>
          {bulletPoints.map((bp: string, i: number) => (
            <ListItem key={`${bp}-${i + 1}`} color="gray.500" fontSize="sm">
              {bp}
            </ListItem>
          ))}
        </UnorderedList>
      </Box>
    </Box>
  </Box>
);

export default TeamPhotoSampleCard;
