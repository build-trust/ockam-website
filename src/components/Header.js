import React, { useState } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import ChevronDown from 'emotion-icons/boxicons-regular/ChevronDown';

import { media } from '../utils/emotion';
import config from '../../config';
import useThemeLogo from '../hooks/useThemeLogo';
import useMatchBreakpoint from "../hooks/useMatchBreakpoint";

import Menu from './Menu';
import Link from './Link';
import HamburgerButton from './HamburgerButton';
import ToggleIcon from './Collapse/ToggleIcon';
import MobileMenu from './MobileMenu';

const Container = styled.nav`
  display: flex;
  max-width: 100%;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  padding: ${props => (props.isCollapsedHeader ? '0.8rem 0' : '1.5rem 0')};
  position: relative;
  width: inherit;
  color: ${props => props.theme.colors.menuText};
  .active {
    color: ${props => props.theme.colors.menuTextActive};
    font-weight: ${props => props.theme.fontWeights[2]};
  }
`;

const StyledLink = styled(Link)`
  margin-left: auto;
  margin-right: auto;
  ${media.desktop`
    margin-left: initial;
    margin-right: initial;
  `}
`;

const Logo = styled.img`
  height: 5.5rem;
  ${props =>
    props.isCollapsedHeader &&
    `
    height: 3rem;
  `}
`;

const ToggleMenuButton = styled(ToggleIcon)`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${props => !props.showMobileMenu && 'display: none;'};
  ${media.desktop`
    display: none;
  `}
`;

const Header = ({ openSidebar, isCollapsedHeader, showMobileMenu }) => {
  const logo = useThemeLogo();
  const [isCollapsed, setIsCollapsed] = useState(true);
  const isDesktop = useMatchBreakpoint('desktop');
  const toggleIsCollapsed = () => setIsCollapsed(state => !state);
  return (
    <Container isCollapsedHeader={isCollapsedHeader}>
      <HamburgerButton onClick={openSidebar} />
      <StyledLink to="/">
        <Logo
          src={logo}
          alt="Ockam logo"
          isCollapsedHeader={isCollapsedHeader}
        />
      </StyledLink>
      <ToggleMenuButton
        CollapsedIcon={ChevronDown}
        showMobileMenu={showMobileMenu}
        isCollapsed={isCollapsed}
        onClick={toggleIsCollapsed}
      />
      {isDesktop ? (
        <Menu
          showMobileMenu={showMobileMenu && !isCollapsed}
          isCollapsedHeader={isCollapsedHeader}
          items={config.header.menu}
        />

      ) : (
        <MobileMenu
          showMobileMenu={showMobileMenu && !isCollapsed}
          isCollapsedHeader={isCollapsedHeader}
          items={config.header.menu}
        />
      )}
    </Container>
  );
};

Header.propTypes = {
  openSidebar: PropTypes.func.isRequired,
  isCollapsedHeader: PropTypes.bool,
  showMobileMenu: PropTypes.bool,
};
Header.defaultProps = {
  isCollapsedHeader: false,
  showMobileMenu: false,
};

export default Header;
