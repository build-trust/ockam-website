import React, { useState } from 'react';
import PropTypes from 'prop-types';

import config from '../../../../config';
import useAllMdxAsTree from '../../../hooks/useAllMdxAsTree';
import getRootSlugFromPathname from '../../../utils/getRootSlugFromPathname';
import SidebarMenuContainer from '../../Sidebar/SidebarMenuContainer';
import isMatchingPath from "../../../utils/isMatchedPath";

import LearnSidebarMenuNode from './LearnSidebarMenuNode';

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

const LearnSidebarMenu = ({ location }) => {
  const rootSlug = getRootSlugFromPathname(location.pathname);
  const { tree } = useAllMdxAsTree(rootSlug);
  const [collapsed, setCollapsed] = useState(() => {
    if (config.sidebar.isDefaultExpand) return {};
    const nestedNodes = getNestedNodesRecursively({ nodes: tree });
    return nestedNodes.reduce((acc, key) => {
      const isCollapsed = !isMatchingPath(location.pathname, key);
      return { ...acc, [key]: isCollapsed }
    }, {});

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
      <LearnSidebarMenuNode
        setCollapsed={toggle}
        location={location}
        collapsed={collapsed}
        nodes={nodes}
        deepLevel={-1}
      />
    </SidebarMenuContainer>
  );
};

LearnSidebarMenu.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default LearnSidebarMenu;
