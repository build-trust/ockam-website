module.exports = {
  siteUrl:
    process.env.NEXT_PUBLIC_VERCEL_ENV === 'production'
      ? process.env.NEXT_PUBLIC_SITE_URL
      : process.env.NEXT_PUBLIC_VERCEL_URL,
  exclude: ['/404'],
  generateRobotsTxt: process.env.NEXT_PUBLIC_VERCEL_ENV === 'production',
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        disallow: ['/404'],
      },
      { userAgent: '*', allow: '/' },
    ],
  },
  generateIndexSitemap: false,
};
