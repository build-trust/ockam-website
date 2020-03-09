import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { useTheme } from 'emotion-theming';

import { media } from '../../utils/emotion';
import Link from "../Link";

const MenuLink = styled(Link)`
  white-space: nowrap;
  width: 100%;
  font-weight: ${props => props.isActive && 'bold'};
  padding: 1rem 1.6rem;
  &:hover {
    background-color: ${props => props.theme.colors.dropdownMenuItemHover};
  };
  opacity: 0.5;
  text-align: center;
  ${media.desktop`
    opacity: 1;
    text-align: left;
  `}
`;

const DropdownOptions = ({ options, onClickItem, isCollapsedHeader }) => {
  const theme = useTheme();
  return (
    <>
      {options.map(item => (
        <MenuLink
          partiallyActive={!item.isRoot}
          fontSize={isCollapsedHeader ? 1 : 2}
          activeStyle={{ fontWeight: theme.fontWeights[2], color: theme.colors.menuTextActive}}
          key={item.to}
          to={item.to}
          onClick={onClickItem}
          title={item.label}
        >
          {item.label}
        </MenuLink>
    ))}
    </>
)};

DropdownOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
  })).isRequired,
  onClickItem: PropTypes.func,
  isCollapsedHeader: PropTypes.bool,
};

DropdownOptions.defaultProps = {
  isCollapsedHeader: false,
  onClickItem() {},
};


export default DropdownOptions;
