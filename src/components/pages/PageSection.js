import React from 'react';
import styled from '@emotion/styled';
import { space, color } from 'styled-system';
import PropTypes from 'prop-types';

import Content from './Content';

const Wrapper = styled('div')(
  () => ({
    marginBottom: '14rem',
  }),
  space,
  color
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
