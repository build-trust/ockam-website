import { FunctionComponent } from 'react';
import { Flex, Box, Container, Text, SimpleGrid, Heading, useTheme } from '@chakra-ui/react';
import Image from 'next/image';

import InfrastructureImage from '@assets/images/infrastructure.png';
import InfrastructureBgImage from '@assets/images/infrastructure-bg.png';
import StepsLabel from '@components/StepsLabel';
import LineDivider from '@components/LineDivider';

const TEXTS = [
  [
    'A lot happened when you ran this demo. It started two local applications - an echo service and an echo client - on your computer. In a production scenario, these two applications would be running in two separate private networks. Each application, on startup, created a vault to store private keys and generated a unique cryptographic identity.',
    "The echo service application then created a Forwarder, in the cloud, using Ockam Orchestrator and registered a forwarding address. Whenever a message is sent to the echo service's Forwarder it will transparently relay that message to the echo service. This allows the echo service to receive messages, from other applications on the Internet, even thought it is running behind a NAT and hasn't exposed any network ports to the Internet.",
  ],

  [
    'The echo service application then started a SecureChannel Listener and waited for authenticated secure channels to be established.',
    'The echo client application then initiated a secure channel handshake with the echo service application using its forwarding address, in the cloud. This established a mutually authenticated, end-to-end encrypted, bidirectional secure channel between the two applications via the Internet. The Forwarder in the cloud, is relaying messages but cannot see or tamper their contents. Our echo service & echo client have established trustful communication on the application layer and place zero-trust in network boundaries and intermediaries. ',
    'Finally we sent a "hello" message through this end-to-end trusted channel and got an echo back.',
  ],
];

const Infrastructure: FunctionComponent = () => {
  const { gradients } = useTheme();

  return (
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
        />
      </Box>

      <Container variant="section">
        <StepsLabel mb={6}>
          <LineDivider bottom="100%" h={{ base: 24, lg: 20 }} bg={gradients.tertiary} />
          2. Get Trust
        </StepsLabel>

        <Heading as="h2" size="h2" mb={{ base: 6, lg: 8 }}>
          Build Complex Infrastructure
        </Heading>

        <SimpleGrid columns={{ base: 1, lg: 2 }} spacingX={16} mb={{ base: 16, lg: 24 }}>
          {TEXTS.map((column) => (
            <Box key={`${column[1]}column`} mb={{ lg: 8 }}>
              {column.map((text, index) => (
                <Text
                  key={text}
                  fontSize={{ lg: 'lg' }}
                  mb={{ base: 4, lg: index + 1 === column.length ? 0 : 4 }}
                >
                  {text}
                </Text>
              ))}
            </Box>
          ))}
        </SimpleGrid>

        <Box
          display={{ base: 'none', lg: 'initial' }}
          pr={{ lg: 16 }}
          my={{ lg: 'auto' }}
          transform="translateY(6px)"
        >
          <Image src={InfrastructureImage} alt="Infrastructure image" width={956} height={392} />
        </Box>
      </Container>
    </Flex>
  );
};

export default Infrastructure;
