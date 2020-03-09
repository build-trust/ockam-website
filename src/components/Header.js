import React, { useState } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import MenuIcon from 'emotion-icons/feather/Menu';
import CrossIcon from 'emotion-icons/feather/X';

import { media } from '../utils/emotion';
import useThemeLogo from '../hooks/useThemeLogo';

import Menu from './Menu/Menu';
import Link from './Link';
import SidebarButton from './SidebarButton';
import ToggleIcon from './Collapse/ToggleIcon';
import MobileMenu from './Menu/MobileMenu';
import Icon from "./Icon";

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
  color: ${({ theme }) => theme.colors.icons};
  display: flex;
  align-items: center;
  justify-content: center;
  ${media.desktop`
    display: none;
  `}
`;

const BurgerIcon = () => <Icon icon={MenuIcon} size={28} />;
const CloseIcon = () => <Icon icon={CrossIcon} size={28} />;


const Header = ({ openSidebar, isCollapsedHeader }) => {
  const logo = useThemeLogo();
  const [isVisibleMobileMenu, setIsVisibleMenu] = useState(false);
  const toggleMobileMenu = () => setIsVisibleMenu(state => !state);
  return (
    <Container isCollapsedHeader={isCollapsedHeader}>
      {openSidebar && <SidebarButton onClick={openSidebar} />}
      <StyledLink to="/">
        <Logo
          src={logo}
          alt="Ockam logo"
          isCollapsedHeader={isCollapsedHeader}
        />
      </StyledLink>
      <ToggleMenuButton
        CollapsedIcon={BurgerIcon}
        UncollapsedIcon={CloseIcon}
        isCollapsed={!isVisibleMobileMenu}
        onClick={toggleMobileMenu}
      />
      <>
        <Menu
          isCollapsedHeader={isCollapsedHeader}
        />
        {isVisibleMobileMenu && (
        <MobileMenu
          onClickItem={toggleMobileMenu}
          isCollapsedHeader={isCollapsedHeader}

        />
)}
      </>
    </Container>
  );
};

Header.propTypes = {
  openSidebar: PropTypes.func.isRequired,
  isCollapsedHeader: PropTypes.bool,
};
Header.defaultProps = {
  isCollapsedHeader: false,
};

export default Header;
