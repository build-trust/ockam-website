import { TEAM_PATH, BLOG_PATH, MISSION_AND_VISION_PATH } from '@consts/paths';
import GitHubIcon from '@assets/icons/github.svg';
import RocketIcon from '@assets/icons/rocket.svg';
import UsersIcon from '@assets/icons/users.svg';

// eslint-disable-next-line import/prefer-default-export
export const NAV_MENU_ITEMS = [
  { text: 'Features', href: '/#features', isExternal: false },
  { text: 'Use Cases', href: '/#use-cases', isExternal: false },
  { text: 'Products', href: '/#products', isExternal: false },
  {
    text: 'Team',
    children: [
      { text: 'Open Roles', href: TEAM_PATH, icon: UsersIcon, isExternal: false },
      {
        text: 'Our Mission & Vision',
        href: MISSION_AND_VISION_PATH,
        icon: RocketIcon,
        isExternal: false,
      },
    ],
  },
  {
    text: 'Blog',
    href: BLOG_PATH,
    isExternal: false,
  },
  {
    text: 'Source',
    href: 'https://github.com/build-trust/ockam',
    icon: GitHubIcon,
    isExternal: true,
  },
];
