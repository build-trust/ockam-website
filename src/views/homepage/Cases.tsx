import { FunctionComponent } from 'react';
import { Flex, Container, Text, Heading, Box, FlexProps } from '@chakra-ui/react';

import Transition from '@root/components/Transition/Transition';
import SideBySidePanel from '@root/components/mdx/SideBySidePanel';
import GradientContainer from '@root/layouts/components/GradientContainer';

import Hero from './Hero';

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
  textOrientation: 'left' | 'right';
};

const CasesCard: FunctionComponent<CasesCardProps> = ({
  image,
  aspect,
  title,
  texts,
  actionText,
  actionHref,
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
    href={actionHref}
    cta_text={actionText}
  >
    <Heading
      letterSpacing="-1.2px"
      mb={4}
      size="h4"
      fontSize="xl"
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
        fontSize="sm"
        textAlign={{
          base: 'left',
          lg: textOrientation,
        }}
        _hover={{
          textDecoration: 'none',
        }}
      >
        {text}
      </Text>
    ))}
  </SideBySidePanel>
);

const Cases: FunctionComponent<FlexProps> = ({ ...restProps }) => (
  <Flex
    id="use-cases"
    flexDir="column"
    alignContent="center"
    justifyContent="center"
    mt={20}
    width="100%"
    {...restProps}
  >
    <GradientContainer
      h="80vh"
      minH="40em"
      flexDir="column"
      justifyContent="flex-start"
      mb={{ base: '-14em', sm: '-14em', md: '-14em', lg: '-14em' }}
    >
      <Hero
        text="Use _Cases_"
        subtext="To orchestrate <end-to-end encryption|mutual authentication|key management|credential management|authorization policy enforcement> &mdash; at massive&nbsp;scale"
        darkGradient
      />
    </GradientContainer>

    <Container variant="section" pt={{ base: 0, lg: 0 }} pb={{ base: 12, lg: 12 }} px={0} mt={16}>
      <Flex
        direction="row"
        width="100%"
        gap={{ base: '4', md: '4' }}
        alignItems="stretch"
        flexWrap="wrap"
        justify="space-around"
      >
        {CASES_CARDS.map((item, index) => (
          <Box
            width={{ base: '100%', md: '45%', lg: '45%', xl: '24%' }}
            minW="300px"
            key={`case-${item.title}`}
            my={{ base: '4', md: '0' }}
          >
            <Transition key={item.title} delay={(index + 1) * 300} duration={500} height="100%">
              <CasesCard {...item} textOrientation="left" />
            </Transition>
          </Box>
        ))}
      </Flex>
    </Container>
  </Flex>
);

export default Cases;
