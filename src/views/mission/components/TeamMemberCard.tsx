import { FunctionComponent, useMemo } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import Flag from 'react-world-flags';

import ImageWithPlaceholder from '@components/ImageWithPlaceholder';
import PlaceholderSilverImage from '@assets/images/placeholders/placeholder-team-member-silver.png';
import PlaceholderBlueImage from '@assets/images/placeholders/placeholder-team-member-blue.png';
import PlaceholderGreenImage from '@assets/images/placeholders/placeholder-team-member-green.png';
import getRandomImage from '@utils/getRandomImage';

type TeamMemberCardProps = {
  name: string;
  surname: string;
  position: string;
  description: string;
  photo: string;
  country: string;
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
    [],
  );

  return (
    <Flex
      w="full"
      p="1rem"
      border="1px solid"
      borderColor="gray.200"
      borderRadius="0.75rem"
      gap={{ base: '1rem' }}
    >
      <Box
        h="150px"
        w="111px"
        borderRadius="0.75rem"
        overflow="hidden"
        position="relative"
        bg="linear-gradient(0deg, rgba(255, 224, 194, 0.20) 9.03%, rgba(122, 174, 252, 0.20) 44.82%, rgba(184, 193, 252, 0.20) 61.78%, rgba(210, 212, 212, 0.20) 98.29%)"
      >
        <ImageWithPlaceholder
          src={`/team/${photo}`}
          alt={`${name} photo`}
          placeholderImg={placeholderImg}
          layout="fill"
        />
      </Box>

      <Box flex={1} position="relative">
        <Text
          color="brand.900"
          fontWeight={700}
          fontSize={{ base: '1rem' }}
          mb={{ base: '0.25rem' }}
        >
          {name} {surname}
        </Text>

        <Text fontWeight={500} fontSize={{ base: '1rem' }} mb={{ base: '0.5rem' }} lineHeight={1.5}>
          {position}
        </Text>

        <Box
          display="block"
          as="span"
          position={{ base: 'static', lg: 'absolute' }}
          mb={{ base: '0.5rem', lg: 0 }}
          right="0"
          top="0.25rem"
          height="1rem"
          width="1.5rem"
        >
          <Flag code={country} />
        </Box>

        <Text fontSize={{ base: '0.875rem' }} fontWeight={400}>
          {description}
        </Text>
      </Box>
    </Flex>
  );
};

export default TeamMemberCard;
