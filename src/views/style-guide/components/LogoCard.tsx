/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { FunctionComponent } from 'react';
import { Box, Text } from '@chakra-ui/react';
import Image from 'next/image';

import { TLogoContent } from '@root/typings/StyleGuide';
import { downloadOptions } from '@root/consts/styleGuide/logos';
import DownloadImage from '@root/components/DownloadImage';

const LogoCard: FunctionComponent<TLogoContent> = ({ isDark, logo, heading, description }) => (
  <Box minWidth={20} width={{ base: '100%', md: 'calc(33% - 26px)' }}>
    <Box
      backgroundColor={isDark ? 'brand.900' : 'white'}
      borderRadius={4}
      height={246}
      display="flex"
      alignItems="center"
      justifyContent="center"
      borderWidth={1}
      position="relative"
    >
      <Box width="50%" height="50%" position="relative">
        <Image objectFit="contain" layout="fill" src={`/style-guide/logo/${logo}.png`} />
      </Box>
      <DownloadImage downloadOptions={downloadOptions} folderName="style-guide/logo" imageName={logo} />
    </Box>
    <Box marginTop={5}>
      <Text color="brand.900" fontWeight="bold" fontSize="lg" marginBottom={3}>
        {heading}
      </Text>
      <Text color="gray.500" fontSize="sm">
        {description}
      </Text>
    </Box>
  </Box>
);

export default LogoCard;
