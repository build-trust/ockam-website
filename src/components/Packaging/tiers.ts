import chroma from 'chroma-js';

import { CONTACT_FORM_PATH } from '@root/consts/paths';

type Cta = {
  text: string;
  url: string;
};

type MarketplaceDetails = {
  link: string;
};
type Marketplaces = {
  [key: string]: MarketplaceDetails;
};
type Tier = {
  name: string;
  text: string;
  price: number;
  price_interval?: string;
  price_unit?: string;
  floor?: string;
  onlyFloor?: boolean;
  cta: Cta;
  marketplaceOnly?: boolean;
  sponsorship?: boolean;
  contactSalesOnly?: boolean;
  marketplaces?: Marketplaces;
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
  text: string;
};
const SEGMENTS: Segment[] = [
  {
    name: 'Developers',
    tiers: ['Free', 'Premium'],
    color: '#52C7EA',
    expanded: false,
    text: 'The Developer editions of Ockam are intended to be used by individual developers, that are working on hobby projects, and not by companies. Support is via our community in Discord and GitHub, and does not come with an SLA. If you are using Portals for Mac you will need a developer edition license to use the application.',
  },
  {
    name: 'Companies',
    tiers: ['Bronze', 'Silver', 'Gold', 'Platinum'],
    color: '#3AC6A3',
    expanded: true,
    text: "Ockam's Company Editions are built for production workloads, with direct support from the Ockam team, and can elastically scale to your needs. This product is purchased through your cloud marketplace vendor, so you can start building today with your 14 day free trial.",
  },
  {
    name: 'Enterprises',
    tiers: ['Enterprise', 'Business Critical'],
    color: '#744D95',
    expanded: false,
    text: 'Ockam is offered in a bring-your-own-cloud (BYOC) Enterprise Edition for companies that are committed to running software entirely within their own network boundaries. These plans are highly customizable. Please contact Ockam’s sales team for a technical consultation.',
  },
];
const TIERS: Tier[] = [
  {
    name: 'Free',
    text: 'The Tools for Builders',
    price: 0,
    price_interval: 'mo',
    cta: {
      text: 'Get started →',
      url: '/get-started',
    },
    marketplaces: {
      aws: {
        link: 'https://aws.amazon.com/marketplace/pp/prodview-m3url7jixicii',
      },
    },
  },

  {
    name: 'Premium',
    text: 'The Tools for Builders',
    price: 5,
    price_interval: 'mo',
    cta: {
      text: 'Start 14-day trial →',
      url: '/get-started',
    },
    marketplaces: {
      aws: {
        link: 'https://aws.amazon.com/marketplace/pp/prodview-m3url7jixicii',
      },
    },
    sponsorship: true,
  },

  {
    name: 'Bronze',
    text: 'The Tools for Builders',
    price: 500,
    price_interval: 'mo',
    onlyFloor: true,
    cta: {
      text: 'Start 14-day trial →',
      url: '/get-started',
    },
    marketplaceOnly: true,
    marketplaces: {
      aws: {
        link: 'https://aws.amazon.com/marketplace/pp/prodview-m3url7jixicii',
      },
      azure: {
        link: `${CONTACT_FORM_PATH}?feature=marketplace&marketplace=azure`,
      },
      gcp: {
        link: `${CONTACT_FORM_PATH}?feature=marketplace&marketplace=gcp`,
      },
    },
  },
  {
    name: 'Silver',
    text: 'The Tools for Builders',
    price: 2500,
    price_interval: 'mo',
    onlyFloor: true,
    cta: {
      text: 'Start 14-day trial →',
      url: '/get-started',
    },
    marketplaceOnly: true,
    marketplaces: {
      aws: {
        link: 'https://aws.amazon.com/marketplace/pp/prodview-m3url7jixicii',
      },
      azure: {
        link: `${CONTACT_FORM_PATH}?feature=marketplace&marketplace=azure`,
      },
      gcp: {
        link: `${CONTACT_FORM_PATH}?feature=marketplace&marketplace=gcp`,
      },
    },
  },
  {
    name: 'Gold',
    text: 'The Tools for Builders',
    price: 10000,
    price_interval: 'mo',
    onlyFloor: true,
    cta: {
      text: 'Start 14-day trial →',
      url: '/get-started',
    },
    marketplaceOnly: true,
    marketplaces: {
      aws: {
        link: 'https://aws.amazon.com/marketplace/pp/prodview-m3url7jixicii',
      },
      azure: {
        link: `${CONTACT_FORM_PATH}?feature=marketplace&marketplace=azure`,
      },
      gcp: {
        link: `${CONTACT_FORM_PATH}?feature=marketplace&marketplace=gcp`,
      },
    },
  },

  {
    name: 'Platinum',
    text: 'The Tools for Builders',
    price: 250000,
    price_interval: 'yr',
    onlyFloor: true,
    cta: {
      text: 'Talk to sales →',
      url: `${CONTACT_FORM_PATH}`,
    },
    marketplaces: {
      aws: {
        link: 'https://aws.amazon.com/marketplace/pp/prodview-m3url7jixicii',
      },
    },
    contactSalesOnly: true,
  },
  {
    name: 'Enterprise',
    text: '',
    price: 500000,
    price_interval: 'yr',
    onlyFloor: true,
    cta: {
      text: 'Talk to sales →',
      url: `${CONTACT_FORM_PATH}`,
    },
    marketplaces: {
      aws: {
        link: 'https://aws.amazon.com/marketplace/pp/prodview-m3url7jixicii',
      },
    },
    contactSalesOnly: true,
  },
  {
    name: 'Business Critical',
    text: 'The Tools for Builders',
    price: 1000000,
    price_interval: 'yr',
    onlyFloor: true,
    cta: {
      text: 'Talk to sales →',
      url: `${CONTACT_FORM_PATH}`,
    },
    marketplaces: {
      aws: {
        link: 'https://aws.amazon.com/marketplace/pp/prodview-m3url7jixicii',
      },
    },
    contactSalesOnly: true,
  },
];

