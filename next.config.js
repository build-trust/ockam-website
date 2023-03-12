const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const { redirectJobs, redirectDocs } = require('./lib/redirects');
const withSvgr = require('next-svgr');

const nextConfig = {
  images: { formats: ['image/webp'] },
  redirects: async () => [
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
