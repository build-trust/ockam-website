import { FunctionComponent } from 'react';
import { chakra, Box, Container, Heading, SimpleGrid, Text, useTheme } from '@chakra-ui/react';
import Image from 'next/image';

import SolutionImage from '@assets/images/solution.png';
import LineDivider, { DashedLineDivider } from '@components/LineDivider';

const TEXTS = [
  'Ockam has a simple developer experience and powerful primitives that orchestrate end-to-end encryption, key management, authorization policy enforcement, and mutual authentication between distributed applications - at massive scale.',
];

const Solution: FunctionComponent = () => {
  const { gradients } = useTheme();

  return (
    <Container variant="section" py={{ base: 14, lg: 24 }}>
      <SimpleGrid columns={{ base: 1, lg: 2 }} mb={{ base: 6, lg: 0 }}>
        <Box maxW={{ lg: '34.2rem' }} my="auto">
          <Heading as="h3" size="h3" lineHeight={1.3}>
            Build Applications That{' '}
            <chakra.span bgImage={gradients.primary} bgClip="text">
              Trust Data-in-Motion
            </chakra.span>{' '}
            Across Cloud Services, Beyond Data Centers, Through Gateways.
          </Heading>

          <Box mt={{ base: 8, lg: 10 }}>
            {TEXTS.map((text) => (
              <Box key={text} position="relative" _notLast={{ mb: 2 }}>
                <LineDivider left={0} h="full" />
                <Text
                  fontSize={{ lg: 'lg' }}
                  pl={{ base: 4, lg: 5 }}
                  lineHeight={{ base: 1.4, lg: 1.5 }}
                >
                  {text}
                </Text>
              </Box>
            ))}
          </Box>
        </Box>

        <DashedLineDivider withDot />

        <Box display={{ base: 'none', lg: 'initial' }} pl={{ lg: 16 }} position="relative">
          <Image src={SolutionImage} alt="Solution image" width={511} height={488} />
        </Box>

        <LineDivider bottom={0} h={20} bg={gradients.tertiary} />
      </SimpleGrid>
    </Container>
  );
};

export default Solution;