const FEATURES: Feature[] = [
  {
    name: 'Production License',
    tiers: ['Bronze', 'Silver', 'Gold', 'Platinum', 'Enterprise', 'Business Critical'],
    onCard: true,
  },
  { name: 'Pay-as-you-go', tiers: ['Free', 'Premium', 'Bronze', 'Silver', 'Gold'], onCard: true },
  { name: 'Bring Your Own Cloud (BYOC) Relays', tiers: ['Business Critical'], onCard: true },
  {
    name: 'Bring Your Own Cloud (BYOC) Credential Authorities',
    tiers: ['Business Critical'],
    onCard: true,
  },
  {
    name: 'Ockam support',
    tiers: ['Bronze'],
    onCard: true,
  },
  {
    name: 'Ockam support - 24hr response time SLA',
    tiers: ['Silver'],
    onCard: true,
  },
  {
    name: 'Ockam support - 4hr response time SLA',
    tiers: ['Gold', 'Platinum', 'Enterprise', 'Business Critical'],
    onCard: true,
  },

  {
    name: 'Uptime 99% SLA',
    tiers: ['Silver'],
    onCard: true,
  },
  {
    name: 'Uptime 99.95% SLA',
    tiers: ['Gold', 'Platinum', 'Enterprise', 'Business Critical'],
    onCard: true,
  },

  // { name: 'Long-term contracts', tiers: ['Gold', 'Business Critical'], onCard: true },
  // { name: 'Customized terms', tiers: ['Platinum', 'Enterprise', 'Business Critical'] },

  { name: 'Community-based support', tiers: ['Free', 'Premium'], onCard: true },
  { name: 'Dedicated nodes', tiers: ['Silver'], onCard: true },
  {
    name: 'Throughput optimized nodes',
    tiers: ['Gold', 'Platinum', 'Enterprise', 'Business Critical'],
    onCard: true,
  },
  {
    name: 'Yearly commit - 20% discount included ',
    tiers: ['Platinum', 'Enterprise', 'Business Critical'],
    onCard: true,
  },

  { name: 'Attribute-based access controls', tiers: ['*'] },
  { name: 'Ockam Command', tiers: ['*'] },
  { name: 'Portals for Mac', tiers: ['*'] },
  { name: 'Programming libraries', tiers: ['*'] },
  { name: 'Secure Channels', tiers: ['*'], hasLimits: true },
  {
    name: 'Secure Channels supported within SLAs',
    tiers: ['Silver', 'Gold', 'Platinum', 'Enterprise', 'Business Critical'],
    hasLimits: true,
  },
  { name: 'Projects', tiers: ['*'], hasLimits: true },
  {
    name: 'Custom Branding / Whitelabel',
    tiers: ['Platinum', 'Enterprise', 'Business Critical'],
    onCard: true,
  },
  {
    name: 'High Availability Relays',
    tiers: ['Platinum', 'Enterprise', 'Business Critical'],
    onCard: true,
  },
  {
    name: 'High Availability Credential Authorities',
    tiers: ['Platinum', 'Enterprise', 'Business Critical'],
    onCard: true,
  },
  {
    name: 'High Availability Multi-region',
    tiers: ['Enterprise', 'Business Critical'],
    onCard: true,
  },
  {
    name: 'High Availability Rendezvous Routing',
    tiers: ['Enterprise', 'Business Critical'],
    onCard: true,
  },
  { name: 'Custom Routes', tiers: ['Enterprise', 'Business Critical'], onCard: true },
  {
    name: 'Data transfer',
    tiers: ['Bronze', 'Silver', 'Gold', 'Platinum', 'Enterprise', 'Business Critical'],
    hasLimits: true,
  },
  { name: 'Data transfer cap', tiers: ['Free', 'Premium'], hasLimits: true },
];

