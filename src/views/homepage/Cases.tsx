import { FunctionComponent } from 'react';
import Image, { StaticImageData } from 'next/image';
import { Box, Flex, Container, Text, Heading, SimpleGrid, Center } from '@chakra-ui/react';

import Card from '@components/Card';
import CasesOneImage from '@assets/images/influxdata.png';
import CasesTwoImage from '@assets/images/confluent.png';
import CasesThreeImage from '@assets/images/okta.png';
import CTALink from '@components/CTALink';
import Transition from '@root/components/Transition/Transition';

const TITLE = 'How is Ockam Used?';
const TEXTS = [
  'Run Ockam at each of your applications to create a secure communication channel directly with all of your other apps.',
];

const CASES_CARDS = [
  {
    image: CasesOneImage,
    title: 'Virtually-Adjacent Databases',
    texts: [
      'Create secure communication with private databases from anywhere.',
      'No longer do you need to expose your data to the public internet with service ports.',
    ],
    actionHref: 'https://docs.ockam.io/guides/use-cases',
    actionText: 'Learn more',
    isExternal: true,
  },
  {
    image: CasesTwoImage,
    title: 'Secure-by-Design Messaging',
    texts: [
      'Guarantee data authenticity and integrity of events from producers all-the-way to end consumers.',
      'End-to-end encrypt data-in-motion through Kafka.',
    ],
    actionHref: 'https://docs.ockam.io/guides/use-cases',
    actionText: 'Learn more',
    isExternal: true,
  },
  {
    image: CasesThreeImage,
    title: 'Developer-First Authentication',
    texts: [
      'Authenticate and authorize every access decision.',
      'Add identity-driven controls to enforce enterprise policies everywhere.',
    ],
    actionHref: 'https://docs.ockam.io/guides/use-cases',
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
