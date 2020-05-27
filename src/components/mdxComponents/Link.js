import * as React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import dropRight from 'lodash/dropRight';
import isString from 'lodash/isString';

import BaseLink from '../Link';
import useLocation from '../../hooks/useLocation';

const StyledLink = styled(BaseLink)`
  text-decoration: underline;
  color: ${props => props.theme.colors.primary};
`;

const isRelativePath = path => {
  return path.match(/^\.\/+/);
};

const getBasePathToFolder = path => {
  let basePath = path;
  if (basePath.charAt(basePath.length) === '/')
    basePath = basePath.substring(0, basePath.length);
  return dropRight(basePath.split('/'), 2).join('/');
};

const Link = ({ children: link, href }) => {
  const isAnchor = isString(href) && href.charAt(0) === '#';
  const location = useLocation();

  if (!link) return null;
  if (isAnchor) return <StyledLink href={href}>{link}</StyledLink>;
  let to = href;
  if (isRelativePath(to) && !isAnchor) {
    const toPath = to.substr(2);
    const basePath = getBasePathToFolder(location.pathname);
    to = `${basePath}/${toPath}`;
  }
  return <StyledLink to={to}>{link}</StyledLink>;
};

Link.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  href: PropTypes.string.isRequired,
};

export default Link;