const LIMITS: { [id: string]: { [id: string]: string } } = {
  Projects: {
    Free: '1',
    Premium: '1',
    Bronze: '1',
    Silver: '3',
    Gold: '10',
    Platinum: 'Unlimited',
    Enterprise: 'Unlimited',
    'Business Critical': 'Unlimited',
  },
  'Secure Channels': {
    Free: '1',
    Premium: '5',
    Bronze: '10',
    Silver: 'Unlimited',
    Gold: 'Unlimited',
    Platinum: 'Unlimited',
    Enterprise: 'Unlimited',
    'Business Critical': 'Unlimited',
  },
  'Secure Channels supported within SLAs': {
    Silver: '100',
    Gold: '1000',
    Platinum: 'Unlimited',
    Enterprise: 'Unlimited',
    'Business Critical': 'Unlimited',
  },

  'Project authority nodes': {
    Free: 'Up to 1',
    Premium: 'Up to 1',
    Bronze: 'Unlimited',
    Silver: 'Unlimited',
    Gold: 'Unlimited',
    'Business Critical': 'Unlimited',
  },
  'Credential authorities': {
    Free: 'Up to 1',
    Premium: 'Up to 1',
    Bronze: 'Unlimited',
    Silver: 'Unlimited',
    Gold: 'Unlimited',
    'Business Critical': 'Unlimited',
  },
  'Data transfer cap': {
    Free: '1GB/day',
    Premium: '1GB/day',
  },
  'Data transfer': {
    Bronze: '$0.10/GB',
    Silver: '$0.10/GB',
    Gold: '$0.10/GB',
    Platinum: '$0.00 - $0.10/GB',
    Enterprise: '$0.00 - $0.10/GB',
    'Business Critical': '$0.00 - $0.10/GB',
  },
};

const darken = (color: string): string | undefined =>
  chroma(color).darken(0.75).saturate(0.75).hex();

const lighten = (color: string): string | undefined =>
  chroma(color).brighten(2.5).desaturate(0.4).hex();

const gentlyLighten = (color: string): string | undefined =>
  chroma(color).brighten(1.5).desaturate(0.75).hex();

const tierColor = (tier: Tier): string | undefined =>
  SEGMENTS.find((s) => s.tiers.includes(tier.name))?.color;

const tierColorLight = (tier: Tier): string | undefined => lighten(tierColor(tier) || 'white');

const tierColorDark = (tier: Tier): string | undefined => darken(tierColor(tier) || 'black');

const tiersForSegment = (segmentName: string): Tier[] => {
  const segment = SEGMENTS.find((s) => s.name === segmentName);
  if (segment) {
    const tiers = TIERS.filter((t) => segment.tiers.includes(t.name));
    return tiers;
  }
  return [];
};

const featuresForTier = (tierName: string, cardOnly: boolean = true): Feature[] =>
  FEATURES.filter(
    (f) => f.tiers.includes(tierName) && (f.onCard === cardOnly || cardOnly === false),
  );

const hasFeature = (tier: Tier, feature: Feature): boolean => {
  if (feature.tiers.indexOf('*') >= 0) return true;
  if (feature.tiers.indexOf(tier.name) >= 0) return true;
  return false;
};

const tierLimit = (tier: Tier, feature: Feature): string | undefined => {
  if (feature.name in LIMITS) {
    return LIMITS[feature.name][tier.name];
  }
  return undefined;
};
export type { Tier, Feature, Segment };
export {
  SEGMENTS,
  TIERS,
  FEATURES,
  LIMITS,
  lighten,
  gentlyLighten,
  darken,
  tierColor,
  tierColorDark,
  tierColorLight,
  tierLimit,
  tiersForSegment,
  featuresForTier,
  hasFeature,
};
