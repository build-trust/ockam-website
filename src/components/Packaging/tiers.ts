import chroma from 'chroma-js';

import { CONTACT_FORM_PATH } from '@root/consts/paths';

type Cta = {
  text: string;
  url: string;
};
type Tier = {
  name: string;
  text: string;
  price: string;
  price_interval?: string;
  price_unit?: string;
  floor?: string;
  onlyFloor?: boolean;
  isPopular?: boolean;
  cta: Cta;
};
type Feature = {
  name: string;
  description?: string;
  more_info_link?: string;
  tiers: string[];
  hasLimits?: boolean;
  limits?: string;
  onCard?: boolean;
};

type Segment = {
  name: string;
  tiers: string[];
  color: string;
};
const SEGMENTS: Segment[] = [
  { name: 'Developers', tiers: ['Free', 'Premium'], color: '#52C7EA' },
  { name: 'Companies', tiers: ['Small', 'Medium', 'Large'], color: '#3AC6A3' },
  { name: 'Enterprises', tiers: ['Business Critical'], color: '#744D95' },
];
const TIERS: Tier[] = [
  {
    name: 'Free',
    text: 'The Tools for Builders',
    price: '$0',
    price_interval: 'mo',
    isPopular: true,
    cta: {
      text: 'Get started →',
      url: '/download',
    },
  },

  {
    name: 'Premium',
    text: 'The Tools for Builders',
    price: '$5',
    price_interval: 'mo',
    cta: {
      text: 'Start 14-day trial →',
      url: '/download',
    },
  },

  {
    name: 'Small',
    text: 'The Tools for Builders',
    price: '$500',
    price_interval: 'mo',
    onlyFloor: true,
    cta: {
      text: 'Start 14-day trial →',
      url: '/download',
    },
  },
  {
    name: 'Medium',
    text: 'The Tools for Builders',
    price: '$2500',
    price_interval: 'mo',
    onlyFloor: true,
    cta: {
      text: 'Start 14-day trial →',
      url: '/download',
    },
  },
  {
    name: 'Large',
    text: 'The Tools for Builders',
    price: '$10000',
    price_interval: 'mo',
    onlyFloor: true,
    cta: {
      text: 'Talk to sales →',
      url: `${CONTACT_FORM_PATH}`,
    },
  },

  {
    name: 'Business Critical',
    text: 'The Tools for Builders',
    price: '50000',
    price_interval: 'mo',
    onlyFloor: true,
    cta: {
      text: 'Talk to sales →',
      url: `${CONTACT_FORM_PATH}`,
    },
  },

  // {
  //   name: 'Platform',
  //   text: 'The Tools for Builders',
  //   price: 'Talk to sales',
  //   cta: {
  //     text: 'Talk to sales →',
  //     url: `${CONTACT_FORM_PATH}`,
  //   },
  // },
];

const FEATURES: Feature[] = [
  { name: 'Spaces', tiers: ['*'], hasLimits: true, onCard: true },
  // { name: 'Space administrators', tiers: ['*'], hasLimits: true, onCard: true  },

  { name: 'Projects per space', tiers: ['*'], hasLimits: true, onCard: false },
  // { name: 'Project administrators', tiers: ['*'], hasLimits: true, onCard: true  },

  { name: 'Project members', tiers: ['*'], hasLimits: true, onCard: true },

  { name: 'Project authority nodes', tiers: ['*'], hasLimits: true, onCard: false },
  { name: 'Credential authorities', tiers: ['*'], hasLimits: true, onCard: false },

  // { name: 'Throughput - Platform API requests', tiers: ['*'], hasLimits: true, onCard: false },

  // { name: 'TCP transport endpoints', tiers: ['*'], hasLimits: true, onCard: false },

  // { name: 'Transparency logs', tiers: ['Pro', 'Enterprise', 'Platform'], onCard: true },
  // { name: 'Audit logs', tiers: ['*'], hasLimits: true, onCard: true },

  // { name: 'Authority node identity', tiers: ['*'], hasLimits: true, onCard: false },
  // { name: 'Authority node identity keys', tiers: ['*'], hasLimits: true, onCard: false },

  // { name: 'Project enrollers', tiers: ['*'], hasLimits: true, onCard: false },
  // { name: 'Project members', tiers: ['*'], hasLimits: true, onCard: true },

  { name: 'Enrollment methods', tiers: ['*'], hasLimits: true, onCard: true },

  { name: 'Project nodes', tiers: ['*'], hasLimits: true, onCard: true },

  // { name: 'Encrypted relays', tiers: ['*'], hasLimits: true, onCard: true },

  { name: 'Identities', tiers: ['*'], hasLimits: true, onCard: true },
  { name: 'Included data transfer', tiers: ['*'], hasLimits: true, onCard: false },
  { name: 'Cloud managed', tiers: ['*'], onCard: true },
  { name: 'Attribute-based access controls', tiers: ['*'], onCard: true },
  { name: 'Ockam Command', tiers: ['*'], onCard: true },
  { name: 'Programming libraries', tiers: ['*'], onCard: true },
  { name: 'Community-based support', tiers: ['*'], onCard: true },
  { name: 'Ockam support', tiers: ['Small', 'Medium', 'Large', 'Business Critical'], onCard: true },
  { name: 'Premium Ockam support', tiers: ['Large', 'Business Critical'], onCard: true },
  { name: 'Volume discounts', tiers: ['Large', 'Business Critical', 'Platform'], onCard: true },
  {
    name: 'Service Level Agreements (SLAs)',
    tiers: ['Medium', 'Large', 'Business Critical', 'Platform'],
  },
  { name: 'Customized terms', tiers: ['Large', 'Business Critical', 'Platform'] },
  { name: 'Bring Your Own Cloud (BYOC)', tiers: ['Business Critical'], onCard: true },
];

