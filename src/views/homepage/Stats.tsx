import { FunctionComponent } from 'react';
import { chakra, Container, SimpleGrid, Box, Flex, Text, useTheme } from '@chakra-ui/react';
import Image from 'next/image';

import StarsImage from '@assets/images/stars.png';
import ContributorsImage from '@assets/images/contributors.png';
import DownloadsImage from '@assets/images/downloads.png';

type StatsProps = {
  stars: number;
  contributors: number;
  downloads: number;
};

const formatter = new Intl.NumberFormat('en-US', { notation: 'compact' });
const getValue = (fullValue: number): string | number =>
  fullValue.toString().length > 3 ? formatter.format(fullValue).slice(0, -1) : fullValue;
const getValueFormat = (fullValue: number): string | number =>
  fullValue.toString().length > 3
    ? formatter.format(fullValue).charAt(formatter.format(fullValue).length - 1)
    : '';

const Stats: FunctionComponent<StatsProps> = ({ stars, contributors, downloads }) => {
  const { gradients } = useTheme();

  const STATS = [
    {
      value: getValue(stars),
      valueFormat: getValueFormat(stars),
      title: 'Stars',
      icon: StarsImage,
    },
    {
      value: getValue(contributors),
      valueFormat: getValueFormat(contributors),
      title: 'OSS Contributors',
      icon: ContributorsImage,
      alignSelf: 'center',
    },
    {
      value: getValue(downloads),
      valueFormat: getValueFormat(downloads),
      title: 'Crate Downloads',
      icon: DownloadsImage,
      alignSelf: 'flex-end',
    },
  ];

  return (
    <Container variant="section" pt={{ base: 0, lg: 28 }} pb={{ base: 20, lg: 30 }}>
      <SimpleGrid columns={{ base: 1, lg: 3 }} w="full">
        {STATS.map((stat, index) => (
          <Flex
            key={stat.title}
            borderRightWidth={{ lg: index === 2 ? 0 : '1px' }}
            borderBottomWidth={{ base: index === 2 ? 0 : '1px', lg: 0 }}
            borderColor="gray.200"
            direction="column"
            pt={{ base: index === 0 ? 0 : 10, lg: 0 }}
            pb={{ base: index === 2 ? 0 : 10, lg: 0 }}
          >
            <Box alignSelf={{ base: 'center', lg: stat.alignSelf || 'flex-start' }}>
              <Box lineHeight={1.1}>
                <chakra.span fontSize="10xl" fontWeight="bold" bg={gradients.primary} bgClip="text">
                  {stat.value}
                </chakra.span>
                <chakra.span fontSize="5xl" color="gray.200" fontWeight="extrabold">
                  {stat.valueFormat}
                </chakra.span>
              </Box>

              <Flex align={{ lg: 'center' }} justify="space-between" w="full">
                <Text as="span" fontSize="xl" color="black" fontWeight="bold" mr={4}>
                  {stat.title}
                </Text>
                <Box>
                  <Image
                    src={stat.icon}
                    alt={`${stat.title} icons image`}
                    width={72}
                    height={40}
                    placeholder="blur"
                  />
                </Box>
              </Flex>
            </Box>
          </Flex>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Stats;
