import React, { forwardRef } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import { media } from '../../utils/emotion';

import SidebarCrossIcon from './SidebarCrossIcon';

const Container = styled('aside')`
  overflow: auto;
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  padding-right: 0;
  min-width: 22rem;
  width: 22rem;
  height: 100vh;
  display: block;
  transition: transform 0.3s ease-in-out;
  background-color: ${props => props.theme.custom.sidebar.backgroundColor};
  border-radius: ${props => props.theme.radii.default};
  transform: ${({ isOpen }) =>
    (isOpen ? 'translateX(0)' : 'translateX(-100%)')};
  padding-top: 6rem;
  ${media.desktop`
     display: flex;
     position: sticky;
     transform: initial;
  `};
`;

const Sidebar = forwardRef(
  ({ children, showCloseIcon, menuId, isOpen, onClose, ...rest }, ref) => {
    const isHidden = !!isOpen;

    return (
      <Container
        id={menuId}
        isOpen={isOpen}
        aria-hidden={!isHidden}
        ref={ref}
        {...rest}
      >
        {showCloseIcon && <SidebarCrossIcon onClick={onClose} />}
        {children}
      </Container>
    );
  }
);

Sidebar.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  menuId: PropTypes.string.isRequired,
  location: PropTypes.shape({}).isRequired,
  showCloseIcon: PropTypes.bool,
};

Sidebar.defaultProps = {
  showCloseIcon: true,
};

export default Sidebar;
