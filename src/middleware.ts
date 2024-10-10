// eslint-disable-next-line @next/next/no-server-import-in-page
import { NextRequest, NextResponse } from 'next/server';

import CONFIG from '@config';

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    {
      source: '/((?!api|_next/static|_next/image|favicon.ico).*)',
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
      ],
    },
  ],
};

export default function middleware(request: NextRequest): NextResponse {
  const nonce = Buffer.from(crypto.randomUUID()).toString('base64');
  const cspHeader = `
    default-src 'self' https://account.ockam.io https://cdn.segment.com https://api.segment.io https://cdn.segment.com/analytics-next/bundles/* https://cdn.segment.com/next-integrations/integrations/* https://cdn.segment.com/v1/projects/${CONFIG.googleAnalytics.key}/settings https://tag.clearbitscripts.com https://buttons.github.io https://www.redditstatic.com https://api.github.com https://cdn.heapanalytics.com https://static.ads-twitter.com https://snap.licdn.com https://px.ads.linkedin.com https://alb.reddit.com https://heapanalytics.com https://analytics.twitter.com https://t.co/i/*;
    script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.segment.com https://api.segment.io https://cdn.segment.com/analytics-next/bundles/* https://cdn.segment.com/next-integrations/integrations/* https://cdn.segment.com/v1/projects/${CONFIG.googleAnalytics.key}/settings https://tag.clearbitscripts.com https://buttons.github.io https://www.redditstatic.com https://api.github.com https://cdn.heapanalytics.com https://static.ads-twitter.com https://snap.licdn.com https://px.ads.linkedin.com https://alb.reddit.com https://heapanalytics.com https://analytics.twitter.com https://t.co/i/*;
    style-src 'self' 'unsafe-inline';
    style-src-elem 'self' 'unsafe-inline' https://fonts.googleapis.com https://fonts.gstatic.com;
    img-src 'self' blob: data: https://cdn.segment.com https://api.segment.io https://cdn.segment.com/analytics-next/bundles/* https://cdn.segment.com/next-integrations/integrations/* https://cdn.segment.com/v1/projects/${CONFIG.googleAnalytics.key}/settings https://tag.clearbitscripts.com https://buttons.github.io https://www.redditstatic.com https://api.github.com https://cdn.heapanalytics.com https://static.ads-twitter.com https://snap.licdn.com https://px.ads.linkedin.com https://alb.reddit.com https://heapanalytics.com https://analytics.twitter.com https://t.co;
    font-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://fonts.gstatic.com;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    block-all-mixed-content;
    upgrade-insecure-requests;
`;
  // Replace newline characters and spaces
  const contentSecurityPolicyHeaderValue = cspHeader.replace(/\s{2,}/g, ' ').trim();

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-nonce', nonce);

  requestHeaders.set('Content-Security-Policy', contentSecurityPolicyHeaderValue);

  const response = NextResponse.next({
    headers: requestHeaders,
    request: {
      headers: requestHeaders,
    },
  });
  response.headers.set('Content-Security-Policy', contentSecurityPolicyHeaderValue);

  return response;
}
