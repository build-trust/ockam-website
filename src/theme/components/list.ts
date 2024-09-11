import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system';
import { listAnatomy as parts } from '@chakra-ui/anatomy';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(parts.keys);

const config = {
  baseStyle: definePartsStyle(() => ({
    container: {
      mb: 6,
    },
  })),
  variants: {
    readabilityOptimized: definePartsStyle(() => ({
      container: {
        maxW: '45em',
        letterSpacing: '-0.2px',
      },
    })),
  },
};
export const List = defineMultiStyleConfig(config);

export default List;
export { List as UnorderedList };
