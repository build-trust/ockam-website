import { lighten } from 'polished';

import { BREAKPOINTS } from '../utils/rwd';

const colors = {
  dark: '#242A31',
  white: '#fff',
  dirtyWhite: '#D0DEFF',
  background: '#0A1A2B',
  accentBackground: '#162535',
  icon: '#e7e8e8',
  heading: '#fff',
  text: '#A2B6C7',
  code: '#e7e8e8',
  primary: '#52c7ea',
  dirtyPrimary: '#3C8DA9',
  accent: '#EC432D',
  secondary: '#a4a9bf',
  caption: '#7A8895',
};

/* eslint-disable prefer-destructuring */
const fontSizes = ['1.2rem', '1.4rem', '1.6rem', '1.8rem', '2rem', '2.5rem', '2.8rem', '3.2rem', '4rem', '4.6rem'];
  fontSizes.caption = fontSizes[0];
  fontSizes.body = fontSizes[3];
  fontSizes.bodySmall = fontSizes[2];
  fontSizes.h1 = fontSizes[8];
  fontSizes.h2 = fontSizes[7];
  fontSizes.h3 = fontSizes[6];
  fontSizes.h4 = fontSizes[5];
  fontSizes.h5 = fontSizes[4];
  fontSizes.h6 = fontSizes[3];

const	fonts = ['IBM Plex Sans'];
  fonts.heading = fonts[0];
  fonts.body = fonts[0];

const fontWeights = [300, 400, 500, 600, 700];
  fontWeights.body = fontWeights[1];
  fontWeights.heading = fontWeights[2];
  fontWeights.button = fontWeights[2];
  fontWeights.buttonSmall = fontWeights[1];


const lineHeights = ['1.2', '1.5'];
  lineHeights.small = lineHeights[0];
  lineHeights.heading = lineHeights[1];
  lineHeights.body = lineHeights[1];

const radii = ['0.2rem', '0.4rem'];
  radii.default = radii[0];
  radii.button = radii[0];

const space = [0, '0.4rem', '0.8rem', '1.6rem', '3.2rem', '6.4rem', '12.8rem'];
  space.none = space[0];
  space.xSmall = space[1];
  space.small = space[2];
  space.medium = space[3];
  space.large = space[4];
  space.xLarge = space[5];
  space.huge = space[6];

const sizes = [8, 16, 24, 32, 48, 64];

const breakpoints = [`${BREAKPOINTS.phone}px`, `${BREAKPOINTS.tablet}px`, `${BREAKPOINTS.desktop}px`, `${BREAKPOINTS.ultraWide}px`];
  breakpoints.sm = breakpoints[0];
  breakpoints.md = breakpoints[1];
  breakpoints.lg = breakpoints[2];
  breakpoints.xl = breakpoints[3];
  breakpoints.phone = breakpoints[0];
  breakpoints.tablet = breakpoints[1];
  breakpoints.desktop = breakpoints[2];
  breakpoints.ultraWide = breakpoints[3];

/* eslint-enable prefer-destructuring */

const custom = {
  sidebar: {
    backgroundColor: colors.accentBackground,
    itemColor: '#a4a9bf',
    itemColorActive: colors.heading,
    customScrollTruckColor: lighten(0.15, colors.accentBackground),
    customScrollThumbColor: lighten(0.25, colors.accentBackground),
  },
  button: {
    textColor: colors.text,
  },
  menu: {
    textColor: colors.text,
  },
  code: {
    backgroundColor: colors.accentBackground,
  },
};

const defaultTheme = {
  name: 'dark',
  colors,
  fontSizes,
  lineHeights,
  fontWeights,
  fonts,
  radii,
  space,
  sizes,
  custom,
  breakpoints,
};

export default defaultTheme;
