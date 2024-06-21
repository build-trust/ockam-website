import { DOCS } from '@consts/externalResources';
import {
  BLOG_PATH,
  FEATURES_PATH,
  MAGIC_PATH,
  MISSION_AND_VISION_PATH,
  PRICING_PATH,
  SIGNUP_PATH,
  TEAM_PATH,
} from '@consts/paths';

export const NAV_ITEMS = [
  {
    name: 'Features',
    href: MAGIC_PATH,
  },
  {
    name: 'Use Cases',
    href: FEATURES_PATH,
  },
  {
    name: 'Pricing',
    href: PRICING_PATH,
  },
  {
    name: 'Team',
    items: [
      { name: 'Open Roles', href: TEAM_PATH },
      { name: 'Our Mission & Vision', href: MISSION_AND_VISION_PATH },
    ],
  },
  {
    name: 'Blog',
    href: BLOG_PATH,
  },
  {
    name: 'Login',
    href: SIGNUP_PATH,
  },
  {
    name: 'Docs',
    href: DOCS.href,
  },
];

export type NavItem = (typeof NAV_ITEMS)[number];
