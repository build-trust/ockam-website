import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import { media } from '../../utils/emotion';
import config from '../../../config';
import logo from '../../assets/ockam-logo.svg';
import Menu from '../Menu';
import HamburgerButton from "../HamburgerButton";
import Link from "../Link";

const Container = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  position: relative;
  color: ${props => props.theme.colors.menuText};
`;

const Logo = styled.img`
  height: 5.5rem;
`;

const HeaderMenu = styled(Menu)`
  display: none;
  margin-left: auto;
  ${media.desktop`
      display: block;
  `};
  a:first-child {
    padding-left: 0;
  }
  a.active {
   color: ${props => props.theme.colors.menuTextActive};
   font-weight: ${props => props.theme.fontWeights[2]};
  };

`;

const LogoContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  
  ${media.desktop`
    margin-left: initial;
    margin-right: initial;
    text-align: left;
  `};
`;

const DocsHeader = ({ openSidebar }) => {
  return (
    <Container>
      <HamburgerButton onClick={openSidebar} />
      <LogoContainer>
        <Link to="/">
          <Logo src={logo} alt="Ockam logo" />
        </Link>
      </LogoContainer>
      <HeaderMenu items={config.header.menu} />
    </Container>
  );
};

DocsHeader.propTypes = {
  openSidebar: PropTypes.func.isRequired,
};

export default DocsHeader;
