import { FunctionComponent, SVGAttributes } from 'react';
import { Box, Flex, Container, Text, SimpleGrid, Icon } from '@chakra-ui/react';

import BuildingIcon from '@assets/icons/building.svg';
import CloudIcon from '@assets/icons/cloud.svg';
import GitHubIcon from '@assets/icons/github.svg';
import GreenIconWrapper from '@components/GreenIconWrapper';
import Card from '@components/Card';
import { BUILD_DEMO, AWS_MARKETPLACE, DISCUSSION } from '@consts/externalResources';
import GAEvents from '@utils/GAEvents';
import CTALink from '@components/CTALink';

const GET_STARTED_CARDS = [
  {
    icon: GitHubIcon,
    title: 'Community',
    text: 'Join our Open Source community, start a discussion, or file an issue - or just say Hello.',
    link: {
      text: 'GitHub Discussions',
      href: DISCUSSION.href,
      isExternal: true,
      onClick: GAEvents.outboundGithubLink,
    },
  },
  {
    icon: BuildingIcon,
    title: 'Builders',
    text: 'Let’s build an application, together, in this step-by-step guide to Ockam.',
    link: {
      text: 'User Guide',
      href: BUILD_DEMO.href,
      isExternal: true,
      onClick: GAEvents.outboundStartBuildingLink,
    },
  },
  {
    icon: CloudIcon,
    title: 'Companies',
    text: 'Sign up for Ockam Orchestrator and Build Trust across all of your applications and services.',
    link: {
      text: 'AWS Marketplace',
      isExternal: true,
      href: AWS_MARKETPLACE.href,
      onClick: GAEvents.outboundOrchestratorLink,
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
    onClick?: () => void;
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

      <CTALink text={link.text} href={link.href} isExternal={link.isExternal} />
    </Flex>
  </Card>
);

const GetStarted: FunctionComponent = () => (
  <Box bgColor="gray.50" pt={16} pb={{ base: 16, lg: 24 }}>
    <Container variant="section">
      <SimpleGrid bgColor="gray.50" columns={{ base: 1, lg: 3 }} spacing={{ base: 6, lg: 10 }}>
        {GET_STARTED_CARDS.map((card) => (
          <GetStartedCard key={card.title} {...card} />
        ))}
      </SimpleGrid>
    </Container>
  </Box>
);

export default GetStarted;
