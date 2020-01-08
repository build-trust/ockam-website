import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

import PageLayout from '../layouts/PageLayout';
import SidebarMobileMenu from '../components/SidebarMobileMenu';


const PageTemplate =  ({ children, location }) => {

  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();
  const menuId = 'main-menu';
  return (

    <PageLayout location={location} isOpenSidebar={isOpen} setIsOpenSidebar={setIsOpen}>
      <SidebarMobileMenu location={location} isOpen={isOpen} onClose={() => setIsOpen(false)} menuId={menuId} ref={ref} />
      <>
        {children}
      </>
    </PageLayout>
)};

PageTemplate.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.shape({}).isRequired,
};

export default PageTemplate;
