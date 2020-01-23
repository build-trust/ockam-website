import lightTheme from './lightTheme';
/* eslint-disable prefer-destructuring */
const fontSizes = Object.assign([...lightTheme.fontSizes], lightTheme.fontSizes);
fontSizes.body = fontSizes[3];
/* eslint-enable prefer-destructuring */

const colors = {...lightTheme.colors, accentBackground: "#F5F7F9" };

export default {
  ...lightTheme,
  fontSizes,
  colors,
}
