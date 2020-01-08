import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import { media } from '../utils/emotion';
import config from '../../config';

import Sidebar from './Sidebar';
import MobileMenu from './MobileMenu';

const StyledSidebar = styled(Sidebar)`
  z-index: 22;
  ${media.desktop`
    display: none;
  `}
`;

const SidebarMobileMenu = forwardRef(({ location, isOpen, onClose, menuId}, ref) => {
  return (
    <StyledSidebar location={location} isOpen={isOpen} onClose={onClose} menuId={menuId} ref={ref}>
      <MobileMenu items={config.header.menu} />
    </StyledSidebar>
  );
});

SidebarMobileMenu.propTypes = {
  location: PropTypes.shape({}).isRequired,
  menuId: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
};

SidebarMobileMenu.defaultProps = {
  onClose() {},
};

export default SidebarMobileMenu;
