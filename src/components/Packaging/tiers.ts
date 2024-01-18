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
  expanded: boolean;
};
const SEGMENTS: Segment[] = [
  { name: 'Developers', tiers: ['Free', 'Premium'], color: '#52C7EA', expanded: false },
  { name: 'Companies', tiers: ['Small', 'Medium', 'Large'], color: '#3AC6A3', expanded: true },
  { name: 'Enterprises', tiers: ['Business Critical'], color: '#744D95', expanded: false },
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
];

const FEATURES: Feature[] = [
  { name: 'Projects', tiers: ['*'], hasLimits: true, onCard: true },
  { name: 'Secure Channels', tiers: ['*'], hasLimits: true, onCard: true },

  { name: 'Attribute-based access controls', tiers: ['*'] },
  { name: 'Ockam Command', tiers: ['*'] },
  { name: 'Portals App', tiers: ['*'] },
  { name: 'Programming libraries', tiers: ['*'] },
  { name: 'Community-based support', tiers: ['Free', 'Premium'], onCard: true },
  { name: 'Ockam support', tiers: ['Small', 'Medium'], onCard: true },
  {
    name: 'Ockam support with Service Level Agreement',
    tiers: ['Large', 'Business Critical'],
    onCard: true,
  },
  {
    name: 'Uptime Service Level Agreement',
    tiers: ['Large', 'Business Critical'],
    onCard: true,
  },
  { name: 'Volume discounts', tiers: ['Large', 'Business Critical'], onCard: true },
  { name: 'Customized terms', tiers: ['Large', 'Business Critical'] },
  { name: 'Bring Your Own Cloud (BYOC)', tiers: ['Business Critical'], onCard: true },
  { name: 'Data transfer cap', tiers: ['Free', 'Premium'], hasLimits: true },
  {
    name: 'Data transfer',
    tiers: ['Small', 'Medium', 'Large', 'Business Critical'],
    hasLimits: true,
  },
];

const LIMITS: { [id: string]: { [id: string]: string } } = {
  Projects: {
    Free: '1',
    Premium: '1',
    Small: '1',
    Medium: '3',
    Large: '10',
    'Business Critical': 'Unlimited',
  },
  'Secure Channels': {
    Free: '1',
    Premium: '5',
    Small: '10',
    Medium: '100',
    Large: '1000',
    'Business Critical': 'Unlimited',
  },

  'Project authority nodes': {
    Free: 'Up to 1',
    Premium: 'Up to 1',
    Small: 'Unlimited',
    Medium: 'Unlimited',
    Large: 'Unlimited',
    'Business Critical': 'Unlimited',
  },
  'Credential authorities': {
    Free: 'Up to 1',
    Premium: 'Up to 1',
    Small: 'Unlimited',
    Medium: 'Unlimited',
    Large: 'Unlimited',
    'Business Critical': 'Unlimited',
  },
  'Data transfer cap': {
    Free: '1GB/day',
    Premium: '1GB/day',
  },
  'Data transfer': {
    Small: '$0.10/GB',
    Medium: '$0.10/GB',
    Large: '$0.10/GB',
    'Business Critical': '$0.10/GB',
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
