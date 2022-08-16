import { FunctionComponent, SVGAttributes } from 'react';
import { Box, Flex, Container, Text, SimpleGrid, Icon, Link as ChakraLink } from '@chakra-ui/react';
import { ArrowDownIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';

import BuildingIcon from '@assets/icons/building.svg';
import CloudIcon from '@assets/icons/cloud.svg';
import GitHubIcon from '@assets/icons/github.svg';
import GreenIconWrapper from '@components/GreenIconWrapper';
import StepsLabel from '@components/StepsLabel';
import LineDivider, { DashedLineDivider } from '@components/LineDivider';
import Card from '@components/Card';
import { BUILD_DEMO, CONTACT, GITHUB_REPO_OCKAM } from '@consts/externalResources';

const GET_STARTED_CARDS = [
  {
    icon: GitHubIcon,
    title: 'Open Source',
    text: 'Join our community, start a discussion, read some code, or file an issue.',
    link: {
      text: 'Go to GitHub',
      href: GITHUB_REPO_OCKAM.href,
      isExternal: true,
    },
  },
  {
    icon: BuildingIcon,
    title: 'Start Building',
    text: 'Let’s build an application together in a step-by-step guide.',
    link: {
      text: 'Go to the Guide',
      href: BUILD_DEMO.href,
      isExternal: true,
    },
  },
  {
    icon: CloudIcon,
    title: 'Ockam Orchestrator',
    text: 'Sign up for Ockam Orchestrator - Now in Private Availability. Coming to AWS Marketplace in September.',
    link: {
      text: 'Contact us',
      href: CONTACT.href,
    },
  },
];

type GetStartedCardProps = {
  icon: FunctionComponent<SVGAttributes<SVGElement>>;
  title: string;
  text: string;
  link: {
    text: string;
    href: string;
    isExternal?: boolean;
  };
};

const GetStartedCard: FunctionComponent<GetStartedCardProps> = ({ icon, title, text, link }) => (
  <Card pt={4} pb={6} px={{ base: 4, lg: 5 }} direction="row">
    <Box flex={0} mr={5}>
      <GreenIconWrapper>
        <Icon as={icon} color="white" w={6} h={6} />
      </GreenIconWrapper>
    </Box>

    <Flex direction="column">
      <Text fontWeight="bold" fontSize="xl" color="brand.900" mb={2}>
        {title}
      </Text>

      <Text mb={5} fontSize="sm" flex={1}>
        {text}
      </Text>

      <Box
        href={link.href}
        as={link.isExternal ? ChakraLink : NextLink}
        {...(link.isExternal ? { isExternal: true } : { passHref: true })}
      >
        <Text
          as={link.isExternal ? 'span' : 'a'}
          fontWeight="semibold"
          color="black"
          fontSize="md"
          mt="auto"
        >
          {link.text}
          <ArrowForwardIcon w={5} h={5} ml={2} />
        </Text>
      </Box>
    </Flex>
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
