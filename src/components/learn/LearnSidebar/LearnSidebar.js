import React, { forwardRef, useEffect } from 'react';
import styled from '@emotion/styled';
import GithubIcon from 'emotion-icons/simpleIcons/GitHub';
import SendPlaneIcon from 'emotion-icons/ion-ios/Send';
import SlackIcon from 'emotion-icons/fa-brands/SlackHash';
import PropTypes from 'prop-types';
import { lighten } from 'polished';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';


import { media } from '../../../utils/emotion';
import Icon from '../../Icon';
import Sidebar from '../../Sidebar';
import useSiteMetadata from '../../../hooks/useSiteMetadata';
import Link from '../../Link';
import SidebarCrossIcon from '../../Sidebar/SidebarCrossIcon';
import useModal from "../../../hooks/useModal";
import ContactModal from "../../../modals/ContactModal";
import Scrollbar from "../../Scrollbar";

import LearnSidebarMenu from './LearnSidebarMenu';

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

  z-index: 2;
  ${media.desktop`
    width: 100%;
    min-width: 100%;
    z-index: 1;
  `};
  border-right: 1px solid ${({ theme }) => theme.colors.accentBackground};
`;

const ContentWrapper = styled.div`
  padding-right: 1rem;
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 6rem;
  ${media.desktop`
      padding-top: 2.3rem;
  `};
`;

const setHeightBasedOnOffset = ref => () => {
  const viewportOffset = ref.current.getBoundingClientRect();
  // eslint-disable-next-line no-param-reassign
  ref.current.style.height = `calc(100vh - ${viewportOffset.top}px)`;
};

const LearnSidebar = forwardRef(({ location, menuId, isOpen, onClose }, ref) => {
  useScrollPosition(setHeightBasedOnOffset(ref), [ref]);
  const [, showContactModal] = useModal(ContactModal);
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
          <LearnSidebarMenu location={location} />
          <IconsContainer>
            <Link to={siteMetaData.ockamLibraryRepo}>
              <Icon size={28} icon={GithubIcon} />
            </Link>
            <Link onClick={() => showContactModal()}>
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

LearnSidebar.propTypes = {
  location: PropTypes.shape({}).isRequired,
  menuId: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
};

LearnSidebar.defaultProps = {
  onClose() {},
};

export default LearnSidebar;
