import { FunctionComponent } from 'react';
import { Container, Heading, Box, Text, SimpleGrid } from '@chakra-ui/react';

import { BrainIcon, ClarityIcon, TimeIcon, BulbIcon } from '@components/icons';
import { GreenIconWrapper } from '@components/icons/wrappers';

const VALUES = [
  {
    title: 'High-Performant',
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
      'We trust eachother to be transparent,authentic and honest. As a globally distributed remote-first team trasparent communications establishes our culture of trust.',
    ],
    icon: ClarityIcon,
  },
  {
    title: 'Time Efficient',
    texts: [
      'Time is the most valuable asset that we have. We trust each other to use our time with respect. We consider how our actions and use of time imact everyone else on The Team.',
    ],
    icon: TimeIcon,
  },
];

const DESCRIPTIONS = ['Values are what we believe - Virtues are what we do'];

const Values: FunctionComponent = () => (
  <Container variant="section" py={{ base: 16, lg: 30 }}>
    <Box w="full" pb={{ base: 10, lg: 14 }}>
      <Heading as="h2" size="h2" lineHeight={1.3}>
        Virtues of the Ockam Team
      </Heading>

      <Box my={6}>
        {DESCRIPTIONS.map((text, index) => (
          <Text
            fontSize={{ lg: 'lg' }}
            lineHeight={{ base: 1.5, lg: 1.4 }}
            mb={index + 1 === DESCRIPTIONS.length ? 0 : 2}
          >
            {text}
          </Text>
        ))}
      </Box>
    </Box>

    <SimpleGrid
      columns={{ base: 1, md: 2, lg: 4 }}
      spacingY={{ base: 10, xl: 0 }}
      spacingX={{ md: 16, lg: 14, xl: 24 }}
      pb={{ base: 4, lg: 10 }}
    >
      {VALUES.map(({ icon: IconComponent, texts, title }) => (
        <Box key={title}>
          <GreenIconWrapper flex={1} mb={4}>
            <IconComponent color="white" w={6} h={6} />
          </GreenIconWrapper>

          <Text fontSize="xl" fontWeight="bold" color="brand.900" my={2} lineHeight={1.3}>
            {title}
          </Text>

          {texts.map((text, index) => (
            <Text key={text} fontSize="sm" lineHeight={1.5} mb={index + 1 === texts.length ? 0 : 2}>
              {text}
            </Text>
          ))}
        </Box>
      ))}
    </SimpleGrid>
  </Container>
);

export default Values;
