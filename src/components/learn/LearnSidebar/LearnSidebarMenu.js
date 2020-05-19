import React from 'react';
import PropTypes from 'prop-types';

import useAllMdxAsTree from '../../../hooks/useAllMdxAsTree';
import getRootSlugFromPathname from '../../../utils/getRootSlugFromPathname';
import SidebarMenuContainer from '../../Sidebar/SidebarMenuContainer';

import LearnSidebarMenuNode from './LearnSidebarMenuNode';

const LearnSidebarMenu = ({ location }) => {
  const rootSlug = getRootSlugFromPathname(location.pathname);
  const { tree } = useAllMdxAsTree(rootSlug);
  const nodes = tree.length === 1 ? tree[0].nodes : tree;

  return (
    <SidebarMenuContainer>
      <LearnSidebarMenuNode location={location} nodes={nodes} deepLevel={-1} />
    </SidebarMenuContainer>
  );
};

LearnSidebarMenu.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default LearnSidebarMenu;
