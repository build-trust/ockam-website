const { createFilePath } = require(`gatsby-source-filesystem`);
const { startCase } = require('lodash');
const slugify = require('slugify');
const path = require('path');

const getMarkdownPages = require('./scripts/get-markdown-pages');
const getRedirects = require('./scripts/get-redirects');
const getLeverPages = require('./scripts/get-lever-pages');
const learnIndices = require('./scripts/get-algolia-learn-indices');

const mapReadmeSlug = slug => {
  return slug.replace(/\/readme/gi, '');
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions;
  const redirects = await getRedirects();
  const mdxPages = await getMarkdownPages(graphql);
  const leverPages = await getLeverPages(graphql);
  redirects.forEach(({ from, to }) =>
    createRedirect({
      fromPath: from,
      toPath: to,
      isPermanent: true,
      redirectInBrowser: true,
    })
  );
  mdxPages.forEach(mdxPage => createPage(mdxPage));
  leverPages.forEach(leverPage => createPage(leverPage));
};

exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions;
  const algoliaIndexes = {
    learn: learnIndices,
  };
  createPage({
    ...page,
    context: {
      ...page.context,
      algoliaIndexes,
    },
  });
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      alias: { $components: path.resolve(__dirname, 'src/components') },
    },
  });
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `lever`) {
    createNodeField({
      name: `slug`,
      node,
      value: slugify(node.text),
    });
  }

  if (node.internal.type === `Mdx`) {
    const parent = getNode(node.parent);
    const value = createFilePath({ node, getNode, basePath: `content` });
    createNodeField({
      name: `slug`,
      node,
      value: mapReadmeSlug(value),
    });

    createNodeField({
      name: 'id',
      node,
      value: node.id,
    });

    createNodeField({
      name: 'title',
      node,
      value: node.frontmatter.title || startCase(parent.name),
    });
  }
};
