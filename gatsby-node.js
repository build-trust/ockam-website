const { createFilePath } = require(`gatsby-source-filesystem`);

const path = require("path");
const { startCase } = require("lodash");

const isNodeBlogPage = (node) => node.fields.slug && node.fields.slug.split("/")[1] === 'blog';

const mapReadmeSlug = (slug) => {
  return slug.replace(/\/readme/gi, '')
};

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
    const isBlog = isNodeBlogPage(node);
    const page = {
      path: node.fields.slug ? node.fields.slug : "/",
      component: isBlog ? path.resolve("./src/templates/BlogTemplate.js") : path.resolve("./src/templates/LearnTemplate.js"),
      context: {
        id: node.fields.id,
        pageType: isBlog ? 'blog' : 'doc',
      },
    };
    createPage(page);
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
};

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
      value: mapReadmeSlug(value),
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

