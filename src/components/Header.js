import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { ThMenu as MenuIcon } from 'styled-icons/typicons/ThMenu';

import { media } from '../utils/emotion';
import config from '../../config';
import useThemeLogo from '../hooks/useThemeLogo';

import Menu from './Menu';
import Link from './Link';

const Container = styled.nav`
  display: flex;
  max-width: 100%;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  padding: ${props => (props.isCollapsedHeader ? '0.8rem 0' : '1.2rem 0')};
  position: relative;
  height: ${props => (props.isCollapsedHeader ? '6rem' : '8rem')};
  width: inherit;
 
  .active {
   border-bottom: 1px solid ${props => props.theme.colors.primary};
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
  height: 4.8rem;
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

const StyledMenuIcon = styled(MenuIcon)`
  color: ${({ theme }) => theme.colors.icons};
  display: block;
  ${media.desktop`
      display: none !important;
  `};
`;

const Header = ({ openSidebar, isCollapsedHeader }) => {
  const logo = useThemeLogo();
  return (
    <Container isCollapsedHeader={isCollapsedHeader}>
      <StyledMenuIcon size={24} onClick={openSidebar} aria-controls="main-menu" />
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
