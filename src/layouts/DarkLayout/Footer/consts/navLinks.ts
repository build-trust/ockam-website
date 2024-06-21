import {
  CONTACT_FORM_PATH,
  MISSION_AND_VISION_PATH,
  MISSION_AND_VISION_TEAM_SECTION,
  STYLE_GUIDE_PATH,
  TEAM_PATH,
} from '@consts/paths';
import { DISCORD, DISCUSSION, LINKEDIN, TWITTER } from '@consts/externalResources';

export const FOOTER_LINKS = [
  {
    heading: 'Learn',
    links: [
      {
        name: 'Get Started',
        href: 'https://docs.ockam.io/#quick-start',
      },
      {
        name: 'Ockam Command',
        href: 'https://docs.ockam.io/reference/command',
      },
      {
        name: 'Programming Libraries',
        href: 'https://docs.ockam.io/reference/libraries',
      },
      {
        name: 'Cryptographic & Messaging Protocols',
        href: 'https://docs.ockam.io/reference/protocols',
      },
      {
        name: 'Documentation',
        href: 'https://docs.ockam.io/',
      },
    ],
  },

  {
    heading: 'Use Cases',
    links: [
      {
        name: 'Database Protection',
        href: '/for/private-connectivity',
      },
      {
        name: 'Kafka Encryption',
        href: '/for/kafka',
      },
      { name: 'SaaS Connectivity', href: '/for/saas-connectivity' },
      {
        name: 'Sales Engineers',
        href: '/for/sales-engineers',
      },
      {
        name: 'Zero-trust Streaming Data',
        href: 'https://www.ockam.io/blog/redpanda_connect_with_ockam',
      },
    ],
  },

  {
    heading: 'Company',
    links: [
      { name: 'Open Roles', href: `${TEAM_PATH}#open-roles` },
      { name: 'Our Mission & Values', href: MISSION_AND_VISION_PATH },
      { name: 'The Team', href: MISSION_AND_VISION_TEAM_SECTION },
      { name: 'Team Handbook', href: '/blog/team_handbook' },
      { name: 'Compliance & Audit Reports', href: 'https://audits.ockam.io/' },
      { name: 'Orchestrator Status', href: 'https://status.ockam.io/' },
      {
        name: 'Style Guide',
        href: STYLE_GUIDE_PATH,
      },
    ],
  },

  {
    heading: 'Contact',
    links: [
      DISCUSSION,
      { name: 'Build Trust Community Discord', href: DISCORD.href },
      {
        name: 'Support',
        href: CONTACT_FORM_PATH,
      },
      LINKEDIN,
      TWITTER,
      { name: 'Newsletter - The Razor', href: '/the-razor' },
    ],
  },
];

export const SOCIAL_LINKS = [
  { name: 'Privacy Notice', href: '/policies/privacy' },
  { name: 'Terms of Service', href: '/policies/terms' },
];
