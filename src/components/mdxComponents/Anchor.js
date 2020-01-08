import * as React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import Link from '../Link';

const StyledLink = styled(Link)`
  text-decoration: underline;
  color: ${props => props.theme.colors.primary}
`;

const AnchorTag = ({ children: link, href }) => {
  if (link) {
    return <StyledLink to={href}>{link}</StyledLink>;
  }
  return null;
};

AnchorTag.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  href: PropTypes.string.isRequired,
};

export default AnchorTag;
