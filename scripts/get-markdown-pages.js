const path = require("path");

const getDependedRepos = require('./get-depended-repos');

const isNodeBlogPage = (node) => node.fields.slug && node.fields.slug.split("/")[1] === 'blog';

const allMdxQuery = `
    {
      allMdx {
        edges {
          node {
            fields {
              id
              slug
            }
            tableOfContents
          }
        }
      }
    }
  `;

const getMarkdownPages = async (graphql) => {
  const mdxResults = await graphql(allMdxQuery);
  if (mdxResults.errors) {
    console.error(mdxResults.errors); // eslint-disable-line no-console
  }
  const blogTemplate = path.resolve("./src/templates/BlogTemplate.js");
  const learnTemplate = path.resolve("./src/templates/LearnTemplate.js");
  const dependedRepos = await getDependedRepos();
  return mdxResults.data.allMdx.edges.map(({ node }) => {
    const isBlog = isNodeBlogPage(node);
    return {
      path: node.fields.slug ? node.fields.slug : "/",
      component: isBlog ? blogTemplate : learnTemplate,
      context: {
        id: node.fields.id,
        pageType: isBlog ? 'blog' : 'doc',
        dependedRepos,
      },
    };
  });
};

module.exports = getMarkdownPages;
