import React from 'react';
import styled from '@emotion/styled';
import {LinkedinBox as LinkedinLogo} from 'styled-icons/remix-fill/LinkedinBox'
import {Twitter as TwitterLogo} from 'styled-icons/remix-fill/Twitter'
import { lighten } from 'polished';
import { useTheme } from 'emotion-theming';

import { media } from '../utils/emotion';
import ockamLogo from '../assets/ockam-logo.svg';
import ockamLogoInvert from '../assets/ockam-logo-invert.svg';

import PageSection from './pages/PageSection';
import Link from './Link';
import Caption from './Caption';
import Icon from './Icon';



const FooterGrid = styled.div`
  padding-top: ${props => props.theme.space.large};
  border-top: 1px solid ${props => lighten(0.05, props.theme.colors.accentBackground)};
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-row-gap: 4rem;
  grid-template-areas: 
  "logo logo logo"
  "menu menu menu"
  "copyright copyright social-icons";
  ${media.tablet`
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 
    "logo menu"
    "copyright social-icons";
  `};
`;

const LogoContainer = styled.div`
  grid-area: logo;
  text-align: center;
  ${media.tablet`
    text-align: left;
  `};
`;

const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-area: menu;
  ${media.tablet`
    align-items: center;
    justify-content: flex-end;
  `};
`;

const MenuLink = styled(Link)`
  padding-left: 2rem;
  &:first-child {
    padding-left: 0;
  }
  ${media.tablet`
    padding-left: 6rem;
  `};
`

const CopyrightContainer = styled.div`
  grid-area: copyright;
`;

const SocialContainer = styled.div`
  grid-area: social-icons;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const LogoOckam = styled.img`
  height: 4.8rem;
`

const Footer = () => {
  const theme = useTheme();
  const logoImage = theme.name === 'light' ? ockamLogo : ockamLogoInvert;
  return (
    <PageSection mb={3}>
      <FooterGrid>
        <LogoContainer>
          <LogoOckam src={logoImage} alt='ockam logo' />
        </LogoContainer>
        <MenuContainer>
          <MenuLink>Request Demo</MenuLink>
          <MenuLink>Contact Sales</MenuLink>
        </MenuContainer>
        <CopyrightContainer>
          <Caption>© 2017-2020 Ockam.io. All rights reserved.</Caption>
        </CopyrightContainer>
        <SocialContainer>
          <Link to='https://www.linkedin.com/company/ockam.io/'><Icon icon={LinkedinLogo} color='caption' /></Link>
          <Link to='https://twitter.com/ockam_io'><Icon ml={3} icon={TwitterLogo} color='caption' /></Link>
        </SocialContainer>
      </FooterGrid>
    </PageSection>
  );
};

export default Footer;
