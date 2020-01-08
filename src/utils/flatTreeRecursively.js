import isEmpty from 'lodash/isEmpty'

const flatTreeRecursively = ({nodes, ...rest }, initial = []) => {
  if (!nodes || nodes.length === 0) return [ ...initial, { ...rest } ];
  const results = [];
  nodes.forEach(item => {
    const el = flatTreeRecursively(item, initial);
    if (el) {
      results.push(...el);
    }
  });
  return [...initial, ...(!isEmpty(rest) ? [rest] : [] ) , ...results];
};

export default flatTreeRecursively;
