import { FunctionComponent } from 'react';
import { Flex, Container, Text, Heading, Box, Link } from '@chakra-ui/react';

import CTALink from '@components/CTALink';
import Transition from '@root/components/Transition/Transition';
import SideBySidePanel from '@root/components/mdx/SideBySidePanel';

const TITLE = 'Use cases for Ockam';

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
    isMinimal
    image={image}
    textOrientation={textOrientation}
    alignItems={{
      base: 'start',
      lg: textOrientation === 'left' ? 'start' : 'end',
    }}
    aspect={aspect}
  >
    <Link href={actionHref}>
      <Heading
        letterSpacing="-2px"
        mb={4}
        size="h4"
        textAlign={{
          base: 'left',
          lg: textOrientation,
        }}
      >
        {title}
      </Heading>
    </Link>
    {texts.map((text) => (
      <Text
        key={text}
        mb={6}
        fontSize="sm"
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
  <Container
    variant="section"
    id="use-cases"
    pt={{ base: 16, lg: 20 }}
    pb={{ base: 20, lg: 18 }}
    px={0}
    mt={16}
  >
    <Flex
      direction="column"
      alignItems="center"
      textAlign="center"
      w="full"
      mb={{ base: 12, lg: 16 }}
    >
      <Heading as="h2" size="h2" mt={0} mb={0} letterSpacing="-2px">
        {TITLE}
      </Heading>
    </Flex>

    <Flex
      direction="row"
      width="100%"
      gap="4"
      alignItems="stretch"
      flexWrap="wrap"
      justify="space-around"
    >
      {CASES_CARDS.map((item, index) => (
        <Box width="23%" minW="300px">
          <Transition key={item.title} delay={(index + 1) * 300} duration={500} height="100%">
            <CasesCard {...item} textOrientation="left" />
          </Transition>
        </Box>
      ))}
    </Flex>
  </Container>
);

export default Cases;
