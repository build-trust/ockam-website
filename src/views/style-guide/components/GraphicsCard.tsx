/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { FunctionComponent } from 'react';
import { Box, Text } from '@chakra-ui/react';
import Image from 'next/image';

import { TGraphicsContent } from '@root/typings/StyleGuide';
import { downloadOptions } from '@root/consts/styleGuide/logos';
import DownloadImage from '@root/components/DownloadImage';

const GraphicsCard: FunctionComponent<TGraphicsContent> = ({
  image,
  width,
  height,
  mobileHeight,
  heading,
  text,
}) => (
  <Box
    display="flex"
    flexDirection="column"
    width={{ base: '100%', md: width }}
    height={{ base: mobileHeight, md: height }}
  >
    <Box
      borderRadius={4}
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="relative"
      width="100%"
      height="100%"
    >
      <Image objectFit="cover" layout="fill" src={`/style-guide/graphics/${image}.png`} />
      <DownloadImage downloadOptions={downloadOptions} folderName="style-guide/graphics" imageName={image} />
    </Box>
    <Box marginTop={5}>
      <Text color="brand.900" fontWeight="bold" fontSize="lg" marginBottom={3}>
        {heading}
      </Text>
      <Text color="gray.500" fontSize="sm">
        {text}
      </Text>
    </Box>
  </Box>
);

export default GraphicsCard;
