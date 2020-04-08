import React from 'react';
import styled from '@emotion/styled';
import { space, color, layout } from 'styled-system';
import PropTypes from 'prop-types';

import Content from './Content';

const Wrapper = styled('div')(
  {
    marginBottom: '18rem',
  },
  space,
  color,
  layout
);

Wrapper.defaultProps = {
  backgroundColor: 'background',
};

const PageSection = ({ children, ...rest }) => (
  <Wrapper {...rest}>
    <Content>{children}</Content>
  </Wrapper>
);

PageSection.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default PageSection;
