const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
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
  ],
};

module.exports = (_phase, { defaultPlugin }) => {
  const plugins = [withSvgr, withBundleAnalyzer];
  return plugins.reduce((acc, plugin) => plugin(acc), { ...nextConfig });
};
