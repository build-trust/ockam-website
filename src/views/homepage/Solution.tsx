import { FunctionComponent } from 'react';
import { Box, Flex, Container, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';

import CodeOneImage from '@assets/images/code1.png';
import LineDivider from '@components/LineDivider';

const TITLE = 'Trust for Data-in-Motion';
const TEXTS = [
  'Ockam is a suite of open source tools, programming libraries, and managed cloud services to orchestrate end-to-end encryption, mutual authentication, key management, credential management, and authorization policy enforcement – at massive scale.',
  'Modern applications are distributed and have an unwieldy number of interconnections that must trustfully exchange data. To trust data-in-motion, applications need end-to-end guarantees of data authenticity, integrity, and confidentiality.',
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

      <Flex maxW="30rem" mt={{ base: 12, lg: 'auto' }} mb={{ base: 0, lg: 'auto' }} boxShadow="xl">
        <Image
          src={CodeOneImage}
          width={966 / 2}
          height={584 / 2}
          alt="Code block 1"
          placeholder="blur"
          priority
        />
      </Flex>
    </Flex>
  </Container>
);

export default Solution;
