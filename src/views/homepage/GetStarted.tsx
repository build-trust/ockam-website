import { FunctionComponent, SVGAttributes } from 'react';
import { Box, Flex, Container, Text, SimpleGrid, Icon, Heading } from '@chakra-ui/react';

import BuildingIcon from '@assets/icons/building.svg';
import CloudIcon from '@assets/icons/cloud.svg';
import GitHubIcon from '@assets/icons/github.svg';
import GreenIconWrapper from '@components/GreenIconWrapper';
import Card from '@components/Card';
import { BUILD_DEMO, AWS_MARKETPLACE, DISCUSSION, DISCORD } from '@consts/externalResources';
import GAEvents from '@utils/GAEvents';
import CTALink from '@components/CTALink';
import Transition from '@root/components/Transition/Transition';

const GET_STARTED_CARDS = [
  {
    icon: GitHubIcon,
    title: 'Community',
    text: 'Join our Open Source community',
    link: [
      {
        text: 'GitHub Discussions',
        href: DISCUSSION.href,
        isExternal: true,
        onClick: GAEvents.outboundGithubLink,
      },
      {
        text: 'Discord',
        href: DISCORD.href,
        isExternal: true,
        onClick: GAEvents.outboundDiscordLink,
      },
    ],
  },
  {
    icon: BuildingIcon,
    title: 'Builders',
    text: 'Let’s build an application in a step-by-step guide',
    link: {
      text: 'Show me the code',
      href: BUILD_DEMO.href,
      isExternal: true,
      onClick: GAEvents.outboundStartBuildingLink,
    },
  },
  {
    icon: CloudIcon,
    title: 'Companies',
    text: 'Purchase Ockam for your company with your AWS account',
    link: {
      text: 'AWS Marketplace',
      isExternal: true,
      href: AWS_MARKETPLACE.href,
      onClick: GAEvents.outboundOrchestratorLink,
    },
  },
];

type CTALinkProps = {
  text: string;
  href: string;
  isExternal?: boolean;
  onClick?: () => void;
};
type GetStartedCardProps = {
  icon: FunctionComponent<SVGAttributes<SVGElement>>;
  title: string;
  text: string;
  link: CTALinkProps[] | CTALinkProps;
};

const GetStartedCard: FunctionComponent<GetStartedCardProps> = ({ icon, title, text, link }) => {
  const links = Array.isArray(link) ? link : [link];
  const ctas = links.map((l) => (
    <CTALink text={l.text} href={l.href} isExternal={l.isExternal} key={l.text} />
  ));

  return (
    <Card pt={4} pb={6} px={{ base: 4, lg: 5 }} height="100%" direction="row">
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
        {ctas}
      </Flex>
    </Card>
  );
};

const GetStarted: FunctionComponent = () => (
  <Box bgColor="gray.50" pt={16} pb={{ base: 16, lg: 24 }} zIndex={2}>
    <Container variant="section">
      <Heading as="h3" size="h3" mb={8} lineHeight={1.3} maxW={{ lg: '31rem' }} alignSelf="center">
        Trust for Data-in-Motion
      </Heading>
      <Text maxW="2xl" fontSize="lg" textAlign="center" mb={6}>
        Modern applications are distributed and have an unwieldy number of interconnections that
        must trustfully exchange data. To trust data-in-motion, applications need end-to-end
        guarantees of data integrity, authenticity, and&nbsp;privacy.
      </Text>
      <Text maxW="2xl" fontSize="lg" textAlign="center" mb={18}>
        Ockam empowers you with simple developer tools to add data guarantees to
        any&nbsp;application.
      </Text>

      <SimpleGrid
        bgColor="gray.50"
        columns={{ base: 1, lg: 3 }}
        spacing={{ base: 6, lg: 10 }}
        px={{ base: 0, lg: 6 }}
      >
        {GET_STARTED_CARDS.map((card, index) => (
          <Transition key={card.title} delay={(index + 1) * 150} duration={300}>
            <GetStartedCard {...card} />
          </Transition>
        ))}
      </SimpleGrid>
    </Container>
  </Box>
);

export default GetStarted;
