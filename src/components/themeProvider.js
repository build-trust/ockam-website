import * as React from 'react';
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';
import PropTypes from 'prop-types';

import defaultTheme from '../theme/defaultTheme';
import lightTheme from '../theme/lightTheme';
import blogTheme from '../theme/blogTheme';

const theme = {
  dark: defaultTheme,
  light: lightTheme,
  blog: blogTheme,
};

const ThemeProvider = ({ children, themeName, themeConfig = {} }) => {
  return (
    <EmotionThemeProvider theme={{ ...theme[themeName],  ...themeConfig }}>
      {children}
    </EmotionThemeProvider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  themeConfig: PropTypes.shape({}),
  themeName: PropTypes.oneOf(['light', 'dark']),
};

ThemeProvider.defaultProps = {
  themeConfig: {},
  themeName: 'dark',
};

export default ThemeProvider;
