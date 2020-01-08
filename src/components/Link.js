import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import isAbsoluteUrl from 'is-absolute-url';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { space, color, typography, layout } from 'styled-system';

const BaseLink = ({ to, children, ...rest }) => {
  const isAnchor = to ? false : to.charAt(0) === '#';
  if(isAnchor || isAbsoluteUrl(to)) {
    return <a href={to} {...rest}>{children}</a>
  }
  return <GatsbyLink to={to} {...rest}>{children}</GatsbyLink>
};

const Link = styled(BaseLink)`
  ${space};
  ${color};
  ${typography};
  ${layout};
`;

BaseLink.propTypes = {
  to: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

BaseLink.defaultProps = {
  to: '',
}

export default Link;
