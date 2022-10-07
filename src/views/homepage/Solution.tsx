import { FunctionComponent } from 'react';
import { Box, Container, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import Image from 'next/image';

import LineDivider from '@components/LineDivider';
import CodeImage from '@assets/images/tools.png';

const TITLE = 'Trust for Data-in-Motion';
const TEXTS = [
  'Modern applications are distributed and have an unwieldy number of interconnections that must trustfully exchange data.',
  'To build trust for data-in-motion, applications need end-to-end guarantees of data authenticity, integrity, and confidentiality. Ockam empowers you to build applications that are private, and secure-by-design.',
  'Orchestrate end-to-end encryption, mutual authentication, key management, credential management, and authorization policy enforcement – at massive scale.',
];

const Solution: FunctionComponent = () => (
  <Container variant="section" pb={{ base: 20, lg: 30 }}>
    <SimpleGrid columns={{ base: 1, lg: 2 }}>
      <Box maxW={{ lg: '31rem' }}>
        <Heading as="h3" size="h3" lineHeight={1.3}>
          {TITLE}
        </Heading>

        <Box mt={{ base: 8, lg: 10 }} position="relative">
          <LineDivider left={0} h="full" />

          {TEXTS.map((text) => (
            <Box key={text} position="relative" _notLast={{ mb: 2 }}>
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

      <Box mt={{ base: 12, lg: 'auto' }} my={{ lg: 'auto' }} mx="auto">
        <Image src={CodeImage} width={1181 / 2} height={896 / 2} placeholder="blur" />
      </Box>
    </SimpleGrid>
  </Container>
);

export default Solution;
