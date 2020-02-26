import React from 'react';
import PropTypes from 'prop-types';

import useModal from "../hooks/useModal";
import ContactModal from "../modals/ContactModal";

import SidebarMenuContainer from './Sidebar/SidebarMenuContainer';
import SidebarMenuItem from './Sidebar/SidebarMenuItem';

const MobileSidebarMenu = ({ items }) => {
  const [, showContactModal] = useModal(ContactModal);
  const onClickItem = (context) => () => {
    if(context === 'showContactModal') showContactModal();
  };

  return (
    <SidebarMenuContainer>
      {items.map(item => (
        <SidebarMenuItem deepLevel={0} key={item.to} to={item.to} onClick={onClickItem(item.context)}>
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