const LIMITS: { [id: string]: { [id: string]: string } } = {
  Spaces: {
    Free: 'Up to 1',
    Premium: 'Up to 1',
    Small: 'Unlimited',
    Medium: 'Unlimited',
    Large: 'Unlimited',
    'Business Critical': 'Unlimited',
    Platform: 'Unlimited',
  },

  'Projects per space': {
    Free: 'Up to 1',
    Premium: 'Up to 1',
    Small: 'Unlimited',
    Medium: 'Unlimited',
    Large: 'Unlimited',
    'Business Critical': 'Unlimited',
    Platform: 'Unlimited',
  },

  'Project authority nodes': {
    Free: 'Up to 1',
    Premium: 'Up to 1',
    Small: 'Unlimited',
    Medium: 'Unlimited',
    Large: 'Unlimited',
    'Business Critical': 'Unlimited',
    Platform: 'Unlimited',
  },
  'Credential authorities': {
    Free: 'Up to 1',
    Premium: 'Up to 1',
    Small: 'Unlimited',
    Medium: 'Unlimited',
    Large: 'Unlimited',
    'Business Critical': 'Unlimited',
    Platform: 'Unlimited',
  },

  // 'Throughput - Platform API requests': {
  //   Starter: 'Up to X',
  //   Team: 'Up to Y',
  //   Basic: 'Unlimited',
  //   Pro: 'Unlimited',
  //   Enterprise: 'Unlimited',
  //   Platform: 'Unlimited',
  // },

  // 'TCP transport endpoints': {
  //   Starter: 'Up to X',
  //   Team: 'Up to Y',
  //   Basic: 'Unlimited',
  //   Pro: 'Unlimited',
  //   Enterprise: 'Unlimited',
  //   Platform: 'Unlimited',
  // },
  // 'Audit logs': {
  //   Starter: 'Up to X',
  //   Team: 'Up to Y',
  //   Basic: 'Unlimited',
  //   Pro: 'Unlimited',
  //   Enterprise: 'Unlimited',
  //   Platform: 'Unlimited',
  // },

  // 'Authority node identity': {
  //   Starter: 'Up to X',
  //   Team: 'Up to Y',
  //   Basic: 'Unlimited',
  //   Pro: 'Unlimited',
  //   Enterprise: 'Unlimited',
  //   Platform: 'Unlimited',
  // },
  // 'Authority node identity keys': {
  //   Starter: 'Up to X',
  //   Team: 'Up to Y',
  //   Basic: 'Unlimited',
  //   Pro: 'Unlimited',
  //   Enterprise: 'Unlimited',
  //   Platform: 'Unlimited',
  // },

  // 'Project enrollers': {
  //   Starter: 'Up to X',
  //   Team: 'Up to Y',
  //   Basic: 'Unlimited',
  //   Pro: 'Unlimited',
  //   Enterprise: 'Unlimited',
  //   Platform: 'Unlimited',
  // },
  'Project members': {
    Free: 'Up to 2',
    Premium: 'Up to 10',
    Small: 'Unlimited',
    Medium: 'Unlimited',
    Large: 'Unlimited',
    'Business Critical': 'Unlimited',
    Platform: 'Unlimited',
  },

  'Enrollment methods': {
    Free: '1',
    Premium: '1',
    Small: 'Up to 2',
    Medium: 'Unlimited',
    Large: 'Unlimited',
    'Business Critical': 'Unlimited',
  },

  'Project nodes': {
    Free: 'Up to 5',
    Premium: 'Up to 10',
    Small: '40 included',
    Medium: 'Unlimited',
    Large: 'Unlimited',
    'Business Critical': 'Unlimited',
    Platform: 'Unlimited',
  },

  // 'Encrypted relays': {
  //   Starter: 'Up to X',
  //   Team: 'Up to Y',
  //   Basic: 'Unlimited',
  //   Pro: 'Unlimited',
  //   Enterprise: 'Unlimited',
  //   Platform: 'Unlimited',
  // },
  // 'Team members': {
  //   Starter: 'Up to X',
  //   Team: 'Up to Y',
  //   Basic: 'Unlimited',
  //   Pro: 'Unlimited',
  //   Enterprise: 'Unlimited',
  //   Platform: 'Unlimited',
  // },
  Identities: {
    Free: 'Up to 5',
    Premium: 'Up to 5',
    Small: 'Up to 20',
    Medium: 'Unlimited',
    Large: 'Unlimited',
    'Business Critical': 'Unlimited',
    Platform: 'Unlimited',
  },
  'Included data transfer': {
    Free: '10/GB/mo',
    Premium: '20/GB/mo',
    Small: '80/GB/mo',
    Medium: '2,000/GB/mo',
    Large: '50,000/GB/mo',
    'Business Critical': 'Custom',
    Platform: 'Custom',
  },
};

const tierColor = (tier: Tier): string | undefined =>
  SEGMENTS.find((s) => s.tiers.includes(tier.name))?.color;

const tierColorLight = (tier: Tier): string | undefined =>
  chroma(tierColor(tier) || 'white')
    .brighten(2.5)
    .desaturate(0.4)
    .hex();
const tierColorDark = (tier: Tier): string | undefined =>
  chroma(tierColor(tier) || 'black')
    .darken(0.75)
    .saturate(0.75)
    .hex();

const tierLimit = (tier: Tier, feature: Feature): string | undefined => {
  if (feature.name in LIMITS) {
    return LIMITS[feature.name][tier.name];
  }
  return undefined;
};
export type { Tier, Feature };
export { SEGMENTS, TIERS, FEATURES, LIMITS, tierColor, tierColorDark, tierColorLight, tierLimit };
