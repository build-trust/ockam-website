import { FunctionComponent } from 'react';
import { chakra, Box, Container, Heading, SimpleGrid, Text, useTheme } from '@chakra-ui/react';
import Image from 'next/image';

import SolutionImage from '@assets/images/solution.png';
import LineDivider, { DashedLineDivider } from '@components/LineDivider';

const TEXTS = [
  'Modern applications are distributed and have an unwieldy number of interconnections that must trustfully exchange data. Ockam makes it simple to build secure by-design applications that have granular control over every trust and access decision.',
  'Ockam is a suite of open source tools, programming libraries and managed cloud services to orchestrate end-to-end encryption, mutual authentication, key management, credential management & authorization policy enforcement — at scale.',
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
            </chakra.span>
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
          <Image
            src={SolutionImage}
            alt="Solution image"
            width={532}
            height={523}
            placeholder="blur"
            priority
          />
        </Box>

        <LineDivider bottom={0} h={20} bg={gradients.tertiary} />
      </SimpleGrid>
    </Container>
  );
};

export default Solution;
