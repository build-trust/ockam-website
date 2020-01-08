import lightTheme from './lightTheme';
/* eslint-disable prefer-destructuring */
const fontSizes = Object.assign([...lightTheme.fontSizes], lightTheme.fontSizes);
fontSizes.body = fontSizes[3];
/* eslint-enable prefer-destructuring */

export default {
  ...lightTheme,
  fontSizes,
}
