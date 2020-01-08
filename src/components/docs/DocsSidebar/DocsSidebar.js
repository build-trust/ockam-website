import React, { forwardRef, useEffect } from 'react';
import styled from '@emotion/styled';
import { Github as GithubIcon } from 'styled-icons/icomoon/Github';
import { SendPlane as SendPlaneIcon } from 'styled-icons/remix-fill/SendPlane';
import { Slack as SlackIcon } from 'styled-icons/fa-brands/Slack';
import PropTypes from 'prop-types';
import { lighten } from 'polished';
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import Scrollbar from "react-scrollbars-custom";

import { media } from '../../../utils/emotion';
import Icon from '../../Icon';
import Sidebar from '../../Sidebar';

import DocsSidebarMenu from './DocsSidebarMenu';

const IconsContainer = styled.div`
  padding: 2.2rem 1.5rem;
  border-top: 1px solid ${({ theme }) => lighten(0.08, theme.colors.accentBackground)};
  ${media.desktop`
      border-top: none;
  `};
  display: flex;
  flex-direction: row;
  justify-content: space-around;

`;

const StyledSidebar = styled(Sidebar)`
  min-width: 30rem;
  z-index: 2;
  ${media.desktop`
      z-index: 1;
  `};
  border-right: 1px solid ${({ theme }) => theme.colors.accentBackground};
  
  .ScrollbarsCustom-TrackY {
    top: 0 !important;
    background-color: ${({ theme }) => theme.custom.sidebar.customScrollTruckColor} !important;
    height: 100% !important;
    width: 4px !important;
  }
  .ScrollbarsCustom-ThumbY {
    background-color: ${({ theme }) => theme.custom.sidebar.customScrollThumbColor} !important;
  }
`;

const ContentWrapper = styled.div`
  position: absolute;
  top:0;
  bottom:0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 6rem;
  ${media.desktop`
      padding-top: 3rem;
  `};

`

const setHeightBasedOnOffset = (ref) => () => {
  const viewportOffset = ref.current.getBoundingClientRect();
  // eslint-disable-next-line no-param-reassign
  ref.current.style.height = `calc(100vh - ${viewportOffset.top}px)`;
};

const DocsSidebar = forwardRef(({ location, menuId, isOpen, onClose }, ref) => {
  useScrollPosition(setHeightBasedOnOffset(ref), [ref]);
  useEffect( setHeightBasedOnOffset(ref),[ref]);

  return (
    <StyledSidebar menuId={menuId} location={location} isOpen={isOpen} onClose={onClose} ref={ref}>
      <Scrollbar style={{ position: "" }}>
        <ContentWrapper>
          <DocsSidebarMenu location={location} />
          <IconsContainer>
            <Icon size={28} icon={GithubIcon} />
            <Icon size={28} icon={SendPlaneIcon} />
            <Icon size={28} icon={SlackIcon} />
          </IconsContainer>
        </ContentWrapper>
      </Scrollbar>
    </StyledSidebar>
  );
});

DocsSidebar.propTypes = {
  location: PropTypes.shape({}).isRequired,
  menuId: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
};

DocsSidebar.defaultProps = {
  onClose() {},
};

export default DocsSidebar;
