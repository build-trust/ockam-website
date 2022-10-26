import React, { FunctionComponent } from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import { LogoCard } from './components/LogoCard';

export const OurLogoSection: FunctionComponent = () => (
  <Box width="100%">
    <Box marginBottom="56px">
      <Heading as="h3" size={{ base: 'lg', lg: 'xl' }} fontWeight="bold" marginBottom="16px">
        Our logo
      </Heading>
      <Text fontSize={{ lg: 'lg' }} fontWeight={400}>
        Logo and Sygnet used on core website, and all marketing & print materials
      </Text>
    </Box>
    <Box
      display="flex"
      flexWrap="wrap"
      gap="44px"
      justifyContent={{ base: 'center', xl: 'flex-start' }}
    >
      {logosData.map((logoData, index) => (
        <LogoCard key={index} {...logoData} />
      ))}
    </Box>
  </Box>
);

const logosData = [
  {
    logo: 'logo_in_color',
    heading: 'Logo in colour',
    isDark: false,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae faucibus odio.',
  },
  {
    logo: 'logo_on_dark_bg',
    heading: 'Logo on the dark background',
    isDark: true,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae faucibus odio.',
  },
  {
    logo: 'black_on_white_logo',
    heading: 'Black on white logo',
    isDark: false,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae faucibus odio.',
  },
  {
    logo: 'white_on_dark_bg',
    heading: 'White on dark background logo',
    isDark: true,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae faucibus odio.',
  },
  {
    logo: 'sygnet_color',
    heading: 'Sygnet Colour',
    isDark: false,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae faucibus odio.',
  },
  {
    logo: 'sygnet_color_on_dark_bg',
    heading: 'Sygnet Colour aon Dark Background',
    isDark: true,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae faucibus odio.',
  },
  {
    logo: 'sygnet_black',
    heading: 'Sygnet Black',
    isDark: false,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae faucibus odio.',
  },
  {
    logo: 'sygnet_white',
    heading: 'Sygnet White',
    isDark: true,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae faucibus odio.',
  },
];
