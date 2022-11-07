import { FunctionComponent } from 'react';
import Image, { StaticImageData } from 'next/image';
import { Box, Flex, Container, Text, Heading, SimpleGrid, Center } from '@chakra-ui/react';

import Card from '@components/Card';
import CasesOneImage from '@assets/images/cases1.png';
import CasesTwoImage from '@assets/images/cases2.png';
import CasesThreeImage from '@assets/images/cases3.png';
import CTALink from '@components/CTALink';
import Transition from '@root/components/Transition/Transition';

const TITLE = 'How is Ockam Used?';
const TEXTS = ['Ockam can, and should, be used between every application, everywhere.'];

const CASES_CARDS = [
  {
    image: CasesOneImage,
    title: 'Orchestrate at Scale',
    texts: [
      'Modern applications are made up of an unmanageable number of ephemeral microservices. They are distributed, multi-cloud, and rely upon dozens of cloud marketplace services. With so many endpoints that need to interoperate, it’s become impossible to manage.',
      'Ockam’s key generation and handshake protocols allow for dynamic, massive-scale orchestrations across complex network topologies.',
    ],
    actionHref: 'https://docs.ockam.io/use-cases/orchestrate-at-scale',
    actionText: 'Learn more',
    isExternal: true,
  },
  {
    image: CasesTwoImage,
    title: 'Get Out of the Middle',
    texts: [
      'You are building an app that moves data from over-there to over-there. Perhaps it’s a message service like Kafka or RabbitMQ?',
      'You don’t want to be liable for data that moves through your service; Particularly if its HIPAA or PCI protected data!',
      'Ockam’s end-to-end encryption originates at the data-source and terminates at the data-target , so your app-in-the-middle can not decipher data-in-motion. ',
    ],
    actionHref: 'https://docs.ockam.io/use-cases/get-out-of-the-middle',
    actionText: 'Learn more',
    isExternal: true,
  },
  {
    image: CasesThreeImage,
    title: 'Trust Anything, Anywhere',
    texts: [
      'If you access data in a VPC, you are exposing your applications to threats by exposing your VPC to the internet.',
      'Ockam’s inlets and outlets create topologies that eliminate threats from the internet for applications in VPCs. Effectively, your data can move from from VPC to VPC without exposing either application to the internet. Virtually, the applications are running next to each other in the same environment.',
    ],
    actionHref: 'https://docs.ockam.io/use-cases/build-trust-in-anything-anywhere',
    actionText: 'Learn more',
    isExternal: true,
  },
];

type CasesCardProps = {
  image: StaticImageData;
  title: string;
  texts: string[];
  actionText: string;
  actionHref: string;
  isExternal?: boolean;
};

const CasesCard: FunctionComponent<CasesCardProps> = ({
  image,
  title,
  texts,
  actionText,
  actionHref,
  isExternal,
}) => (
  <Card p={6} height="100%">
    <Center pb={6} mb={6} borderBottom="1px" borderColor="gray.200">
      <Image src={image} alt={`${title} image`} width={313} height={171} placeholder="blur" />
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

    <CTALink text={actionText} href={actionHref} isExternal={isExternal} />
  </Card>
);

const Cases: FunctionComponent = () => (
    <Container variant="section" id="use-cases" pt={{ base: 16, lg: 20 }} pb={{ base: 20, lg: 18 }}>
      <Flex
        direction="column"
        alignItems="center"
        textAlign="center"
        w="full"
        mb={{ base: 12, lg: 16 }}
      >
        <Heading as="h2" size="h2" mb={6}>
          {TITLE}
        </Heading>

        {TEXTS.map((text) => (
          <Text key={text} fontSize={{ lg: 'lg' }} lineHeight={1.4} _notLast={{ mb: 5 }}>
            {text}
          </Text>
        ))}
      </Flex>

      <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={{ base: 6, lg: 10 }}>
        {CASES_CARDS.map((item, index) => (
          <Transition key={item.title} delay={(index + 1) * 300} duration={500}>
            <CasesCard {...item} />
          </Transition>
        ))}
      </SimpleGrid>
    </Container>
  );

export default Cases;
