import { lighten } from 'polished';

import defaultTheme from './defaultTheme';

const colors = {
  dark: '#242A31',
  background: '#fff',
  accentBackground: '#E6ECF1',
  icon: '#9DAAB6',
  heading: '#242A31',
  text: '#3C454E',
  menuText: '#7A8895',
  menuTextActive: '#242A31',
  code: '#3C454E',
  primary: '#52c7ea',
  secondary: '#e9f7fc',
  caption: '#7A8895',
  white: '#fff',
  blogTextBackground: '#fff',
  inputBackground: '#F5F7F9',
  inputBorder: '#E3E8EE',
  inputText: '#0A1A2B',
  inputPlaceholder: '#A2B6C7',
  modalBackground: 'rgba(0,0,0,0.3)',
  modalShadow: 'rgba(60,69,78,0.8)',
  dropdownMenuBackground: "#fff",
  dropdownMenuItemHover: "#F5F7F9",
  dropdownMenuBorder: "#E6ECF1",
  dropdownMenuShadow: "rgba(116,129,141,0.1)",
  button: {
    primaryShadow: "rgba(82,199,234,0.4)",
    primaryActive: "#fff",
    whiteActiveBackground: "#E6E8EA",
    secondaryHover: "#00BAEA",
    secondaryActive: "#9DDFF2",
    secondaryText: "#25B8E4",
  },
  link: {
    default: '#7A8895',
    hover: '#242A31',
    active: '#3C454E',
  },
};

/* eslint-disable prefer-destructuring */
const fontSizes = Object.assign(
  [...defaultTheme.fontSizes],
  defaultTheme.fontSizes
);
fontSizes.body = fontSizes[2];
/* eslint-enable prefer-destructuring */

const lightTheme = {
  ...defaultTheme,
  fontSizes,
  name: 'light',
  colors: {
    ...defaultTheme.colors,
    ...colors,
  },
  custom: {
    ...defaultTheme.custom,
    sidebar: {
      ...defaultTheme.custom.sidebar,
      backgroundColor: 'white',
      itemColor: '#7A8895',
      itemColorActive: colors.heading,
      customScrollTruckColor: lighten(0.25, "#a4a9bf"),
      customScrollThumbColor: "#a4a9bf",
    },
    button: {
      ...defaultTheme.custom.button,
      textColor: 'white',
    },
    menu: {
      ...defaultTheme.custom.menu,
      textColor: '#7A8895',
    },
    code: {
      ...defaultTheme.custom.code,
      backgroundColor: '#F5F7F9',
    },
    table: {
      ...defaultTheme.custom.code,
      accentColor: '#F5F7F9',
    },
  },
};

export default lightTheme;
