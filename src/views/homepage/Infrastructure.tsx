import { FunctionComponent } from 'react';
import { Flex, Box, Container, Text, SimpleGrid, Heading } from '@chakra-ui/react';
import Image from 'next/image';

import InfrastructureImage from '@assets/images/infrastructure.png';
import InfrastructureBgImage from '@assets/images/infrastructure-bg.png';

const TITLE = 'End-to-End Data Integrity and Authenticity';
const TEXTS = [
  [
    'A lot happened in the above demo.',

    'We have an application http server in python and an application client in curl. Our goal is to create trustful communication between the application server and its clients that are running in different private networks. We want to achieve this without exposing the server to the Internet and without modifying existing client or server application code.',

    'To make this happen, we create a relay node that runs a forwarding service exposed on the Internet. Ockam Orchestrator offers highly scalable, managed encrypted relays but for this first demo we create a local relay. We then create a sidecar node next to our application server and another sidecar node next to our application client. All three nodes generate unique cryptographic identities and file system vaults to store private keys. All three nodes are setup to trust each other’s public keys.',
  ],
  [
    'We ask the server_sidecar to create a TCP outlet to the application server and then ask the relay node to setup a forwarder for the server_sidecar. We then ask the client_sidecar to create an end-to-end encrypted and mutually authenticated secure channel with the server_sidecar via the relay. Finally we open a TCP inlet and tunnel client requests and responses through our end-to-end secure channel.',

    'Ockam gives you the tools to create many such end-to-end secure topologies. In this example topology, the application sidecar nodes create outgoing TCP connections to the relay which allows them to communicate from behind private NATs. The relay node routes encrypted data and cannot see or tamper with it.',

    'In a few simple commands, without dealing with the cryptographic details, we added end-to-end data integrity, authenticity and privacy to applications that don’t have built in trust guarantees.',
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
          placeholder="blur"
        />
      </Box>
    </Container>
  </Flex>
);

export default Infrastructure;
