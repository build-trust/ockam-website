import { FunctionComponent } from 'react';
import Image, { StaticImageData } from 'next/legacy/image';
import { Box, Flex, Container, Text, Heading, SimpleGrid, Center } from '@chakra-ui/react';

import Card from '@components/Card';
import CasesOneImage from '@assets/images/vpc-peering.png';
import CasesTwoImage from '@assets/images/kafka-icon.png';
import CasesThreeImage from '@assets/images/developer-hero.png';
import CTALink from '@components/CTALink';
import Transition from '@root/components/Transition/Transition';

const TITLE = 'How is Ockam Used?';
const TEXTS = [
  'Simply run Ockam at each of your applications to create secure communication channels between apps and datastores in remote private networks.',
];

const CASES_CARDS = [
  {
    image: CasesOneImage,
    title: 'Access Distributed Data',
    texts: [
      'Create secure communication between private databases - from anywhere!',
      'Stop exposing your data to the public internet with service ports.',
    ],
    actionHref: 'https://docs.ockam.io/guides/use-cases/secure-database-access',
    actionText: 'Learn more',
    isExternal: true,
  },
  {
    image: CasesTwoImage,
    title: 'Secure Kakfa Streams',
    texts: [
      'Guarantee data authenticity and integrity of events from producers all-the-way to end consumers.',
      'Start encrypting data-in-motion through Kafka.',
    ],
    actionHref:
      'https://docs.ockam.io/guides/use-cases/end-to-end-encryption-through-confluent-cloud',
    actionText: 'Learn more',
    isExternal: true,
  },
  {
    image: CasesThreeImage,
    title: 'Ship it Today',
    texts: [
      'Ockam is an application layer solution with easy to use developer tools.',
      'Stop waiting for your IT team, and start deploying your applications to production today.',
    ],
    actionHref:
      'https://docs.ockam.io/guides/use-cases/add-end-to-end-encryption-to-any-client-and-server-application-with-no-code-change',
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
      <Image src={image} alt={`${title} image`} width={313} height={170} placeholder="blur" />
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
