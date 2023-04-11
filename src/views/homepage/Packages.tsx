import { FunctionComponent } from 'react';
import { Container, Box, SimpleGrid } from '@chakra-ui/react';
import { CheckCircleIcon, SmallCloseIcon } from '@chakra-ui/icons';

import CloudIcon from '@assets/icons/cloud.svg';
import PackagesIcon from '@assets/icons/packages.svg';
import ActionButton from '@components/Packaging/ActionButton';
import PricingCard from '@components/Packaging/PricingCard';

const CARDS = [
  {
    icon: PackagesIcon,
    title: 'Pichu',
    text: 'The Tools for Builders',
    price: '$X',
    price_interval: 'mo',
    isPopular: true,
    items: [
      { text: 'Team members: Up to X', icon: CheckCircleIcon, has: true },
      { text: 'Identities: Up to X', icon: CheckCircleIcon, has: true },
      { text: 'Included data transfer: Y/GB/mo', icon: CheckCircleIcon, has: true },
      { text: 'Cloud managed', icon: CheckCircleIcon, has: true },
      { text: 'Attribute-based Access Controls', icon: CheckCircleIcon, has: true },
      { text: 'Ockam Command', icon: CheckCircleIcon, has: true },
      { text: 'Programming libraries', icon: CheckCircleIcon, has: true },
      { text: 'Community-based support', icon: CheckCircleIcon, has: true },
      { text: 'Ockam support', icon: SmallCloseIcon, has: false },
      { text: 'Premium Ockam support', icon: SmallCloseIcon, has: false },
      { text: 'Volume discounts', icon: SmallCloseIcon, has: false },
    ],
    link: {
      label: 'Get Started',
      href: 'https://docs.ockam.io/',
    },
  },
  {
    icon: CloudIcon,
    title: 'Squirtle',
    price: '$X',
    price_interval: 'mo',
    text: 'The Service for Enterprises',
    items: [
      { text: 'Team members: Up to X', icon: CheckCircleIcon, has: true },
      { text: 'Identities: Up to X', icon: CheckCircleIcon, has: true },
      { text: 'Included data transfer: Y/GB/mo', icon: CheckCircleIcon, has: true },
      { text: 'Cloud managed', icon: CheckCircleIcon, has: true },
      { text: 'Attribute-based Access Controls', icon: CheckCircleIcon, has: true },
      { text: 'Ockam Command', icon: CheckCircleIcon, has: true },
      { text: 'Programming libraries', icon: CheckCircleIcon, has: true },
      { text: 'Community-based support', icon: CheckCircleIcon, has: true },
      { text: 'Ockam support', icon: CheckCircleIcon, has: true },
      { text: 'Premium Ockam support', icon: SmallCloseIcon, has: false },
      { text: 'Volume discounts', icon: SmallCloseIcon, has: false },
    ],
    link: {
      label: 'Get started',
      href: 'https://docs.ockam.io/',
    },
  },
  {
    icon: CloudIcon,
    title: 'Pickachu',
    price: '$X',
    price_unit: 'node',
    price_interval: 'mo',
    text: 'The Service for Enterprises',
    items: [
      { text: 'Team members: <strong>Unlimited</strong>', icon: CheckCircleIcon, has: true },
      { text: 'Identities: <strong>Unlimited</strong>', icon: CheckCircleIcon, has: true },
      { text: 'Included data transfer: Y/GB/mo', icon: CheckCircleIcon, has: true },
      { text: 'Cloud managed', icon: CheckCircleIcon, has: true },
      { text: 'Attribute-based Access Controls', icon: CheckCircleIcon, has: true },
      { text: 'Ockam Command', icon: CheckCircleIcon, has: true },
      { text: 'Programming libraries', icon: CheckCircleIcon, has: true },
      { text: 'Community-based support', icon: CheckCircleIcon, has: true },
      { text: 'Ockam support', icon: CheckCircleIcon, has: true },
      { text: 'Premium Ockam support', icon: SmallCloseIcon, has: false },
      { text: 'Volume discounts', icon: SmallCloseIcon, has: false },
    ],
    link: {
      label: 'Get started',
      href: 'https://docs.ockam.io/',
    },
  },
  {
    icon: CloudIcon,
    title: 'Raichu',
    price: 'Contact sales',
    text: 'The Service for Enterprises',
    items: [
      { text: 'Team members: <strong>Unlimited</strong>', icon: CheckCircleIcon, has: true },
      { text: 'Identities: <strong>Unlimited</strong>', icon: CheckCircleIcon, has: true },
      { text: 'Included data transfer: Y/GB/mo', icon: CheckCircleIcon, has: true },
      { text: 'Cloud managed', icon: CheckCircleIcon, has: true },
      { text: 'Attribute-based Access Controls', icon: CheckCircleIcon, has: true },
      { text: 'Ockam Command', icon: CheckCircleIcon, has: true },
      { text: 'Programming libraries', icon: CheckCircleIcon, has: true },
      { text: 'Community-based support', icon: CheckCircleIcon, has: true },
      { text: 'Ockam support', icon: CheckCircleIcon, has: true },
      { text: 'Premium Ockam support', icon: CheckCircleIcon, has: true },
      { text: 'Volume discounts', icon: CheckCircleIcon, has: true },
    ],
    link: {
      label: 'Contact sales',
      href: 'https://docs.ockam.io/',
    },
  },
];

const Packages: FunctionComponent = () => (
  <Container id="pricing" variant="section" py={{ base: 16, lg: 24 }}>
    <Box as="section" py="14" px={{ base: '4', md: '8' }}>
      <SimpleGrid
        columns={{ base: 1, lg: 4 }}
        spacing={{ base: '8', lg: '0' }}
        maxW="7xl"
        mx="auto"
        justifyItems="center"
        alignItems="stretch"
      >
        {CARDS.map((card) => (
          <PricingCard
            data={{
              price: card.price,
              name: card.title,
              priceUnit: card.price_unit,
              priceInterval: card.price_interval,
              features: card.items,
            }}
            icon={CloudIcon}
            isPopular={card.isPopular}
            display="flex"
            flexDirection="column"
            button={
              <ActionButton variant="outline" borderWidth="2px" mt={2} mb={8}>
                {card.link.label}
              </ActionButton>
            }
          />
        ))}
      </SimpleGrid>
    </Box>
  </Container>
);

export default Packages;
