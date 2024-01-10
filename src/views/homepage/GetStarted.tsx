import { FunctionComponent, SVGAttributes } from 'react';
import { Box, Flex, Container, Text, SimpleGrid, Icon } from '@chakra-ui/react';

import BuildingIcon from '@assets/icons/building.svg';
import CloudIcon from '@assets/icons/cloud.svg';
import GitHubIcon from '@assets/icons/github.svg';
import GreenIconWrapper from '@components/GreenIconWrapper';
import Card from '@components/Card';
import { DISCORD, GITHUB_REPO_OCKAM } from '@consts/externalResources';
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
      href: GITHUB_REPO_OCKAM.href,
      isExternal: true,
      onClick: GAEvents.outboundStartBuildingLink,
    },
  },
  {
    icon: CloudIcon,
    title: 'Companies',
    text: 'Purchase Ockam for your company with your AWS account',
    link: {
      text: 'See plans & pricing',
      isExternal: true,
      href: '/pricing',
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
