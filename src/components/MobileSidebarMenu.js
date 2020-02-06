import React from 'react';
import PropTypes from 'prop-types';

import SidebarMenuContainer from './Sidebar/SidebarMenuContainer';
import SidebarMenuItem from './Sidebar/SidebarMenuItem';

const MobileSidebarMenu = ({ items }) => {
  return (
    <SidebarMenuContainer>
      {items.map(item => (
        <SidebarMenuItem deepLevel={0} key={item.to} to={item.to}>
          {item.label}
        </SidebarMenuItem>
      ))}
    </SidebarMenuContainer>
  );
};

MobileSidebarMenu.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string,
      label: PropTypes.string,
    })
  ).isRequired,
};

export default MobileSidebarMenu;
