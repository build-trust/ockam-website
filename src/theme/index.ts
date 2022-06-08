import { extendTheme, theme as base } from '@chakra-ui/react';

import colors from './colors';
import { globalStyles } from './styles';
import components from './components';

const fontFamily = {
  inter: `'Inter', sans-serif`,
} as const;

const fontWeights = {
  regular: 400, // same as 'normal' from default chakra theme
};

const fontSizes = {
  '4.5xl': '2.5rem',
  '10xl': '8.75rem',
  '6.25xl': '6.25rem',
};

const space = {
  30: '7.5rem', // 120px
};

const gradients = {
  primaryGradient: 'linear-gradient(142.21deg, #4FDAB8 4.44%, #52C7EA 94.64%)',
  secondaryGradient: 'linear-gradient(296.58deg, #36A7C9 -6.45%, #3AC6A3 96.92%)',
};

const themeExtension = {
  styles: { global: globalStyles },
  fonts: {
    body: `${fontFamily.inter}, ${base.fonts.body}`,
    heading: `${fontFamily.inter}, ${base.fonts.heading}`,
  },
  components,
  colors,
  gradients,
  space,
  fontWeights,
  fontSizes,
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
};

const theme = extendTheme(themeExtension);

export default theme;
