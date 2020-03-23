
const mapMdxNodeToAlgoliaRecords = require('./map-mdx-node-to-algolia-records');
const learnIndices = require('./get-algolia-learn-indices');

const learnPagesQueries = (path) => `{
  pages: allMdx(
    filter: {
      fileAbsolutePath: { regex: "/content/learn/${path}/" },
    }
  ) {
    edges {
      node {
        objectID: id
        fields {
          slug
          title
        }
        frontmatter {
          date(formatString: "MMMM Do, YYYY")
        }
        mdxAST
        excerpt
      }
    }
  }
}`;

const flatten = arr =>
  arr.map(({ node: { frontmatter, fields, ...rest } }) => ({
    ...frontmatter,
    ...fields,
    ...rest,
  }));
const settings = { attributesToSnippet: [`excerpt:20`] };


const learnDataTransformer = (data, category) => {
  const nodes = flatten(data);
  return nodes.reduce((acc, item) => [...acc, ...mapMdxNodeToAlgoliaRecords({...item, category})], []);
};

const queries = learnIndices.map(directory => ({
  query: learnPagesQueries(directory),
  transformer: ({ data }) => learnDataTransformer(data.pages.edges, directory),
  indexName: directory,
  settings,
}));

module.exports = queries;
