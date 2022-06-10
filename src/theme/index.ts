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

const sizes = {
  '2.5xl': '43.75rem', // 700px
};

const gradients = {
  primary: 'linear-gradient(142.21deg, #4FDAB8 4.44%, #52C7EA 94.64%)',
  secondary: 'linear-gradient(296.58deg, #36A7C9 -6.45%, #3AC6A3 96.92%)',
  tertiary: 'linear-gradient(180deg, rgba(79, 218, 184, 0) 20.47%, #4FDAB8 102.84%)',
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
  sizes,
  fontWeights,
  fontSizes,
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
};

const theme = extendTheme(themeExtension);

export default theme;
