import React, { forwardRef } from 'react';
import { Link as GatsbyLink } from 'gatsby';
import isAbsoluteUrl from 'is-absolute-url';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import {
  space,
  color,
  typography,
  layout,
  flexbox,
  position,
} from 'styled-system';

const ActionLink = styled('a')`
  cursor: pointer;
`;

const BaseLink = forwardRef(({ to, children, ...rest }, ref) => {
  const isAnchor = to ? false : to.charAt(0) === '#';
  if (isAnchor || isAbsoluteUrl(to)) {
    return (
      <a href={to} ref={ref} {...rest}>
        {children}
      </a>
    );
  }
  if (!to) {
    return (
      <ActionLink ref={ref} {...rest}>
        {children}
      </ActionLink>
    );
  }
  return (
    <GatsbyLink ref={ref} to={to} {...rest}>
      {children}
    </GatsbyLink>
  );
});

const Link = styled(BaseLink)`
  ${space};
  ${color};
  ${typography};
  ${layout};
  ${flexbox}
  ${position}
  transition: all 150ms ease-in-out;
  color: ${props => props.theme.colors.link.default};
  :hover {
    color: ${props => props.theme.colors.link.hover};
    svg {
      color: ${props => props.theme.colors.link.hover};
    }
  }
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
};

export default Link;
