import flatTreeRecursively from '../utils/flatTreeRecursively';

import useAllMdxAsTree from './useAllMdxAsTree';

const usePrevNextNavigate = ({ currentNode, rootSlug }) => {
  const { tree } = useAllMdxAsTree(rootSlug);

  const flattenNodes = flatTreeRecursively({nodes: tree});
  const currentIndex = flattenNodes.findIndex( node => node.id === currentNode.id);
  const isLast = currentIndex === flattenNodes.length - 1;
  const isFirst = currentIndex === 0;
  const nextNode = isLast ? {} : flattenNodes[currentIndex + 1];
  const prevNode = isFirst ? {} : flattenNodes[currentIndex - 1];

  return {
    nextNode,
    prevNode,
    isLast,
    isFirst,
  }
};

export default usePrevNextNavigate;
