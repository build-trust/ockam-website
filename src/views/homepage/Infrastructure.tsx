import { FunctionComponent } from 'react';
import { Flex, Box, Container, Text, SimpleGrid, Heading } from '@chakra-ui/react';
import Image from 'next/image';

import InfrastructureImage from '@assets/images/infrastructure.png';
import InfrastructureBgImage from '@assets/images/infrastructure-bg.png';

const TITLE = 'End-to-End Data Integrity and Authenticity';
const TEXTS = [
  [
    'A lot happened in the above demo. We created end-to-end trustful communication between an application server and its client running in different private networks, without opening any network ports and without changing any application code.',
    'To make make this happen, we first created a relay node that runs a forwarding service. We then created a sidecar node next to our ',


    'We started two applications; server_sidecar and an client_sidecar. Each is local but, imagine that these applications were in two separated private networks. Each application then generated a unique Cryptographic Identity and a Vault to protect it.',
    'The server_sidecar used Ockam Orchestrator to register an address with an Ockam Relay. A Relay can transparently forward messages to the to client_sidecar - even if its running behind a NAT without an exposed port.',
  ],

  [
    'The server_sidecar started a Secure Channel Listener and waited for an authenticated channel to be established.',
    'Next, the server_sidecar used Ockam Orchestrator to create a mutually authenticated, end-to-end encrypted, bi-directional, Secure Channel to the echo_service.',
  ],
];

const Infrastructure: FunctionComponent = () => (
  <Flex position="relative" w="full">
    <Box
      display={{ base: 'none', lg: 'block' }}
      position="absolute"
      w="2000px"
      bottom={0}
      left="50%"
      transform="translateX(-50%) translateY(6px)"
    >
      <Image
        src={InfrastructureBgImage}
        alt="Infrastructure background image"
        width={2000}
        height={805}
        priority
        placeholder="blur"
      />
    </Box>

    <Container variant="section">
      <Heading as="h2" size="h2" mb={{ base: 6, lg: 8 }}>
        {TITLE}
      </Heading>

      <SimpleGrid columns={{ base: 1, lg: 2 }} spacingX={16} mb={{ base: 20, lg: 16 }}>
        {TEXTS.map((column) => (
          <Box key={`${column[1]}column`} _notLast={{ mb: { base: 5, lg: 0 } }}>
            {column.map((text) => (
              <Text key={text} fontSize={{ lg: 'lg' }} _notLast={{ mb: { base: 5, lg: 4 } }}>
                {text}
              </Text>
            ))}
          </Box>
        ))}
      </SimpleGrid>

      <Box
        display={{ base: 'none', lg: 'initial' }}
        my={{ lg: 'auto' }}
        transform="translateY(6px)"
      >
        <Image
          src={InfrastructureImage}
          alt="Infrastructure image"
          width={1022}
          height={441}
          priority
          placeholder="blur"
        />
      </Box>
    </Container>
  </Flex>
);

export default Infrastructure;
