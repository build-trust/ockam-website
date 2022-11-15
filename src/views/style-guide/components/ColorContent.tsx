import { FunctionComponent } from 'react';
import { Box, Text } from '@chakra-ui/react';

import { TColorsContent } from '@root/typings/StyleGuide';

import ColorCard from './ColorCard';

const ColorContent: FunctionComponent<TColorsContent> = ({ heading, text, colors }) => (
  <Box minWidth={20} width="100%">
    <Box marginTop={5}>
      <Text color="brand.900" fontWeight="bold" fontSize="lg" marginBottom={3}>
        {heading}
      </Text>
      <Text color="gray.500" fontSize="sm">
        {text}
      </Text>
      <Box display="flex" flexWrap="wrap" gap={10} mt={10} justifyContent="space-between">
        {colors.map(color => (
          <ColorCard key={color.name} {...color} />
        ))}
      </Box>
    </Box>
  </Box>
);

export default ColorContent;
