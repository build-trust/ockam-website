import { chakra } from '@chakra-ui/react';

const Blockquote = chakra('blockquote', {
  baseStyle: {
    fontStyle: 'italic',
    color: 'gray.300',
    borderLeftWidth: '3px',
    borderColor: 'brand.500',
    ml: 0,
    pl: '2rem',
    mb: 8,
    mt: 8,
  },
});

export default Blockquote;
