const config = {
  gatsby: {
    pathPrefix: '/',
    gaTrackingId: 'UA-142504862-1',
    siteUrl: process.env.GATSBY_ROOT_URL || 'http://localhost:3000',
  },
  env: {
    STAGE: process.env.GATSBY_STAGE || 'LOCAL',
    RECAPTCHA_SITEKEY:
      process.env.GATSBY_GOOGLE_RECAPTCHA_SITEKEY ||
      '6LfIDtwUAAAAAIt2vgTj7LTIJ9tqwlNKV4fZecbK',
    ROOT_URL: process.env.GATSBY_ROOT_URL || 'http://localhost:3000',
    ALGOLIA_APP_ID: process.env.GATSBY_ALGOLIA_APP_ID || 'IHFN1URK2S',
    ALGOLIA_ADMIN_API_KEY: process.env.GATSBY_ALGOLIA_ADMIN_API_KEY,
    ALGOLIA_SEARCH_API_KEY:
      process.env.GATSBY_ALGOLIA_SEARCH_API_KEY ||
      '62f878a8a39b0a0f8d7f7b054ea7dfd3',
  },
  general: {
    email: 'hello@ockam.io',
    ockamLibraryRepo: 'https://github.com/ockam-network/ockam',
    ockamWebsiteRepo: 'https://github.com/ockam-network/website',
    markdownPath: 'src/content',
    githubProductionPath: 'tree/production',
    communityChannel: 'https://github.com/ockam-network/ockam/discussions',
    twitter: 'https://twitter.com/Ockam_io',
    algoliaHitsPerPage: 5,
    starredRepoUsername: 'ockam-network',
    starredRepoName: 'ockam',
  },
  api: {
    githubUrl: 'https://api.github.com',
  },
  siteMetadata: {
    title: 'Ockam',
    description:
      "Ockam is a Tool Company. Ockam's open source developer tools make it simple to send trustful end-to-end encrypted messages between connected devices and cloud services.",
  },
};

module.exports = config;
