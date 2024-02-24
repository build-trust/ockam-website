import { FunctionComponent, ReactElement, ReactNode, useEffect, useMemo, useState } from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import NextNprogress from 'nextjs-progressbar';
import 'focus-visible/dist/focus-visible';
import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation';
import { GoogleAnalytics } from 'nextjs-google-analytics';
import Script from 'next/script';

import Auth, { identify } from '@root/components/Auth';
import RedditPixel from '@root/utils/RedditPixel';
import defaultOgImage from '@assets/images/open-graphs/default.png';
import CONFIG from '@config';
import { KEYS } from '@consts/seo';
import StylesProvider from '@contextProviders/StylesProvider';
import MobileNavbarProvider from '@contextProviders/MobileNavbarProvider';
import { NextPageWithLayout } from '@typings/NextPageWithLayout';
import theme from '@theme';
import { clearTrailingSlashes } from '@utils/seoUtils';
import '../utils/segmentAnalytics';
import ScrollTracking from '@utils/scrollTracking';

ScrollTracking();

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App: FunctionComponent<AppPropsWithLayout> = (props) => {
  const {
    Component,
    pageProps: { session, ...pageProps },
  } = props;
  const { getLayout = (page: ReactElement): ReactNode => page } = Component;
  const isBrowser = typeof window !== 'undefined';
  const [initialRouteTracked, setInitialRouteTracked] = useState(false);

  const { events } = useRouter();
  const pathname = usePathname();
  const canonicalUrl = useMemo(
    () => clearTrailingSlashes(CONFIG.app.rootUrl + pathname),
    [pathname],
  );
  const ogImageUrl = `${CONFIG.app.rootUrl}${defaultOgImage.src}`;

  useEffect(() => {
    async function sync(): Promise<void> {
      if (isBrowser && !initialRouteTracked && window.location.search === '') {
        setInitialRouteTracked(true);
        await identify();
        // @ts-ignore window.analytics undefined below
        window.analytics.page(window.location.href);
      }
      events.on('routeChangeComplete', async (url) => {
        await identify();
        // @ts-ignore window.analytics undefined below
        window.analytics.page(url);
      });
    }
    sync();
  }, [events, isBrowser, initialRouteTracked]);

  return (
    <Auth
      signinPath="/auth/signin"
      signupPath="/auth/signup"
      signoutPath="/auth/signout"
      callbackPath="/auth/callback"
    >
      <Head>
        <title key={KEYS.title}>{CONFIG.app.title}</title>
        <meta name="description" content={CONFIG.app.description} key={KEYS.description} />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={CONFIG.app.title} key={KEYS.ogTitle} />
        <meta property="og:image" content={ogImageUrl} key={KEYS.ogImageUrl} />
        <meta property="og:description" content={CONFIG.app.description} key={KEYS.ogDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta name="twitter:card" content="summary_large_image" key={KEYS.twitterCard} />
        <meta name="twitter:title" content={CONFIG.app.title} key={KEYS.twitterTitle} />
        <meta name="twitter:site" content="@Ockam" key={KEYS.twitterSite} />
        <meta
          name="twitter:description"
          content={CONFIG.app.description}
          key={KEYS.twitterDescription}
        />
        <meta name="twitter:image" content={ogImageUrl} key={KEYS.twitterImageUrl} />
        <link rel="canonical" href={canonicalUrl} key={KEYS.canonicalUrl} />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </Head>
      <Script
        id="6senseWebTag"
        async
        src="https://j.6sc.co/j/fdf9f91d-ec8b-4daf-b254-b8960c0e3c2e.js"
      />
      <Script
        async
        src="https://tag.clearbitscripts.com/v1/pk_29cb8603dd5cf9cfebe03cb5cdb56049/tags.js"
        referrerPolicy="strict-origin-when-cross-origin"
      />
      <Script async defer src="https://buttons.github.io/buttons.js" />
      <RedditPixel />
      <StylesProvider>
        <MobileNavbarProvider>
          <NextNprogress color={theme.colors.brand[500]} height={3} />
          {getLayout(<Component {...pageProps} />)}
        </MobileNavbarProvider>
        <GoogleAnalytics trackPageViews />
      </StylesProvider>
    </Auth>
  );
};

export default App;
