import React from 'react';
import styled from '@emotion/styled';
import { space, color, layout } from 'styled-system';
import PropTypes from 'prop-types';
import { darken } from 'polished';

import Content from './Content';

const Wrapper = styled('div')(
  props => ({
    marginBottom: '18rem',
    backgroundColor: props.darkBg
      ? darken(0.02, props.theme.colors.background)
      : props.theme.colors.background,
  }),
  space,
  color,
  layout
);

const PageSection = ({ children, darkBg, ...rest }) => (
  <Wrapper darkBg={darkBg} {...rest}>
    <Content>{children}</Content>
  </Wrapper>
);

PageSection.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  darkBg: PropTypes.bool,
};

PageSection.defaultProps = {
  darkBg: false,
};

export default PageSection;
