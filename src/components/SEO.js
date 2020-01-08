import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import config from '../../config';

const SEO = ({ title, description, slug = '' }) => {
  const {
    gatsby: { siteUrl },
  } = config;

  const metaTitle = title || config.siteMetadata.title;
  const metaDescription = description || config.siteMetadata.description;
  let canonicalUrl =
    config.gatsby.pathPrefix !== '/'
      ? siteUrl + config.gatsby.pathPrefix
      : siteUrl;
  canonicalUrl += slug;

  return (
    <Helmet>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="twitter:title" content={metaTitle} />
      <meta property="twitter:description" content={metaDescription} />
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  slug: PropTypes.string,
};

SEO.defaultProps = {
  title: config.siteMetadata.title,
  description: config.siteMetadata.description,
  slug: '',
};

export default SEO;
