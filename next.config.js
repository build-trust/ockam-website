const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const withSvgr = require('next-svgr');

const nextConfig = {
  images: { formats: ['image/webp'] },
};

module.exports = withPlugins([withSvgr, withBundleAnalyzer], nextConfig);
