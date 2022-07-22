import Head from 'next/head';
import React, { FunctionComponent, ReactNode } from 'react';

import { KEYS } from '@consts/seo';
import CONFIG from '@config';

type SEOHeadProps = {
  children?: ReactNode;
  title?: string;
  subTitle?: string;
  description?: string;
  ogImageSrc?: string;
  canonicalPath?: string;
  smallTwitterCard?: boolean;
};

const SEOHead: FunctionComponent<SEOHeadProps> = ({
  children,
  title,
  subTitle,
  description,
  ogImageSrc,
  canonicalPath,
  smallTwitterCard,
}) => {
  const commonTitleWithSubTitle = subTitle && `${CONFIG.app.title} | ${subTitle}`;
  const specificTitle = title || commonTitleWithSubTitle;
  const ogImageUrl = `${CONFIG.app.rootUrl}${ogImageSrc}`;
  const canonicalUrl = `${CONFIG.app.rootUrl}${canonicalPath}`;

  return (
    <Head>
      {specificTitle && (
        <>
          <title key={KEYS.title}>{specificTitle}</title>
          <meta property="og:title" content={specificTitle} key={KEYS.ogTitle} />
          <meta name="twitter:title" content={specificTitle} key={KEYS.twitterTitle} />
        </>
      )}

      {description && (
        <>
          <meta name="description" content={description} key={KEYS.description} />
          <meta property="og:description" content={description} key={KEYS.ogDescription} />
          <meta name="twitter:description" content={description} key={KEYS.twitterDescription} />
        </>
      )}

      {ogImageSrc && (
        <>
          <meta property="og:image" content={ogImageUrl} key={KEYS.ogImageUrl} />
          <meta name="twitter:image" content={ogImageUrl} key={KEYS.twitterImageUrl} />
        </>
      )}
      {canonicalPath && <link rel="canonical" href={canonicalUrl} key={KEYS.canonicalUrl} />}
      {smallTwitterCard && <meta name="twitter:card" content="summary" key={KEYS.twitterCard} />}

      {children}
    </Head>
  );
};

export default SEOHead;
