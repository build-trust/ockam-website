import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import appleTouchIcon from '../assets/apple-touch-icon.png';
import favicon32 from '../assets/favicon-32x32.png';
import favicon16 from '../assets/favicon-16x16.png';
import config from '../../config';
import useDefaultOgImage from "../hooks/useDefaultOgImage";
import useSiteMetadata from "../hooks/useSiteMetadata";

const getSrcFromGraphqlImage = image => image && image.childImageSharp && image.childImageSharp.fixed.src;

const SEO = ({ title, description, image, slug }) => {
  const defaultOgImage = useDefaultOgImage();
  const siteMetadata = useSiteMetadata();

  const metaImage = image || getSrcFromGraphqlImage(defaultOgImage);
  const metaImageUrl = siteMetadata.siteUrl + metaImage;
  const metaTitle = title || siteMetadata.title;
  const metaDescription = description || siteMetadata.description;

  let canonicalUrl =
    config.gatsby.pathPrefix !== '/'
      ? siteMetadata.siteUrl + config.gatsby.pathPrefix
      : siteMetadata.siteUrl;
  canonicalUrl += slug;

  return (
    <Helmet>
      <title>{metaTitle}</title>
      <link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon} />
      <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
      <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
      <meta name="description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:image" content={metaImageUrl} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImageUrl} />
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  slug: PropTypes.string,
  image: PropTypes.string,
};

SEO.defaultProps = {
  title: '',
  description: '',
  slug: '',
  image: '',
};

export default SEO;
