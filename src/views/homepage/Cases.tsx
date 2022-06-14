import { FunctionComponent } from 'react';
import Image, { StaticImageData } from 'next/image';
import { Box, Container, Flex, Text, Heading, SimpleGrid, Center } from '@chakra-ui/react';

import CasesOneImage from '@assets/images/cases1.png';
import CasesTwoImage from '@assets/images/cases2.png';
import CasesThreeImage from '@assets/images/cases3.png';

const CARDS = [
  {
    src: CasesOneImage,
    title: 'Orchestrate at Micro-Service Scale',
    texts: [
      'Modern applications are made up of ephemeral microservices. They are distributed, multi-cloud, and rely upon dozens of cloud marketplace services. With so many endpoints that need to interoperate, it’s become impossible to manage.',
      'Ockam’s key generation and handshake protocols allow for dynamic, massive-scale orchistrations across complex network topologies.',
    ],
  },
  {
    src: CasesTwoImage,
    title: 'Get Out of the Middle',
    texts: [
      'You are building an app that moves data from over-there to over-there. Perhaps it’s a message service like Kafka or RabbitMQ?',
      'You don’t want to be liable for data that moves through your service; Particularly if its Hippa or PCI protected data!',
      'Ockam’s end-to-end encryption originates at the data-source and terminates at the data-target , so your app-in-the-middle can not decipher data-in-motion. ',
    ],
  },
  {
    src: CasesThreeImage,
    title: 'Trust Anything, Anywhere',
    texts: [
      'If you access data in a VPC, you are exposing your applications to threats by exposing your VPC to the internet.',
      'Ockam’s inlets and outlets create topologies that eliminate threats from the internet for applications in VPCs. Effectively, your data can move from from VPC to VPC without exposing either application to the internet. Virtually, the applications are running next to each other in the same environment.',
    ],
  },
];

type CardProps = {
  src: StaticImageData;
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
      <Image src={src} alt={`${title} image`} width={313} height={171} />
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
      Ockam can, and should, be used between every application, everywhere.
    </Text>

    <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={{ base: 6, lg: 10 }}>
      {CARDS.map((card) => (
        <Card key={card.title} {...card} />
      ))}
    </SimpleGrid>
  </Container>
);

export default Cases;
