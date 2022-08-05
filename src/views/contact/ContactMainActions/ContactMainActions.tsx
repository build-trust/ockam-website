import { FunctionComponent } from 'react';
import { Container, Flex } from '@chakra-ui/react';

import EmailIcon from '@assets/icons/email.svg';
import DocsIcon from '@assets/icons/docs.svg';
import SupportAgentIcon from '@assets/icons/support.svg';
import { BLOG_PATH, CONTACT_FORM_PATH } from '@consts/paths';
import { SUPPORT } from '@consts/externalResources';

import ContactMainActionsCard from './ContactMainActionsCard';

const CONTACT_MAIN_ACTIONS_CARDS = [
  {
    title: 'Support',
    icon: SupportAgentIcon,
    text: 'We`re here to help with any Ockam related questions.',
    link: {
      isExternal: true,
      href: SUPPORT.href,
      text: 'Get Support',
    },
  },
  {
    title: 'Contact Us',
    icon: EmailIcon,
    text: 'If you don`t have tome to talk, you can just write to us.',

    link: {
      href: CONTACT_FORM_PATH,
      text: 'Fill the Form',
    },
  },
  {
    title: 'Docs / Blog',
    icon: DocsIcon,
    text: 'Learn more about how Ockam makes your workflow easier.',
    link: {
      href: BLOG_PATH,
      text: 'Learn About Ockam',
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
