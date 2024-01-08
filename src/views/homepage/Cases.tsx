import { FunctionComponent } from 'react';
import { Flex, Container, Text, Heading } from '@chakra-ui/react';

import CTALink from '@components/CTALink';
import Transition from '@root/components/Transition/Transition';
import SideBySidePanel from '@root/components/mdx/SideBySidePanel';

const TITLE = 'How is Ockam Used?';
const TEXTS = [
  'Simply run Ockam at each of your applications to create trusted communication channels between apps and datastores in remote private networks.',
];

const CASES_CARDS: {
  image: string;
  aspect?: 'width' | 'height';
  title: string;
  texts: string[];
  actionHref: string;
  actionText: string;
  isExternal: boolean;
}[] = [
  {
    image: 'app-level',
    title: 'Access Distributed Data',
    texts: [
      'Create secure access to private databases - from any application, anywhere!',
      'Stop exposing private data to the public internet with service ports.',
      'Start isolating data exposure to the endpoint of your application.',
    ],
    actionHref: '/for/private-connectivity',
    actionText: 'Learn more',
    isExternal: false,
  },
  {
    image: 'kafka-encrypted-ockam',
    title: 'Secure Kakfa Streams',
    texts: [
      'Guarantee data authenticity and integrity from producers all-the-way to consumers.',
      'Stop exposing the broker to your data streams.',
      'Start encrypting data-in-motion through Kafka.',
    ],
    actionHref: '/for/kafka',
    actionText: 'Learn more',
    isExternal: false,
  },
  {
    image: 'no-need-for-complicated-network',
    title: 'Ship <it> Today',
    texts: [
      'Shift left and move security into your application layer with simple developer tools.',
      'Stop waiting on an IT team.',
      'Start deploying your applications to production today.',
    ],
    actionHref: '/for/sales-engineers',
    actionText: 'Learn more',
    isExternal: false,
  },
  {
    image: 'simplified-connecting-saas',
    title: 'Private connections to SaaS',
    texts: [
      'Securely & privately connect to SaaS platforms in minutes',
      'Stop punching holes in firewalls.',
      'Unblock your teams without waiting for IT changes.',
    ],
    actionHref: '/for/saas-connectivity',
    actionText: 'Learn more',
    isExternal: false,
  },
];

type CasesCardProps = {
  image: string;
  aspect?: 'width' | 'height';
  title: string;
  texts: string[];
  actionText: string;
  actionHref: string;
  isExternal?: boolean;
  textOrientation: 'left' | 'right';
};

const CasesCard: FunctionComponent<CasesCardProps> = ({
  image,
  aspect,
  title,
  texts,
  actionText,
  actionHref,
  isExternal,
  textOrientation,
}) => (
  <SideBySidePanel
    isPanel
    image={image}
    textOrientation={textOrientation}
    alignItems={{
      base: 'start',
      lg: textOrientation === 'left' ? 'start' : 'end',
    }}
    aspect={aspect}
  >
    <Heading
      letterSpacing="-2px"
      mb={4}
      textAlign={{
        base: 'left',
        lg: textOrientation,
      }}
    >
      {title}
    </Heading>
    {texts.map((text) => (
      <Text
        key={text}
        mb={6}
        fontSize="md"
        textAlign={{
          base: 'left',
          lg: textOrientation,
        }}
        style={{ textWrap: 'balance' }}
      >
        {text}
      </Text>
    ))}

    <CTALink text={actionText} href={actionHref} isExternal={isExternal} />
  </SideBySidePanel>
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
      <Heading as="h2" size="h2" mb={6} letterSpacing="-2px">
        {TITLE}
      </Heading>

      {TEXTS.map((text) => (
        <Text
          key={text}
          fontSize={{ lg: 'lg' }}
          lineHeight={1.4}
          _notLast={{ mb: 5 }}
          maxW="4xl"
          style={{ textWrap: 'balance' }}
        >
          {text}
        </Text>
      ))}
    </Flex>

    <Flex direction="column" width="100%">
      {CASES_CARDS.map((item, index) => (
        <Transition key={item.title} delay={(index + 1) * 300} duration={500}>
          <CasesCard {...item} textOrientation={index % 2 === 0 ? 'left' : 'right'} />
        </Transition>
      ))}
    </Flex>
  </Container>
);

export default Cases;
