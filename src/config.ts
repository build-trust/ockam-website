import { CONTACT_PAGE_PATH } from '@consts/paths';

declare module 'react' {
  interface CSSProperties {
    /**
     * Add your custom properties here
     */
    textWrap?: string | number;
  }
}

const getRootUrl = (): string => {
  if (process.env.NEXT_PUBLIC_VERCEL_ENV === 'production')
    return process.env.NEXT_PUBLIC_SITE_URL || 'missing NEXT_PUBLIC_SITE_URL env';

  return process.env.NEXT_PUBLIC_VERCEL_URL
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : 'http://localhost:3001';
};

export default {
  app: {
    title: 'Ockam | Build Trust',
    description: `Modern applications are distributed, interconnected, and have Zero-Trust in network boundaries. These applications must exchange data with Trust. Ockam empowers developers to build applications that can Trust Data-in-Motion across complex, variable, and hostile networks. Ockam has a simple developer experience and powerful primitives that orchestrate end-to-end encryption, key management, authorization policy enforcement, and mutual authentication.`,
    rootUrl: getRootUrl(),
    recaptchaSiteKey:
      process.env.NEXT_PUBLIC_RECAPTCHA_SITEKEY || '6LfIDtwUAAAAAIt2vgTj7LTIJ9tqwlNKV4fZecbK',
  },
  salesforce: {
    oid: '00D4T000000FcUg',
    actionUrl: 'https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8',
    returnUrl: `${getRootUrl()}${CONTACT_PAGE_PATH}?contactFormStatus=success`,
    leadSource: 'Web',
    debug: '0',
    debugEmail: '',
    captchaSettings: {
      keyname: 'ockam_io',
      fallback: 'true',
      orgId: '00D4T000000FcUg',
      ts: '',
    },
  },
  lever: {
    siteName: 'ockam',
    apiUrl: 'https://api.lever.co/v0',
  },
  googleAnalytics: {
    key: '8dtzkipp65WtJaMsBoNbabRuFH3kTZFH',
  },
  auth0: {
    issuerBaseHost: process.env.AUTH0_ISSUER_BASE_HOST || '',
    clientId: process.env.AUTH0_CLIENT_ID,
    baseUrl: process.env.AUTH0_BASE_URL || '',
    audience: process.env.AUTH0_AUDIENCE || '',
  },
  // Controls global message shown on homepage.
  allPageMessage: {
    message: `❄️ Latest: Snowflake customers &mdash; stream your data to Postgres! **[Learn more](/blog/snowflake-push-postgres)**! 🐘`,
    except: ['/blog/snowflake-push-postgres', '/get-started'],
  },
};
