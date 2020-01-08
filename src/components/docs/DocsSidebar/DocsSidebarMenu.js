import React, { useState } from 'react';
import PropTypes from 'prop-types';

import config from '../../../../config';
import useAllMdxAsTree from '../../../hooks/useAllMdxAsTree';
import getRootSlugFromPathname from '../../../utils/getRootSlugFromPathname';
import SidebarMenuContainer from '../../Sidebar/SidebarMenuContainer';

import DocsSidebarMenuNode from './DocsSidebarMenuNode';

const getNestedNodesRecursively = (node, initial = []) => {
  if (!node.nodes || node.nodes.length === 0) return null;
  const currentlyHidden = node.url ? [...initial, node.url] : initial;
  const results = [];
  node.nodes.forEach(item => {
    const urls = getNestedNodesRecursively(item, currentlyHidden);
    if (urls) {
      results.push(...urls);
    }
  });
  return [...currentlyHidden, ...results];
};

const DocsSidebarMenu = ({ location }) => {
  const rootSlug = getRootSlugFromPathname(location.pathname);
  const { tree } = useAllMdxAsTree(rootSlug);
  const [collapsed, setCollapsed] = useState(() => {
    if (config.sidebar.isDefaultExpand) return {};
    const nestedNodes = getNestedNodesRecursively({nodes: tree});
    return nestedNodes.reduce((o, key) => ({ ...o, [key]: true }), {});
  });

  const nodes = tree.length === 1 ? tree[0].nodes : tree;

  const toggle = url => {
    setCollapsed({
      ...collapsed,
      [url]: !collapsed[url],
    });
  };

  return (
    <SidebarMenuContainer>
      <DocsSidebarMenuNode
        setCollapsed={toggle}
        location={location}
        collapsed={collapsed}
        nodes={nodes}
        deepLevel={-1}
      />
    </SidebarMenuContainer>
  );
};

DocsSidebarMenu.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default DocsSidebarMenu;
