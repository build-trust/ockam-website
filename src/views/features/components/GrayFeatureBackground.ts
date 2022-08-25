import { chakra, Box } from '@chakra-ui/react';

const GrayFeatureBackground = chakra(Box, {
  baseStyle: {
    bgColor: 'gray.50',
    zIndex: '1',
    position: 'absolute',
    height: '100%',
    width: '100vw',
    left: { base: 'calc(-100vw + 50% - 8px)', xl: 'calc(-100vw + 50% - 140px - 44px)' },
    transform:  'translateX(50%)',
  },
});

export default GrayFeatureBackground;
