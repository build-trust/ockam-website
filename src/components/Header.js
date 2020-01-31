import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import { media } from '../utils/emotion';
import config from '../../config';
import useThemeLogo from '../hooks/useThemeLogo';

import Menu from './Menu';
import Link from './Link';
import HamburgerButton from "./HamburgerButton";

const Container = styled.nav`
  display: flex;
  max-width: 100%;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  padding: ${props => (props.isCollapsedHeader ? '0.8rem 0' : '1.5rem 0')};
  position: relative;
  width: inherit;
  color: ${props => props.theme.colors.menuText};
  .active {
   color: ${props => props.theme.colors.menuTextActive};
   font-weight: ${props => props.theme.fontWeights[2]};
  };

`;

const StyledLink = styled(Link)`
  margin-left: auto;
  margin-right: auto;
  ${media.desktop`
    margin-left: initial;
    margin-right: initial;
  `}
`

const Logo = styled.img`
  height: 5.5rem;
  ${props => props.isCollapsedHeader && `
    height: 3rem;
  `}
`;

const HeaderMenu = styled(Menu)`
  display: none;
  margin-left: auto;
  ${media.desktop`
      display: block;
  `};
`;

const Header = ({ openSidebar, isCollapsedHeader }) => {
  const logo = useThemeLogo();
  return (
    <Container isCollapsedHeader={isCollapsedHeader}>
      <HamburgerButton onClick={openSidebar} />
      <StyledLink to="/">
        <Logo src={logo} alt="Ockam logo" isCollapsedHeader={isCollapsedHeader} />
      </StyledLink>
      <HeaderMenu isCollapsedHeader={isCollapsedHeader} items={config.header.menu} />
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
