export const NAV_ITEMS = [
  {
    name: 'Features',
    href: '/#magic',
  },
  {
    name: 'Use Cases',
    href: '/#features',
  },
  {
    name: 'Pricing',
    href: '/pricing',
  },
  {
    name: 'Team',
    items: [
      { name: 'Open Roles', href: '/team' },
      { name: 'Our Mission & Vision', href: '/mission' },
    ],
  },
  {
    name: 'Blog',
    href: '/blog',
  },
  {
    name: 'Docs',
    href: 'https://docs.ockam.io',
  },
];

export type NavItem = (typeof NAV_ITEMS)[number];
