import React, { FunctionComponent, ReactElement, ReactNode } from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import NextNprogress from 'nextjs-progressbar';
import 'focus-visible/dist/focus-visible';

import CONFIG from '@config';
import StylesProvider from '@contextProviders/StylesProvider';
import { NextPageWithLayout } from '@typings/NextPageWithLayout';
import theme from '@theme';

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App: FunctionComponent<AppPropsWithLayout> = (props) => {
  const {
    Component,
    pageProps: { session, ...pageProps },
  } = props;
  const { getLayout = (page: ReactElement): ReactNode => page } = Component;

  return (
    <>
      <Head>
        <title>{CONFIG.app.title}</title>
        <meta name="description" content={CONFIG.app.description} />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />

        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Serif+Pro:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <StylesProvider>
        <NextNprogress color={theme.colors.brand[500]} height={3} />
        {getLayout(<Component {...pageProps} />)}
      </StylesProvider>
    </>
  );
};

export default App;
