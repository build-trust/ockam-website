import React, { useState } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import MenuIcon from 'emotion-icons/feather/Menu';
import CrossIcon from 'emotion-icons/feather/X';

import { media } from '../../utils/emotion';
import Menu from '../Menu/Menu';
import Link from '../Link';
import SidebarButton from '../SidebarButton';
import ToggleIcon from '../Collapse/ToggleIcon';
import MobileMenu from '../Menu/MobileMenu';
import Icon from "../Icon";
import Search from "../search";
import Logo from "../Logo";
import LearnGridLayout from "../LearnGridLayout";

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
  justify-content: flex-end;
  ${media.desktop`
    display: none;
  `}
`;

const SearchContainer = styled('div')`
  display: none;
  align-items: center;
  border-left: 1px solid ${props => props.theme.colors.accentBackground};
  padding-left: 1.5rem;
  ${media.desktop`
    display: flex;
  `}
`;

const LearnMenu = styled(Menu)`
  margin-left: initial;
`;

const LearnHeaderContainer = styled(LearnGridLayout)`
  padding: 1.5rem 0;
`;

const BurgerIcon = () => <Icon icon={MenuIcon} size={28} />;
const CloseIcon = () => <Icon icon={CrossIcon} size={28} />;

const LearnHeader = ({ openSidebar, algoliaIndexes }) => {
  const [isVisibleMobileMenu, setIsVisibleMenu] = useState(false);
  const toggleMobileMenu = () => setIsVisibleMenu(state => !state);
  return (
    <LearnHeaderContainer>
      {openSidebar && <SidebarButton onClick={openSidebar} />}
      <StyledLink to="/">
        <Logo />
      </StyledLink>
      <ToggleMenuButton
        CollapsedIcon={BurgerIcon}
        UncollapsedIcon={CloseIcon}
        isCollapsed={!isVisibleMobileMenu}
        onClick={toggleMobileMenu}
      />

      <>
        <LearnMenu contactAsButton={false} />
        <MobileMenu
          isVisible={isVisibleMobileMenu}
          onClickItem={toggleMobileMenu}
        />
      </>
      <SearchContainer>
        <Search indices={algoliaIndexes} />
      </SearchContainer>
    </LearnHeaderContainer>
  );
};

LearnHeader.propTypes = {
  openSidebar: PropTypes.func.isRequired,
  algoliaIndexes: PropTypes.arrayOf(PropTypes.string),
};
LearnHeader.defaultProps = {
  algoliaIndexes: [],
};

export default LearnHeader;
