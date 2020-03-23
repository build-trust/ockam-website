import React, { useState } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import MenuIcon from 'emotion-icons/feather/Menu';
import CrossIcon from 'emotion-icons/feather/X';

import { media } from '../../utils/emotion';
import Menu from '../Menu/Menu';
import Link from '../Link';
import ToggleIcon from '../Collapse/ToggleIcon';
import MobileMenu from '../Menu/MobileMenu';
import Icon from "../Icon";
import Logo from "../Logo";

import Container from "./HeaderContainer";

const StyledLink = styled(Link)`
  margin-left: auto;
  margin-right: auto;
  ${media.desktop`
    margin-left: initial;
    margin-right: initial;
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

const Header = ({ isCollapsedHeader }) => {
  const [isVisibleMobileMenu, setIsVisibleMenu] = useState(false);
  const toggleMobileMenu = () => setIsVisibleMenu(state => !state);
  return (
    <Container isCollapsedHeader={isCollapsedHeader}>
      <StyledLink to="/">
        <Logo height={isCollapsedHeader ? '3rem' : undefined} />
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
  isCollapsedHeader: PropTypes.bool,
};
Header.defaultProps = {
  isCollapsedHeader: false,
};

export default Header;
