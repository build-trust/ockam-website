import { FunctionComponent } from 'react';
import { Box, Container, Text, SimpleGrid } from '@chakra-ui/react';
import { ArrowDownIcon, ArrowForwardIcon, IconProps } from '@chakra-ui/icons';

import { GitHubIcon, BuildingIcon, CloudIcon } from '@components/icons';
import { GreenIconWrapper } from '@components/icons/wrappers';
import StepsLabel from '@components/StepsLabel';
import LineDivider, { DashedLineDivider } from '@components/LineDivider';
import Card from '@components/Card';

const GET_STARTED_CARDS = [
  {
    icon: GitHubIcon,
    title: 'Open Source',
    text: 'Join our community, start a discussion, read some code, or file an issue.',
    link: {
      text: 'Go to GitHub',
      href: 'https://github.com/build-trust/ockam',
    },
  },
  {
    icon: BuildingIcon,
    title: 'Start Building',
    text: 'Let’s build an application together in a step-by-step guide.',
    link: {
      text: 'Go to the Guide',
      href: 'https://github.com/build-trust/ockam#next-steps',
    },
  },
  {
    icon: CloudIcon,
    title: 'Ockam Orchestrator',
    text: 'Sign up for Ockam Orchestrator - Now in Private Availability. Coming to AWS Marketplace in September.',
    link: {
      text: 'Contact us',
      href: 'mailto:hello@ockam.io',
    },
  },
];

type GetStartedCardProps = {
  icon: FunctionComponent<IconProps>;
  title: string;
  text: string;
  link: {
    text: string;
    href: string;
  };
};

const GetStartedCard: FunctionComponent<GetStartedCardProps> = ({
  icon: IconComponent,
  title,
  text,
  link,
}) => (
  <Card pt={4} pb={6} px={{ base: 4, lg: 5 }} direction="row">
    <Box flex={0} mr={5}>
      <GreenIconWrapper>
        <IconComponent color="white" w={5} h={5} />
      </GreenIconWrapper>
    </Box>

    <Box>
      <Text fontWeight="bold" fontSize="xl" color="brand.900" mb={2}>
        {title}
      </Text>
      <Text mb={5} fontSize="sm">
        {text}
      </Text>
      <Text
        as="a"
        href={link.href}
        target="_blank"
        fontWeight="semibold"
        color="black"
        fontSize="md"
      >
        {link.text}
        <ArrowForwardIcon w={5} h={5} ml={2} />
      </Text>
    </Box>
  </Card>
);

const GetStarted: FunctionComponent = () => (
  <Box bgColor="gray.50" pt={{ base: 6, lg: 8 }}>
    <Container variant="section" zIndex={0}>
      <DashedLineDivider display={{ base: 'none', lg: 'block' }} />

      <StepsLabel mb={{ base: 4, lg: 2 }}>
        <LineDivider bottom="100%" h={{ base: 6, lg: 8 }} gradientDir="fromBottomToTop" />
        Let&apos;s Build Trust
        <LineDivider top="100%" h={{ base: 8, lg: 8 }} />
      </StepsLabel>

      <ArrowDownIcon w={8} h={8} color="avocado.500" />

      <SimpleGrid
        bgColor="gray.50"
        columns={{ base: 1, lg: 3 }}
        spacing={{ base: 6, lg: 10 }}
        mb={{ base: 20, lg: 20 }}
        mt={{ base: 8, lg: 6 }}
        pt={{ lg: 8 }}
        pb={{ lg: 6 }}
      >
        {GET_STARTED_CARDS.map((card) => (
          <GetStartedCard key={card.title} {...card} />
        ))}
      </SimpleGrid>
    </Container>
  </Box>
);

export default GetStarted;
