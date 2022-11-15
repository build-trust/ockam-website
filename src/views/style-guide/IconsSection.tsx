/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import React, { FunctionComponent } from 'react';
import { Box, Heading, Text, Image } from '@chakra-ui/react';
// import Image from 'next/image';

type IconsSectionProps = {
  icons: string[];
};

const IconsSection: FunctionComponent<IconsSectionProps> = ({ icons }) => (
  <Box width="100%" marginBottom={16}>
  <Box marginBottom={14}>
    <Heading as="h3" size={{ base: 'lg', lg: 'xl' }} fontWeight="bold" marginBottom={4}>
      Icons
    </Heading>
    <Text fontSize={{ lg: 'lg' }} fontWeight="regular">
      Set of the icons that are used on websites
    </Text>
  </Box>
  <Box display="flex" flexWrap="wrap" gap={8} justifyContent="flex-start">
    {icons.map((image: string) => (
      <Box key={image}>
        <Image src={`data:image/svg+xml;base64,${image}`} width="25px" height="24px" />
      </Box>
    ))}
  </Box>
</Box>
);

export default IconsSection;
