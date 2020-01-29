import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import appleTouchIcon from '../assets/apple-touch-icon.png';
import favicon32 from '../assets/favicon-32x32.png';
import favicon16 from '../assets/favicon-16x16.png';
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
      <link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon} />
      <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
      <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
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
