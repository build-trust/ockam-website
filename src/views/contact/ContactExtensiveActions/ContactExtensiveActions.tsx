import { FunctionComponent } from 'react';
import { Box, Container } from '@chakra-ui/react';

import GitHubIcon from '@assets/icons/github.svg';
import TwitterIcon from '@assets/icons/twitter.svg';
import TeamIcon from '@assets/icons/team.svg';
import { TEAM_PATH } from '@consts/paths';
import { BUILD_DEMO, TWITTER } from '@consts/externalResources';

import ContactExtensiveActionsCard from './ContactExtensiveActionsCard';

const CONTACT_EXTENSIVE_ACTIONS_CARDS = [
  {
    title: 'Build Demo App',
    icon: GitHubIcon,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sodales mi nisi, id vulputate quam facilisis eget. Donec mollis leo justo, et tristique nibh auctor ut.',
    actionText: `Let's Build`,
    actionLink: BUILD_DEMO.href,
    isExternal: true,
  },
  {
    title: 'Join Our Team',
    icon: TeamIcon,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sodales mi nisi, id vulputate quam facilisis eget. Donec mollis leo justo, et tristique nibh auctor ut.',
    actionText: 'See the Open Roles',
    actionLink: TEAM_PATH,
  },
  {
    title: 'Follow Us',
    icon: TwitterIcon,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sodales mi nisi, id vulputate quam facilisis eget. Donec mollis leo justo, et tristique nibh auctor ut.',
    actionText: 'Follow Us on Twitter',
    actionLink: TWITTER.href,
    isExternal: true,
  },
];

const ContactExtensiveActions: FunctionComponent = () => (
  <Box w="full" mt={{ base: 14, lg: 30 }} mb={5} bgColor="gray.50">
    <Container
      variant="section"
      px={{ base: 5, lg: 32 }}
      py={{ base: 16, lg: 24 }}
      flexDir={{ base: 'column', lg: 'row' }}
    >
      {CONTACT_EXTENSIVE_ACTIONS_CARDS.map((card) => (
        <ContactExtensiveActionsCard {...card} key={card.title} />
      ))}
    </Container>
  </Box>
);

export default ContactExtensiveActions;
