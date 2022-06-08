import { FunctionComponent } from 'react';
import { chakra, Box, Container, Heading, SimpleGrid, Text, useTheme } from '@chakra-ui/react';
import Image from 'next/image';

import LineDivider, { DashedLineDivider } from '@components/LineDivider';
import BorderDot from '@components/BorderDot';

const Solution: FunctionComponent = () => {
  const { gradients } = useTheme();

  return (
    <Container variant="section">
      <SimpleGrid columns={{ base: 1, lg: 2 }}>
        <Box pr={{ lg: 12 }} maxW="lg" my="auto">
          <Heading as="h3" size="h3" mb={{ base: 6, lg: 8 }}>
            Build Applications That Can{' '}
            <chakra.span bgImage={gradients.primaryGradient} bgClip="text">
              Trust Data-in-Motion
            </chakra.span>{' '}
            Across Complex, Variable, And Hostile Networks
          </Heading>

          <Box position="relative" maxW="lg">
            <LineDivider left={0} h="full" />
            <Text fontSize={{ base: 'md', lg: 'lg' }} pl={{ base: '', lg: 5 }} lineHeight={1.4}>
              Build Trust with a simple developer experience and powerful primitives that
              orchestrate end-to-end encryption, key management, authorization policy enforcement,
              and mutual authentication.
            </Text>
          </Box>
        </Box>

        <DashedLineDivider />

        <Box display={{ base: 'none', lg: 'initial' }} pl={{ lg: 16 }} position="relative">
          <BorderDot />
          <Image src="/solution.png" width={511} height={488} />
        </Box>
      </SimpleGrid>
    </Container>
  );
};

export default Solution;
