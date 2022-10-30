import React, { FunctionComponent } from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

import { LogoContent } from '@typings/StyleGuide';

import LogoCard from './components/LogoCard';

type OurLogoSectionProps = {
  logos: LogoContent[];
};

const OurLogoSection: FunctionComponent<OurLogoSectionProps> = ({ logos }) => (
  <Box width="100%" marginBottom={8}>
    <Box marginBottom={14}>
      <Heading as="h3" size={{ base: 'lg', lg: 'xl' }} fontWeight="bold" marginBottom={4}>
        Our logo
      </Heading>
      <Text fontSize={{ lg: 'lg' }} fontWeight={400}>
        Logo and Signet used on core website, and all marketing & print materials
      </Text>
    </Box>
    <Box
      display="flex"
      flexWrap="wrap"
      gap={10}
      justifyContent={{ base: 'center', xl: 'flex-start' }}
    >
      {logos.map((logo: LogoContent) => (
        <LogoCard key={logo.logo} {...logo} />
      ))}
    </Box>
  </Box>
);

export default OurLogoSection;