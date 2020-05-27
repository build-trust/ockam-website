const path = require('path');

const getDependedRepos = require('./get-depended-repos');

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

const getMarkdownPages = async graphql => {
  const mdxResults = await graphql(allMdxQuery);
  if (mdxResults.errors) {
    console.error(mdxResults.errors); // eslint-disable-line no-console
  }
  const learnTemplate = path.resolve('./src/templates/LearnTemplate.js');
  const dependedRepos = await getDependedRepos();
  return mdxResults.data.allMdx.edges.map(({ node }) => {
    return {
      path: node.fields.slug ? node.fields.slug : '/',
      component: learnTemplate,
      context: {
        id: node.fields.id,
        pageType: 'doc',
        dependedRepos,
      },
    };
  });
};

module.exports = getMarkdownPages;
