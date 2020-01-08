import { useMemo } from 'react';
import sortBy from 'lodash/sortBy';

import getSliceArrayFromPathname from '../utils/getSliceArrayFromPathname';
import getRootSlugFromPathname from '../utils/getRootSlugFromPathname';

import useAllMdx from './useAllMdx';

const filterByRootSlug = (edges, rootSlug) =>
  edges.filter(
    edge => getRootSlugFromPathname(edge.node.fields.slug) === rootSlug
  );

const createNodesFromEdges = (edges = false) =>
  edges.map(edge => {
    return {
      id: edge.node.fields.id,
      slugs: getSliceArrayFromPathname(edge.node.fields.slug),
      title: edge.node.fields.title,
      url: edge.node.fields.slug,
    };
  });

const insert = (nodes = [], { id, slugs: [head, ...tail], ...rest }) => {
  let child = nodes.find(node => node.name === head);
  if (!child) nodes.push((child = { id, name: head, nodes: [], ...rest }));

  if (tail.length > 0) insert(child.nodes, { id, slugs: tail, ...rest });
  return nodes;
};

const generateTree = nodes => {
  return nodes.reduce((children, path) => insert(children, path), []);
};

const sortBySlugLength = nodes => sortBy(nodes, item => item.slugs.length);

const findLowestNodeLevel = (nodes, rootSlug) =>
  nodes.reduce(
    (acc, node) =>
      (node.url !== `/${rootSlug}/` && (node.slugs.length < acc || !acc)
        ? node.slugs.length
        : acc),
    null
  );

const addDeepLevelToNode = (nodes, rootSlug) => {
  const lowestNodeLevel = findLowestNodeLevel(nodes, rootSlug);
  return nodes.map(node => ({
    ...node,
    deepLevel: node.slugs.length - lowestNodeLevel,
  }));
};

const useAllMdxAsTree = rootSlug => {
  const allMdx = useAllMdx();
  return useMemo(() => {
    const edges = rootSlug
      ? filterByRootSlug(allMdx.edges, rootSlug)
      : allMdx.edges;
    const nodes = sortBySlugLength(createNodesFromEdges(edges));
    const nodesWithLevel = addDeepLevelToNode(nodes, rootSlug);
    return {
      tree: generateTree(nodesWithLevel),
    };
  }, [allMdx.edges, rootSlug]);
};

export default useAllMdxAsTree;
