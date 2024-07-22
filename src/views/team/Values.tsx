import { FunctionComponent } from 'react';
import { Heading, Box, Text, Flex, Button, Icon, Stack, Center } from '@chakra-ui/react';
import Link from 'next/link';

import TimeIcon from '@assets/icons/time.svg';
import BulbIcon from '@assets/icons/bulb.svg';
import BrainIcon from '@assets/icons/brain.svg';
import ClarityIcon from '@assets/icons/clarity.svg';
import { MISSION_AND_VISION_PATH_VIRTUES_SECTION } from '@consts/paths';

const VALUES = [
  {
    title: 'High-Performance',
    texts: [
      'Ockam is a team of doers, builders, shippers, and finishers. We’ve created an environment where every individual is empowered to act, and trusted to be world-class in their role.',
    ],
    icon: BrainIcon,
  },
  {
    title: 'Simple',
    texts: [
      'The creation of simple solutions out of complex problems is the basis for our namesake, Ockam. Every idea, product, and procedure at Ockam should be refined to make it as simple as it should be.',
    ],
    icon: BulbIcon,
  },
  {
    title: 'Transparent',
    texts: [
      'We trust each other to be transparent,authentic and honest. As a globally distributed remote-first team transparent communications establishes our culture of trust.',
    ],
    icon: ClarityIcon,
  },
  {
    title: 'Time Efficient',
    texts: [
      'Time is the most valuable asset that we have. We trust each other to use our time with respect. We consider how our actions and use of time impact everyone else on The Team.',
    ],
    icon: TimeIcon,
  },
];

const DESCRIPTIONS = ['Values are what we believe - Virtues are what we do'];

const Values: FunctionComponent = () => (
  <Box
    borderTopLeftRadius={{ base: '1rem' }}
    borderTopRadius={{ base: '1rem' }}
    background="white"
    position="relative"
    top="-1rem"
    pt={{ base: '3.75rem', lg: '7.5rem' }}
    pb={{ base: '7.5rem', lg: '10rem' }}
    px={{ base: '0.5rem' }}
  >
    <Box maxW="68.375rem" mx="auto">
      <Flex
        pb={{ base: '2.5rem' }}
        w="full"
        direction={{ base: 'column', lg: 'row' }}
        align={{ lg: 'center' }}
        justify="space-between"
        borderBottom="1px solid"
        borderColor="gray.100"
        mb={{ base: '2.5rem' }}
      >
        <Stack
          textAlign={{ base: 'center', lg: 'left' }}
          mb={{ base: '2rem', lg: 0 }}
          w="full"
          gap={{ base: '0.5rem', lg: '1.5rem' }}
        >
          <Heading
            as="h2"
            size="h2"
            lineHeight={1.3}
            fontFamily="neutraface"
            fontSize={{ base: '2.5rem' }}
            fontWeight={{ base: 700 }}
          >
            Virtues of the Ockam Team
          </Heading>

          <Box>
            {DESCRIPTIONS.map((text) => (
              <Text
                key={text}
                fontSize={{ base: '1.125rem' }}
                fontWeight={{ base: 500 }}
                lineHeight={{ base: 1.4 }}
              >
                {text}
              </Text>
            ))}
          </Box>
        </Stack>

        <Button
          h="3.5rem"
          variant="primary"
          alignSelf={{ base: 'center', lg: 'flex-end' }}
          as={Link}
          href={MISSION_AND_VISION_PATH_VIRTUES_SECTION}
        >
          Read more
        </Button>
      </Flex>

      <Flex
        flexDirection={{ base: 'column', lg: 'row' }}
        justifyContent={{ base: 'space-between' }}
      >
        {VALUES.map(({ icon, texts, title }) => (
          <Box key={title} maxW={{ base: 'auto', lg: '13.5rem' }}>
            <Center w={10} h={10} bgColor="#74DFFF26" borderRadius="base" mb={{ base: '1rem' }}>
              <Icon as={icon} color="brand.500" w={6} h={6} />
            </Center>
            <Text
              fontFamily="neutraface"
              fontWeight={{ base: 700 }}
              fontSize={{ base: '1.25rem' }}
              color="brand.900"
              mb={{ base: '0.5rem' }}
              lineHeight={1.3}
            >
              {title}
            </Text>

            {texts.map((text) => (
              <Text
                key={text}
                color="gray.500"
                fontWeight={{ base: 500 }}
                fontSize={{ base: '0.875rem' }}
                lineHeight={1.5}
                mb={{ base: '1rem' }}
              >
                {text}
              </Text>
            ))}
          </Box>
        ))}
      </Flex>
    </Box>
  </Box>
);

export default Values;
