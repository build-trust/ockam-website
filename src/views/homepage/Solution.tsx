import { FunctionComponent } from 'react';
import { chakra, Box, Container, Heading, SimpleGrid, Text, useTheme } from '@chakra-ui/react';
import Image from 'next/image';

import LineDivider, { DashedLineDivider } from '@components/LineDivider';
import BorderDot from '@components/BorderDot';

const Solution: FunctionComponent = () => {
  const { gradients } = useTheme();

  return (
    <Container variant="section" py={{ base: 14, lg: 24 }}>
      <SimpleGrid columns={{ base: 1, lg: 2 }} mb={{ base: 6, lg: 0 }}>
        {/* TODO change pixels for theme units */}
        <Box maxW={{ lg: '518px' }} my="auto">
          <Heading as="h3" size="h3" lineHeight={1.3}>
            Build Applications That Can{' '}
            <chakra.span bgImage={gradients.primary} bgClip="text">
              Trust Data-in-Motion
            </chakra.span>{' '}
            Across Complex, Variable, And Hostile Networks
          </Heading>

          <Box position="relative" mt={{ base: 8, lg: 10 }}>
            <LineDivider left={0} h="full" />
            <Text
              fontSize={{ lg: 'lg' }}
              pl={{ base: 4, lg: 5 }}
              lineHeight={{ base: 1.4, lg: 1.5 }}
            >
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

        <LineDivider bottom={0} h={20} bg={gradients.tertiary} />
      </SimpleGrid>
    </Container>
  );
};

export default Solution;
