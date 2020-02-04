import React, { forwardRef, useEffect } from 'react';
import styled from '@emotion/styled';
import GithubIcon from 'emotion-icons/simpleIcons/GitHub';
import SendPlaneIcon from 'emotion-icons/ion-ios/Send';
import SlackIcon from 'emotion-icons/fa-brands/SlackHash';
import PropTypes from 'prop-types';
import { lighten } from 'polished';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import Scrollbar from 'react-scrollbars-custom';

import { media } from '../../../utils/emotion';
import Icon from '../../Icon';
import Sidebar from '../../Sidebar';
import useSiteMetadata from '../../../hooks/useSiteMetadata';
import Link from '../../Link';
import config from '../../../../config';
import SidebarCrossIcon from '../../Sidebar/SidebarCrossIcon';

import DocsSidebarMenu from './DocsSidebarMenu';

const IconsContainer = styled.div`
  padding: 2.2rem 1.5rem;
  border-top: 1px solid
    ${({ theme }) => lighten(0.08, theme.colors.accentBackground)};
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
    background-color: ${({ theme }) =>
      theme.custom.sidebar.customScrollTruckColor} !important;
    height: 100% !important;
    width: 4px !important;
  }
  .ScrollbarsCustom-ThumbY {
    background-color: ${({ theme }) =>
      theme.custom.sidebar.customScrollThumbColor} !important;
  }
`;

const ContentWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 6rem;
  ${media.desktop`
      padding-top: 3rem;
  `};
`;

const setHeightBasedOnOffset = ref => () => {
  const viewportOffset = ref.current.getBoundingClientRect();
  // eslint-disable-next-line no-param-reassign
  ref.current.style.height = `calc(100vh - ${viewportOffset.top}px)`;
};

const DocsSidebar = forwardRef(({ location, menuId, isOpen, onClose }, ref) => {
  useScrollPosition(setHeightBasedOnOffset(ref), [ref]);
  useEffect(setHeightBasedOnOffset(ref), [ref]);
  const siteMetaData = useSiteMetadata();

  return (
    <StyledSidebar
      menuId={menuId}
      location={location}
      isOpen={isOpen}
      onClose={onClose}
      ref={ref}
      showCloseIcon={false}
    >
      <Scrollbar style={{ position: '' }}>
        <ContentWrapper>
          <SidebarCrossIcon onClick={onClose} />
          <DocsSidebarMenu location={location} />
          <IconsContainer>
            <Link to={siteMetaData.ockamLibraryRepo}>
              <Icon size={28} icon={GithubIcon} />
            </Link>
            <Link to={`mailto:${config.general.email}`}>
              <Icon size={28} icon={SendPlaneIcon} />
            </Link>
            <Link to={siteMetaData.slackChannel}>
              <Icon size={28} icon={SlackIcon} />
            </Link>
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
