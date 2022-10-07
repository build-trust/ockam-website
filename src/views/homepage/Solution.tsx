import { FunctionComponent } from 'react';
import { Box, Flex, Container, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';

import CodeOneImage from '@assets/images/code1.png';
import LineDivider from '@components/LineDivider';

const TITLE = 'Trust for Data-in-Motion';
const TEXTS = [
  'Modern applications are distributed and have an unwieldy number of interconnections that must trustfully exchange data.',
  'To build trust for data-in-motion, applications need end-to-end guarantees of data authenticity, integrity, and confidentiality. Ockam empowers you to build applications that are private, and secure-by-design.',
  'Orchestrate end-to-end encryption, mutual authentication, key management, credential management, and authorization policy enforcement – at massive scale.',
];

const Solution: FunctionComponent = () => (
  <Container variant="section" pb={{ base: 20, lg: 30 }}>
    <Flex
      w="full"
      direction={{ base: 'column', lg: 'row' }}
      alignItems="center"
      justifyContent="space-between"
      gap={8}
    >
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

      <Flex maxW="30rem" mt={{ base: 12, lg: 'auto' }} my={{ base: 12, lg: 'auto' }}>
        <Image src={CodeOneImage} width={1126 / 2} height={685 / 2} />
      </Flex>
    </Flex>
  </Container>
);

export default Solution;
