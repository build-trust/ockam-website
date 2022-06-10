import { FunctionComponent } from 'react';
import Image from 'next/image';
import { Box, Container, Flex, Text, Heading, SimpleGrid, Center } from '@chakra-ui/react';

const CARDS = [
  {
    src: '/cases1.png',
    title: 'Connect at Micro-Service Scale',
    texts: [
      `Modern applications are made up of ephemeral microservices. They are distributed, multi-cloud, and rely upon dozens of Cloud marketplace services. With so many endpoints that need to interoperate it’s become impossible to manage.`,
      `Ockam’s key generation and handshake protocols allow for dynamic, massive scale orchistrations across complex network topologies.`,
    ],
  },
  {
    src: '/cases2.png',
    title: 'Get Out of the Middle',
    texts: [
      `You are building an app that moves data from here to there. Perhaps it’s a message service like Kafka or RabbitMQ?`,
      `You don’t want your application to be able to access the data that moves through your service. Particularly if its Hippa or PCI protected data!`,
      `Ockam’s end-to-end encryption originates at the source and terminates at the target application, so that no app in the middle has access to  data-in-motion.`,
    ],
  },
  {
    src: '/cases3.png',
    title: 'Trust Anything, Anywhere',
    texts: [
      `If you access data that is in a VPC, you are exposing your applications to new threats.`,
      `Ockam’s inlets and outlets create topologies that eliminate either application to threats from the internet. Effectively your data can from from VPC to VPC without ever exposing either application to the internet. Virtually it feels like the applications are sitting next to eachother as separate processes in the same box.`,
    ],
  },
];

type CardProps = {
  src: string;
  title: string;
  texts: string[];
};

const Card: FunctionComponent<CardProps> = ({ src, title, texts }) => (
  <Flex
    direction="column"
    p={6}
    border="1px"
    borderColor="gray.200"
    borderBottom="4px"
    borderBottomColor="avocado.500"
    borderRadius="md"
    bg="white"
    maxW="lg"
  >
    <Center pb={6} mb={6} borderBottom="1px" borderColor="gray.200">
      <Image src={src} width={311} height={170} />
    </Center>

    <Box>
      <Text fontWeight="bold" fontSize="xl" color="brand.900" mb={6}>
        {title}
      </Text>

      {texts.map((text) => (
        <Text key={text} mb={6} fontSize="sm">
          {text}
        </Text>
      ))}
    </Box>
  </Flex>
);

const Cases: FunctionComponent = () => (
  <Container variant="section" id="use-cases" py={{ base: 16, lg: 20 }}>
    <Heading as="h2" size="h2" mb={6}>
      How is Ockam Used?
    </Heading>

    <Text fontSize={{ lg: 'lg' }} mb={{ base: 12, lg: 16 }}>
      Ockam can and should be used between every application, everywhere.
    </Text>

    <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={{ base: 6, lg: 10 }}>
      {CARDS.map((card) => (
        <Card key={card.title} {...card} />
      ))}
    </SimpleGrid>
  </Container>
);

export default Cases;
