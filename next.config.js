const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const { redirectJobs, redirectDocs } = require('./lib/redirects');

const nextConfig = {
  experimental: {
    forceSwcTransforms: true,
  },
  compiler: {
    styledComponents: true,
  },
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

const svgconfig = {
  webpack(config) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.('.svg'));

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: /url/ }, // exclude if *.svg?url
        use: ['@svgr/webpack'],
      }
    );

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
};

module.exports = { ...svgconfig, ...nextConfig };

// module.exports = (_phase, { defaultPlugin }) => {
//   const plugins = [withBundleAnalyzer];
//   return plugins.reduce((acc, plugin) => plugin(acc), { ...nextConfig });
// };
