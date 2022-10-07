import { FunctionComponent } from 'react';
import { Box, Flex, Container, Heading, Text } from '@chakra-ui/react';

import LineDivider from '@components/LineDivider';
import { CodeBlock, CodeFlag, CodeLine, CodeLog } from '@components/CodeBlock';

const TITLE = 'Trust for Data-in-Motion';
const TEXTS = [
  'Modern applications are distributed and have an unwieldy number of interconnections that must trustfully exchange data.',
  'To build trust for data-in-motion, applications need end-to-end guarantees of data authenticity, integrity, and confidentiality. Ockam empowers you to build applications that are private, and secure-by-design.',
  'Orchestrate end-to-end encryption, mutual authentication, key management, credential management, and authorization policy enforcement – at massive scale.',
];

const Code = (): JSX.Element => (
  <CodeBlock py={2} px={6}>
    <CodeLine lib="ockam">
      secure-channel create <CodeFlag>--from</CodeFlag> /node/n1 <CodeFlag>--to</CodeFlag>{' '}
      /node/n2/service/api
    </CodeLine>
    <CodeLine prefix="|" prefixColor="#B866EA" lib="ockam" ml={10}>
      message send <CodeFlag color="#4FDAB8">“hello ockam”</CodeFlag> <CodeFlag>--from</CodeFlag>{' '}
      /node/n1 <CodeFlag>--from</CodeFlag> 127.0.0.1:7000{' '}
      <CodeFlag>--to -/service/uppercase</CodeFlag>
    </CodeLine>

    <CodeLog mt={2}>HELLO OCKAM</CodeLog>

    <br />
  </CodeBlock>
);

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

      <Flex
        maxW="30rem"
        mt={{ base: 12, lg: 'auto' }}
        my={{ base: 12, lg: 'auto' }}
        ml="full"
        mr={0}
      >
        <Code />
      </Flex>
    </Flex>
  </Container>
);

export default Solution;
