import { FunctionComponent } from 'react';
import { Container, Heading, Box, Text, SimpleGrid } from '@chakra-ui/react';

import { BrainIcon, ClarityIcon, TimeIcon, BulbIcon } from '@components/icons';
import { GreenIconWrapper } from '@components/icons/wrappers';

const VALUES = [
  {
    title: 'High-Performance Mindset',
    text: 'Create and manage cryptographic keys, unique device identifiers, and verifiable credentials in your connected environments.',
    icon: BrainIcon,
  },
  {
    title: 'Keep Things Simple',
    text: 'Create and manage cryptographic keys, unique device identifiers, and verifiable credentials in your connected environments. and verifiable credentials in your connected.',
    icon: BulbIcon,
  },
  {
    title: 'Default to Transparency',
    text: 'Create and manage cryptographic keys, unique device identifiers, and verifiable credentials in your connected environments.',
    icon: ClarityIcon,
  },
  {
    title: 'Time is Precious',
    text: 'Create and manage cryptographic keys, unique device identifiers, and verifiable credentials in your connected environments. and verifiable credentials in your connected.',
    icon: TimeIcon,
  },
];

const Values: FunctionComponent = () => (
  <Container variant="section" py={{ base: 16, lg: 30 }}>
    <Box w="full" pb={{ base: 10, lg: 14 }}>
      <Heading as="h2" size="h2" lineHeight={1.3}>
        Virtues of the Ockam Team
      </Heading>

      <Text fontSize={{ lg: 'lg' }} lineHeight={{ base: 1.5, lg: 1.4 }} my={6}>
        Values are what we believe - Virtues are what we do
      </Text>
    </Box>

    <SimpleGrid
      columns={{ base: 1, md: 2, lg: 4 }}
      spacingY={{ base: 10, xl: 0 }}
      spacingX={{ md: 16, lg: 14, xl: 24 }}
      pb={{ base: 4, lg: 10 }}
    >
      {VALUES.map(({ icon: IconComponent, text, title }) => (
        <Box key={title}>
          <GreenIconWrapper flex={1} mb={4}>
            <IconComponent color="white" w={6} h={6} />
          </GreenIconWrapper>

          <Text fontSize="xl" fontWeight="bold" color="brand.900" my={2} lineHeight={1.3}>
            {title}
          </Text>

          <Text fontSize="sm" lineHeight={1.5}>
            {text}
          </Text>
        </Box>
      ))}
    </SimpleGrid>
  </Container>
);

export default Values;
