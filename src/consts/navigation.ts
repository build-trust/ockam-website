import { TEAM_PATH } from '@consts/paths';

// eslint-disable-next-line import/prefer-default-export
export const NAV_MENU_ITEMS = [
  { text: 'Features', href: '/#features' },
  { text: 'Use Cases', href: '/#use-cases' },
  { text: 'Products', href: '/#products' },
  {
    text: 'Team',
    href: undefined,
    children: [{ text: 'Open Roles', href: TEAM_PATH }],
  },
];
