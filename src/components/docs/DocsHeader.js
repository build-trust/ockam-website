import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { ThMenu as MenuIcon } from 'styled-icons/typicons/ThMenu';

import { media } from '../../utils/emotion';
import config from '../../../config';
import logo from '../../assets/ockam-logo.svg';
import Menu from '../Menu';

const Container = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;

  flex-wrap: wrap;
  padding-top: 1.2rem;
  padding-bottom: 1.2rem;
  position: relative;
  height: 8rem;

  a.active {
   color: ${props => props.theme.colors.primary};
  }
  
`;

const Logo = styled.img`
  height: 4.8rem;
`;

const HeaderMenu = styled(Menu)`
  display: none;
  ${media.desktop`
      display: block;
  `};
  a:first-child {
    padding-left: 0;
  }
  a.active {
      color: ${props => props.theme.colors.primary};
  }

`;

const LogoContainer = styled.div`
  width: 30rem;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  
  ${media.desktop`
    margin-left: initial;
    margin-right: initial;
    text-align: left;
  `};
`;

const StyledMenuIcon = styled(MenuIcon)`
  color: ${({ theme }) => theme.colors.icons};
  display: block;
  ${media.desktop`
      display: none !important;
  `};
`;

const DocsHeader = ({ openSidebar }) => {
  return (
    <Container>
      <StyledMenuIcon size={24} onClick={openSidebar} aria-controls="main-menu" />
      <LogoContainer>
        <Logo src={logo} alt="Ockam logo" />
      </LogoContainer>
      <HeaderMenu items={config.header.menu} />
    </Container>
  );
};

DocsHeader.propTypes = {
  openSidebar: PropTypes.func.isRequired,
};

export default DocsHeader;
