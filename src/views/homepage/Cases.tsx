import { FunctionComponent } from 'react';
import Image, { StaticImageData } from 'next/image';
import { Box, Flex, Container, Text, Heading, SimpleGrid } from '@chakra-ui/react';

import Card from '@components/Card';
import CasesAccessDataImage from '@assets/images/accessing-data.png';
import CasesKafkaImage from '@assets/images/encrypted-kafka.png';
import CasesStartTodayImage from '@assets/images/start-today.png';
import CTALink from '@components/CTALink';
import Transition from '@root/components/Transition/Transition';

const TITLE = 'How is Ockam Used?';
const TEXTS = [
  'Simply run Ockam at each of your applications to create trusted communication channels between apps and datastores in remote private networks.',
];

const CASES_CARDS = [
  {
    image: CasesAccessDataImage,
    title: 'Access Distributed Data',
    texts: [
      'Create secure access to private databases - from any application, anywhere!',
      'Stop exposing private data to the public internet with service ports.',
      'Start isolating data exposure to the endpoint of your application.',
    ],
    actionHref: 'https://docs.ockam.io/guides/use-cases/secure-database-access',
    actionText: 'Learn more',
    isExternal: true,
  },
  {
    image: CasesKafkaImage,
    title: 'Secure Kakfa Streams',
    texts: [
      'Guarantee data authenticity and integrity from producers all-the-way to consumers.',
      'Stop exposing the broker to your data streams.',
      'Start encrypting data-in-motion through Kafka.',
    ],
    actionHref: '/for/kafka',
    actionText: 'Learn more',
    isExternal: true,
  },
  {
    image: CasesStartTodayImage,
    title: 'Ship <it> Today',
    texts: [
      'Shift left and move security into your application layer with simple developer tools.',
      'Stop waiting for your IT team.',
      'Start deploying your applications to production today.',
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
    <Box width={313} height={170} verticalAlign="middle" mb={6} position="relative">
      <Image
        src={image}
        alt={`${title} image`}
        fill
        placeholder="blur"
        sizes="100vw"
        style={{ objectFit: 'contain' }}
      />
    </Box>
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
