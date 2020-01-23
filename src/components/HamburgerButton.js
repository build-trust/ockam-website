import React from 'react';
import PropTypes from 'prop-types';
import styled from "@emotion/styled";
import MenuIcon from "emotion-icons/ion-ios/Menu";

import {media} from "../utils/emotion";

import Icon from "./Icon";

const StyledMenuIcon = styled(MenuIcon)`
  color: ${({ theme }) => theme.colors.icons};
  display: block;
  cursor: pointer;
  ${media.desktop`
    display: none !important;
  `};
`;

const HamburgerButton = ({ onClick }) => <Icon icon={StyledMenuIcon} size={32} onClick={onClick} aria-controls="main-menu" />;

HamburgerButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default HamburgerButton;
