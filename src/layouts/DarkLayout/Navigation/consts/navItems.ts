import { DOCS } from '@consts/externalResources';
import {
  BLOG_PATH,
  MAGIC_PATH,
  MISSION_AND_VISION_PATH,
  PRICING_PATH,
  SIGNUP_PATH,
  TEAM_PATH,
  USE_CASES_PATH,
} from '@consts/paths';

export const NAV_ITEMS = [
  {
    name: 'Features',
    href: MAGIC_PATH,
  },
  {
    name: 'Use Cases',
    href: USE_CASES_PATH,
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
    name: 'Docs',
    href: DOCS.href,
  },
  {
    name: 'Login',
    href: SIGNUP_PATH,
  },
];

export type NavItem = (typeof NAV_ITEMS)[number];
