import React from 'react';
import PropTypes from 'prop-types';

import useMatchBreakpoint from '../../hooks/useMatchBreakpoint';

import OverlayMenu from './OverlayMenu';
import CollapsibleMenu from './CollapsibleMenu';

const DropdownMenu = ({ options, isCollapsedHeader, onClickItem, triggerEvent, children }) => {
  const isDesktop = useMatchBreakpoint('desktop');
  return isDesktop ? (
    <OverlayMenu isCollapsedHeader={isCollapsedHeader} triggerEvent={triggerEvent} options={options}>
      {children}
    </OverlayMenu>
  ) : (
    <CollapsibleMenu onClickItem={onClickItem} isCollapsedHeader={isCollapsedHeader} options={options}>{children}</CollapsibleMenu>
  );
};

DropdownMenu.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
    })
  ).isRequired,
  isCollapsedHeader: PropTypes.bool,
  triggerEvent: PropTypes.oneOf(['mousedown', 'mouseover']),
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  onClickItem: PropTypes.func,
};

DropdownMenu.defaultProps = {
  triggerEvent: 'mousedown',
  isCollapsedHeader: false,
  onClickItem() {},
};

export default DropdownMenu;
