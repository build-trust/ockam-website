import { FunctionComponent } from 'react';
import { Box, Flex, Container, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';

import CodeOneImage from '@assets/images/code1.png';
import LineDivider from '@components/LineDivider';
import CopyToClipboard from '@components/CopyToClipboard';

const CODE_TEXT = `ockam secure-channel create --from /node/n1 --to /node/n2/service/api \\
    | ockam message send "hello ockam" --from /node/n1 --to -/service/uppercase

# Created Secure Channel to /node/n2/service/api
# Received "hello ockam" at /service/uppercase, Responding with "HELLO OCKAM"

# HELLO OCKAM`;

const TITLE = 'Trust for Data-in-Motion';
const TEXTS = [
  'Ockam is a suite of open source tools, programming libraries, and managed cloud services to orchestrate end-to-end encryption, mutual authentication, key management, credential management, and authorization policy enforcement – at massive scale.',
  'Modern applications are distributed and have an unwieldy number of interconnections that must trustfully exchange data. To trust data-in-motion, applications need end-to-end guarantees of data integrity, authenticity, and privacy.',
  'Ockam empowers you with simple tools to add these controls and guarantees to any application.',
];

const Solution: FunctionComponent = () => (
  <Container variant="section" pb={{ base: 20, lg: 30 }}>
    <Heading as="h3" size="h3" lineHeight={1.3} maxW={{ lg: '31rem' }} alignSelf="flex-start">
      {TITLE}
    </Heading>

    <Flex
      w="full"
      direction={{ base: 'column', lg: 'row' }}
      alignItems="center"
      justifyContent="space-between"
      gap={8}
      mt={{ base: 8, lg: 10 }}
    >
      <Box maxW={{ lg: '31rem' }}>
        <Box position="relative">
          <LineDivider left={0} h="full" />

          {TEXTS.map((text) => (
            <Box key={text} position="relative" _notLast={{ mb: 2 }}>
              <Text fontSize={{ lg: 'lg' }} pl={{ base: 4, lg: 5 }} lineHeight={1.4}>
                {text}
              </Text>
            </Box>
          ))}
        </Box>
      </Box>

      <Flex maxW="35rem" mt={{ base: 12, lg: 'auto' }} mb={{ base: 0, lg: 'auto' }} boxShadow="xl">
        <Box position="relative" fontSize={0} zIndex={0}>
          <CopyToClipboard position="absolute" bottom={5} right={5} codeText={CODE_TEXT} />
          <Image src={CodeOneImage} alt="Code block 1" placeholder="blur" priority />
        </Box>
      </Flex>
    </Flex>
  </Container>
);

export default Solution;
