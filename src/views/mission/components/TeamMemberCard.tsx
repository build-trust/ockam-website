import { FunctionComponent, useMemo } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';

import ImageWithPlaceholder from '@components/ImageWithPlaceholder';
import PlaceholderSilverImage from '@assets/images/placeholders/placeholder-team-member-silver.png';
import PlaceholderBlueImage from '@assets/images/placeholders/placeholder-team-member-blue.png';
import PlaceholderGreenImage from '@assets/images/placeholders/placeholder-team-member-green.png';
import getEmojiFlagFromCountryCode from '@utils/getEmojiFlagFromCountryCode';
import getRandomImage from '@utils/getRandomImage';

type TeamMemberCardProps = {
  name: string;
  surname: string;
  position: string;
  description: string;
  photo: string;
  country: string;
};

const IMG_SIZES = {
  w: '10.25rem',
  h: '14.3125rem',
};

const TeamMemberCard: FunctionComponent<TeamMemberCardProps> = ({
  name,
  surname,
  position,
  description,
  photo,
  country,
}) => {
  const placeholderImg = useMemo(
    () => getRandomImage([PlaceholderSilverImage, PlaceholderBlueImage, PlaceholderGreenImage]),
    []
  );

  return (
    <Flex
      position="relative"
      maxW="xl"
      w="full"
      borderRadius="base"
      margin="0 auto"
      overflow="hidden"
    >
      <Box w={{ base: '7.875rem', sm: IMG_SIZES.w }} h={IMG_SIZES.h} position="relative">
        <ImageWithPlaceholder
          src={`/team/${photo}`}
          alt={`${name} photo`}
          placeholderImg={placeholderImg}
          layout="fill"
          objectFit="cover"
        />
      </Box>

      <Box
        flex={1}
        px={{ base: 4, lg: 6 }}
        py={4}
        borderWidth="1px"
        border="gray.50"
        borderLeft={0}
        borderRightRadius="base"
        maxH={IMG_SIZES.h}
        overflowY="auto"
        position="relative"
      >
        <Box pr={8} mb={4}>
          <Text
            color="brand.900"
            fontWeight="bold"
            fontSize={{ md: 'lg' }}
            whiteSpace="pre-wrap"
            display="flex"
            flexDirection="column"
            lineHeight={1.2}
            mb={2}
          >
            <span>{name}</span>
            <span>{surname}</span>
          </Text>

          <Text fontSize="sm">{position}</Text>
        </Box>

        <Text fontSize="sm" fontWeight="regular">
          {description}
        </Text>

        <Box
          as="span"
          position="absolute"
          right={4}
          top={3}
          fontSize={{ base: '2.5xl', md: '4xl' }}
          lineHeight={1}
        >
          {getEmojiFlagFromCountryCode(country as string)}
        </Box>
      </Box>
    </Flex>
  );
};

export default TeamMemberCard;
