import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import without from 'lodash/without';

import useAllMdxAsTree from '../../../hooks/useAllMdxAsTree';
import getRootSlugFromPathname from '../../../utils/getRootSlugFromPathname';
import SidebarMenuContainer from '../../Sidebar/SidebarMenuContainer';

import LearnSidebarMenuNode from './LearnSidebarMenuNode';

const LearnSidebarMenu = ({ location }) => {
  const rootSlug = getRootSlugFromPathname(location.pathname);
  const [expandedNodes, setExpandedNodes] = useState([]);
  const { tree } = useAllMdxAsTree(rootSlug);
  const nodes = tree.length === 1 ? tree[0].nodes : tree;

  const hideNode = useCallback(value => {
    setExpandedNodes(state => without(state, value));
  }, []);

  const expandNode = useCallback(value => {
    setExpandedNodes(state => [...state, value]);
  }, []);

  const onToggle = useCallback(
    (e, value) => {
      e.preventDefault();
      e.stopPropagation();
      const isInArray = expandedNodes.find(item => item === value);
      if (isInArray) {
        hideNode(value);
      } else {
        expandNode(value);
      }
    },
    [expandNode, expandedNodes, hideNode]
  );

  return (
    <SidebarMenuContainer>
      <LearnSidebarMenuNode
        location={location}
        nodes={nodes}
        deepLevel={-1}
        expandedNodes={expandedNodes}
        onToggle={onToggle}
        hideNode={hideNode}
        expandNode={expandNode}
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
