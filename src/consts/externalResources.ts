import { HiStar } from 'react-icons/hi';

import LinkedinIcon from '@assets/icons/linkedin.svg';
import TwitterIcon from '@assets/icons/twitter.svg';
import GitHubIcon from '@assets/icons/github.svg';

export const CONTACT = { href: 'mailto:hello@ockam.io' };

export const LINKEDIN = {
  name: 'LinkedIn',
  href: 'https://www.linkedin.com/company/ockam.io/',
  icon: LinkedinIcon,
};

export const AWS_MARKETPLACE = {
  name: 'Ockam Orchestrator on AWS Marketplace',
  href: 'https://aws.amazon.com/marketplace/pp/prodview-wsd42efzcpsxk',
};

export const TWITTER = {
  name: 'Twitter',
  href: 'https://twitter.com/ockam',
  icon: TwitterIcon,
};

export const GITHUB = { name: 'GitHub', href: 'https://github.com/build-trust', icon: GitHubIcon };
export const GITHUB_REPO_OCKAM = { href: 'https://github.com/build-trust/ockam', icon: HiStar };

export const SUPPORT = {
  name: 'Support',
  href: 'https://github.com/build-trust/ockam/discussions/categories/support',
};

export const DISCUSSION = {
  name: 'Discussion',
  href: 'https://github.com/build-trust/ockam/discussions',
};

export const DISCORD = {
  name: 'Discord',
  href: 'https://discord.gg/RAbjRr3kds',
};

export const DOCS = {
  name: 'docs.ockam.io',
  href: 'https://docs.ockam.io',
};

export const BUILD_DEMO = { href: '/download' };

export default [
  CONTACT,
  AWS_MARKETPLACE,
  LINKEDIN,
  TWITTER,
  GITHUB,
  GITHUB_REPO_OCKAM,
  SUPPORT,
  DISCUSSION,
  DISCORD,
  BUILD_DEMO,
  DOCS,
];
