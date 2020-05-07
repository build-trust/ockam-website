require("dotenv").config();

const remarkSlug = require('remark-slug');

const config = require("./config");
const queries = require('./scripts/get-algolia-queries');

const isProductionStage = config.env.STAGE === 'PRODUCTION';
const plugins = [
  'gatsby-plugin-sitemap',
  'gatsby-plugin-sharp',
  'gatsby-transformer-sharp',
  'gatsby-plugin-svgr',
  {
    resolve: `gatsby-plugin-layout`,
    options: {
      component: require.resolve(`./src/templates/index.js`),
    },
  },
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [ `gatsby-remark-images` ],
    },
  },
  {
    resolve: 'gatsby-plugin-mdx',
    options: {
      gatsbyRemarkPlugins: [
        {
          resolve: "gatsby-remark-images",
          options: {
            maxWidth: 1035,
          },
        },
        {
          resolve: 'gatsby-remark-copy-linked-files',
        },
      ],
      remarkPlugins: [remarkSlug],
      extensions: [".mdx", ".md"],
    },
  },
  'gatsby-plugin-emotion',
  'gatsby-plugin-remove-trailing-slashes',
  'gatsby-plugin-react-helmet',
  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "docs",
      path: `${__dirname}/src/content`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/assets`,
    },
  },
  {
    resolve: `gatsby-plugin-gtag`,
    options: {
      // your google analytics tracking id
      trackingId: config.gatsby.gaTrackingId,
      // Puts tracking script in the head instead of the body
      head: true,
      // enable ip anonymization
      anonymize: false,
    },
  },
  {
    resolve: `gatsby-plugin-emotion`,
    options: {
      "sourceMap": true,
      "autoLabel": process.env.NODE_ENV !== 'production',
      "labelFormat": "[local]",
      "cssPropOptimization": true,
    },
  },
  {
    resolve: `gatsby-plugin-prefetch-google-fonts`,
    options: {
      fonts: [
        {
          family: `IBM Plex Sans`,
          variants: ['300', '400', '400i', '500', '600', '700'],
        },
        {
          family: `IBM Plex Mono`,
          variants: ['300', '400', '500'],
        },
      ],
    },
  },
  {
    resolve: "gatsby-source-lever",
    options: {
      site: "ockam",
      verboseOutput: false,
    },
  },
];

if(isProductionStage) plugins.push({
  resolve: `gatsby-plugin-algolia`,
  options: {
    appId: config.env.ALGOLIA_APP_ID,
    apiKey: config.env.ALGOLIA_ADMIN_API_KEY,
    queries,
    chunkSize: 10000, // default: 1000
  },
});

module.exports = {
  pathPrefix: config.gatsby.pathPrefix,
  siteMetadata: {
    ockamLibraryRepo: config.general.ockamLibraryRepo,
    ockamWebsiteRepo: config.general.ockamWebsiteRepo,
    markdownPath: config.general.markdownPath,
    githubProductionPath: config.general.githubProductionPath,
    slackChannel: config.general.slackChannel,
    twitter: config.general.twitter,
    email: config.general.email,
    description: config.siteMetadata.description,
    title: config.siteMetadata.title,
    siteUrl: config.gatsby.siteUrl,
    env: config.env,
  },
  plugins,
};
