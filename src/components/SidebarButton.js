import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import MenuIcon from 'emotion-icons/feather/AlignLeft';

import { media } from '../utils/emotion';

import Icon from './Icon';

const StyledMenuIcon = styled(MenuIcon)`
  color: ${({ theme }) => theme.colors.icons};
  display: block;
  cursor: pointer;
  ${media.desktop`
    display: none !important;
  `};
`;

const SidebarButton = ({ onClick, ...rest }) => (
  <Icon
    icon={StyledMenuIcon}
    size={28}
    onClick={onClick}
    aria-controls="main-menu"
    {...rest}
  />
);

SidebarButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default SidebarButton;
