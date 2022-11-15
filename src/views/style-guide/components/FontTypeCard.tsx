import { FunctionComponent } from 'react';
import { Box, Text } from '@chakra-ui/react';

import { TFont } from '@root/typings/StyleGuide';

const FontTypeCard: FunctionComponent<TFont> = ({ heading, content }) => (
  <Box marginBottom={16}>
    <Box>
      <Text color="brand.900" fontSize="md" fontWeight="bold">
        {heading}
      </Text>
    </Box>
    <Box>
      {content.map(({ name, tag, font, ratio, size, weight }) => (
        <Box
          key={name + tag + size}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
          minH="100px"
          color="brand.900"
          my={{ base: '12px', md: '0px' }}
        >
          <Text
            color="brand.900"
            display={{ base: 'none', md: 'inherit' }}
            width="25%"
            fontSize={size}
            fontWeight={weight}
          >
            {tag}
          </Text>
          <Text
            color="brand.900"
            width={{ base: '30%', md: '25%' }}
            fontWeight={{ base: weight, md: 'normal' }}
          >
            {name}
          </Text>
          <Box
            width={{ base: '30%', md: '25%' }}
            textAlign="center"
            display="flex"
            flexDirection="column"
          >
            {font.map((element: string, index: number) => (
              <Text key={`${element}-${index+1}`} color="brand.900">
                {element}
              </Text>
            ))}
          </Box>
          <Box
            width={{ base: '30%', md: '25%' }}
            textAlign="right"
            display="flex"
            flexDirection="column"
          >
            {ratio.map((element: string, index: number) => (
              <Text key={`${element}-${index+1}`} color="brand.900">
                {element}
              </Text>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  </Box>
);

export default FontTypeCard;
