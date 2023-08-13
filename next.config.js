const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const { redirectJobs, redirectDocs } = require('./lib/redirects');
const withSvgr = require('next-svgr');

const nextConfig = {
  images: { formats: ['image/webp'] },
  publicRuntimeConfig: {
    auth0: {
      issuerBaseHost: process.env.AUTH0_ISSUER_BASE_HOST,
      clientId: process.env.AUTH0_CLIENT_ID,
      baseUrl: process.env.AUTH0_BASE_URL,
    },
  },
  redirects: async () => [
    {
      source: '/learn/guides/team/values_and_virtues_on_the_Ockam_Team',
      destination: '/mission',
      permanent: true,
    },
    {
      source: '/learn/how-to-guides/high-performance-team/engineering_levels',
      destination: '/blog/levels_ladder',
      permanent: true,
    },
    {
      source: '/learn/blog/:slug*',
      destination: '/blog/:slug*',
      permanent: true,
    },
    {
      source: '/open-source/:slug*',
      destination: '/open-source',
      permanent: true,
    },
    {
      source: '/learn/blog/trust_influxdb/',
      destination: '/blog/connect_private_influxdb',
      permanent: true,
    },
    {
      source: '/learn/how-to-guides/high-performance-team/values_and_virtues_on_the_Ockam_Team/',
      destination: '/blog/high_performance_team',
      permanent: true,
    },
    {
      source: '/learn/guides/contributions/CONTRIBUTING',
      destination:
        'https://github.com/build-trust/.github/blob/main/CONTRIBUTING.md#contributing-to-ockam-on-github',
      permanent: true,
    },
    {
      source: '/learn/how-to-guides/contributing/CONTRIBUTING',
      destination:
        'https://github.com/build-trust/.github/blob/main/CONTRIBUTING.md#contributing-to-ockam-on-github',
      permanent: true,
    },
    {
      source: '/learn/how-to-guides/contributing/CONTRIBUTING/',
      destination:
        'https://github.com/build-trust/.github/blob/main/CONTRIBUTING.md#contributing-to-ockam-on-github',
      permanent: true,
    },
    ...redirectDocs,
    ...redirectJobs,
  ],
};

module.exports = (_phase, { defaultPlugin }) => {
  const plugins = [withSvgr, withBundleAnalyzer];
  return plugins.reduce((acc, plugin) => plugin(acc), { ...nextConfig });
};
