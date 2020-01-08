const { createFilePath } = require(`gatsby-source-filesystem`);

const path = require("path");
const startCase = require("lodash.startcase");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const results =  await graphql(`
    {
      allMdx {
        edges {
          node {
            fields {
              id
            }
            tableOfContents
            fields {
              slug
            }
          }
        }
      }
    }
  `);
  if (results.errors) {
    console.log(results.errors); // eslint-disable-line no-console
  }

  results.data.allMdx.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug ? node.fields.slug : "/",
      component: path.resolve("./src/templates/DocsTemplate.js"),
      context: {
        id: node.fields.id,
        pageType: 'doc',
      },
    });
  });
};

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;
    const isBlog = page.path && page.path.split("/")[1] === 'blog';
    if(isBlog) {
      deletePage(page);
      createPage({
        ...page,
        context: {
          ...page.context,
          pageType: `blog`,
        },
      });
    } else {
      createPage(page);
    }



}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
      alias: { $components: path.resolve(__dirname, "src/components") },
    },
  });
};

exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name: "@babel/plugin-proposal-export-default-from",
  });
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Mdx`) {
    const parent = getNode(node.parent);
    const value = createFilePath({ node, getNode, basePath: `content` });

    createNodeField({
      name: `slug`,
      node,
      value,
    });

    createNodeField({
      name: "id",
      node,
      value: node.id,
    });

    createNodeField({
      name: "title",
      node,
      value: node.frontmatter.title || startCase(parent.name),
    });
  }
};

