const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const withSvgr = require('next-svgr');

const nextConfig = {
  images: { formats: ['image/webp'] },
};

module.exports = (_phase, { defaultPlugin }) => {
  const plugins = [withSvgr, withBundleAnalyzer];
  return plugins.reduce((acc, plugin) => plugin(acc), { ...nextConfig });
};
