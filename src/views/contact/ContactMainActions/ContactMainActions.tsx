import { FunctionComponent } from 'react';
import { Container, Flex } from '@chakra-ui/react';

import EmailIcon from '@assets/icons/email.svg';
import DocsIcon from '@assets/icons/docs.svg';
import SupportAgentIcon from '@assets/icons/support.svg';
import { CONTACT_FORM_PATH } from '@consts/paths';
import { SUPPORT, DOCS } from '@consts/externalResources';

import ContactMainActionsCard from './ContactMainActionsCard';

const CONTACT_MAIN_ACTIONS_CARDS = [
  {
    title: 'Community',
    icon: SupportAgentIcon,
    text: 'We use GitHub Discussions to facilitate transparent learning opportunities for everyone.',
    link: {
      isExternal: true,
      href: SUPPORT.href,
      text: 'Start a Discussion',
    },
  },
  {
    title: 'Contact Us',
    icon: EmailIcon,
    text: 'We want to meet you! If you want to meet with our CEO and CTO to discuss your use case for Ockam, then let us know.',

    link: {
      href: CONTACT_FORM_PATH,
      text: 'Schedule a 1:1',
    },
  },
  {
    title: 'Documentation',
    icon: DocsIcon,
    text: 'Check out our documentation pages for an introduction, or for a deep dive into how Ockam works!',
    link: {
      isExternal: true,
      href: DOCS.href,
      text: 'docs.ockam.io',
    },
  },
];

const ContactMainActions: FunctionComponent = () => (
  <Container variant="section" mt={{ base: 20, lg: 36 }}>
    <Flex gap={{ base: 5, md: 10 }} justify="center" w="full" wrap="wrap">
      {CONTACT_MAIN_ACTIONS_CARDS.map((card) => (
        <ContactMainActionsCard {...card} key={card.title} />
      ))}
    </Flex>
  </Container>
);

export default ContactMainActions;
