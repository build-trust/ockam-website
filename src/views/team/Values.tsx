import { FunctionComponent } from 'react';
import { Container, Heading, Box, Text, SimpleGrid, Flex, Button, Icon } from '@chakra-ui/react';
import Link from 'next/link';

import TimeIcon from '@assets/icons/time.svg';
import BulbIcon from '@assets/icons/bulb.svg';
import BrainIcon from '@assets/icons/brain.svg';
import ClarityIcon from '@assets/icons/clarity.svg';
import GreenIconWrapper from '@components/GreenIconWrapper';
import { MISSION_AND_VISION_PATH } from '@consts/paths';

const VALUES = [
  {
    title: 'High-Performance',
    texts: [
      'Ockam is a team of doers, builders, shippers, and finishers. We created an environment where every individual is empowered to act, and trusted to be world-class in their role.',
    ],
    icon: BrainIcon,
  },
  {
    title: 'Simple',
    texts: [
      'The creation of simple solutions out of complex problems is the basis for our namesake, Ockam. Every idea, product, and procedure at Ockam is refined to be as simple as it should be.',
    ],
    icon: BulbIcon,
  },
  {
    title: 'Transparent',
    texts: [
      'We trust each other to be transparent, authentic and honest. As a globally-distributed, remote-first team transparent communication establishes our culture of trust.',
    ],
    icon: ClarityIcon,
  },
  {
    title: 'Time Efficient',
    texts: [
      'Time is the most valuable asset that we have. We trust each other to use our time with respect. We consider how our actions, and use of time, impact everyone else on The Team.',
    ],
    icon: TimeIcon,
  },
];

const DESCRIPTIONS = ['Our Value is what we believe. Our Virtues are what we do.'];

const Values: FunctionComponent = () => (
  <Container variant="section" py={{ base: 16, lg: 30 }}>
    <Flex
      w="full"
      pb={{ base: 16, lg: 14 }}
      mb={{ lg: 6 }}
      direction={{ base: 'column', lg: 'row' }}
      align={{ lg: 'center' }}
      justify="space-between"
    >
      <Box w="full">
        <Heading as="h2" size="h2" lineHeight={1.3}>
          Virtues of the Ockam Team
        </Heading>

        <Box mt={6} mb={{ base: 8, lg: 0 }}>
          {DESCRIPTIONS.map((text) => (
            <Text
              key={text}
              fontSize={{ lg: 'lg' }}
              lineHeight={{ base: 1.5, lg: 1.4 }}
              _notLast={{ mb: 2 }}
            >
              {text}
            </Text>
          ))}
        </Box>
      </Box>

      <Link href={`${MISSION_AND_VISION_PATH}#virtues`} passHref>
        <Button as="a" size="lg" colorScheme="avocado" color="black">
          Read more
        </Button>
      </Link>
    </Flex>

    <SimpleGrid
      columns={{ base: 1, md: 2, lg: 4 }}
      spacingY={{ base: 10, xl: 0 }}
      spacingX={{ md: 16, lg: 14, xl: 24 }}
      pb={{ base: 4, lg: 10 }}
    >
      {VALUES.map(({ icon, texts, title }) => (
        <Box key={title}>
          <GreenIconWrapper flex={1} mb={4}>
            <Icon as={icon} color="white" w={6} h={6} />
          </GreenIconWrapper>

          <Text fontSize="xl" fontWeight="bold" color="brand.900" my={2} lineHeight={1.3}>
            {title}
          </Text>

          {texts.map((text) => (
            <Text key={text} fontSize="sm" lineHeight={1.5} _notLast={{ mb: 2 }}>
              {text}
            </Text>
          ))}
        </Box>
      ))}
    </SimpleGrid>
  </Container>
);

export default Values;
