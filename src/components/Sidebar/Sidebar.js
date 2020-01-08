import React, { forwardRef } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { Times as CrossIcon } from 'styled-icons/fa-solid/Times';

import { media } from '../../utils/emotion';
import { matchBreakpointDown } from '../../utils/rwd';

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
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(-100%)')};
  padding-top: 6rem;
  ${media.desktop`
     display: flex;
     position: sticky;
     transform: initial;
  `};
`;


const StyledCrossIcon = styled(CrossIcon)`
  position: absolute;
  z-index: 2;
  left: 1.5rem;
  top: 1.5rem;
  display: block;
  color: ${({theme}) => theme.colors.icon};

  ${media.desktop`
      display: none;
  `};
`;

const Sidebar = forwardRef(({ children, menuId, isOpen, onClose, ...rest }, ref) => {
  const isHidden = !!isOpen;

  return (
    <Container id={menuId} isOpen={isOpen} aria-hidden={!isHidden} ref={ref} {...rest}>
      {(matchBreakpointDown('desktop') ) && <StyledCrossIcon size={24} onClick={onClose} aria-controls='main-menu' />}
      {children}
    </Container>
  );
});

Sidebar.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen:  PropTypes.bool.isRequired,
  onClose:  PropTypes.func.isRequired,
  menuId: PropTypes.string.isRequired,
  location: PropTypes.shape({}).isRequired,
};

export default Sidebar;
