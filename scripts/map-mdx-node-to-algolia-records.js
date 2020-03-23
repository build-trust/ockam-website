const crypto = require('crypto');

const trim = require('lodash/trim');

const excludedChildTypes = ['export'];

const matchExcludedType = type => excludedChildTypes.some(excluded => excluded === type);

const mergeNestedChildrenMdxAst = (child) => {
  if(matchExcludedType(child.type)) return '';
  if(child.type === "text" || !child.children) {
    return child.value || '';
  }
  return child.children.reduce((acc, item) => `${acc}${mergeNestedChildrenMdxAst(item)} `,'')
};


const parseMdxAst = (mdxAST) => {
  return mdxAST.children.reduce((acc, child) => {
    const text = trim(mergeNestedChildrenMdxAst(child));
    if(!text) return acc;
    return [...acc, {
      type: child.type,
      text,
    }]
  }, [])
};

const mapMdxNodeToAlgoliaRecords = ({mdxAST, excerpt, objectID, title, ...node}) => {
  const chunks = parseMdxAst(mdxAST);
  const articleName = title;
  const records = chunks.map(chunk => ({
    objectID: crypto.createHash("md5")
      .update(objectID + chunk.text)
      .digest("hex"),
    articleName,
    ...node,
    ...chunk,
  }));
  const rootRecord = {
    objectID,
    title,
    text: excerpt,
    ...node,
    type: 'root',

  };
  return [rootRecord, ...records];
};

module.exports = mapMdxNodeToAlgoliaRecords;
