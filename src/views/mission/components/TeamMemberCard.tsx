import { FunctionComponent } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';

import ImageWithPlaceholder from '@components/ImageWithPlaceholder';
import PlaceholderSilverImage from '@assets/images/placeholders/placeholder-silver.png';
import PlaceholderBlueImage from '@assets/images/placeholders/placeholder-blue.png';
import PlaceholderGreenImage from '@assets/images/placeholders/placeholder-green.png';
import getEmojiFlagFromCountryCode from '@utils/getEmojiFlagFromCountryCode';
import getRandomImage from '@utils/getRandomImage';

type TeamMemberCardProps = {
  name: string;
  position: string;
  description: string;
  photo: string;
  country: string;
};
const IMG_SIZES = {
  w: 164,
  h: 199,
};

const TeamMemberCard: FunctionComponent<TeamMemberCardProps> = ({
  name,
  position,
  description,
  photo,
  country,
}) => (
  <Flex position="relative" w="full" borderRadius="4px" margin="0 auto">
    <Box w={{ base: '126px', sm: `${IMG_SIZES.w}px` }} h={`${IMG_SIZES.h}px`} position="relative">
      <ImageWithPlaceholder
        src={`/team/${photo}`}
        placeholderImg={getRandomImage([
          PlaceholderSilverImage,
          PlaceholderBlueImage,
          PlaceholderGreenImage,
        ])}
        layout="fill"
        objectFit="cover"
      />
    </Box>

    <Box
      flex={1}
      px={{ base: 4, lg: 6 }}
      py={6}
      borderWidth="1px"
      border="gray.50"
      borderLeft={0}
      borderRightRadius="4px"
      maxH={`${IMG_SIZES.h}px`}
      overflowY="scroll"
    >
      <Box pr={8} mb={4}>
        <Text color="brand.900" fontWeight="bold" fontSize="lg" whiteSpace="pre-wrap">
          {name}
        </Text>

        <Text fontSize="sm">{position}</Text>
      </Box>

      <Text fontSize="sm" fontWeight="regular">
        {description}
      </Text>
    </Box>

    <Box as="span" position="absolute" right={2} top={1} fontSize="3xl" lineHeight={1}>
      {getEmojiFlagFromCountryCode(country as string)}
    </Box>
  </Flex>
);

export default TeamMemberCard;
