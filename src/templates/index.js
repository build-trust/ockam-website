import React from 'react';
import PropTypes from 'prop-types';

import PageTemplate from './PageTemplate';
import DocsTemplate from './DocsTemplate';
import BlogTemplate from './BlogTemplate';

const Index = ({ children, pageContext, location, ...rest }) => {
  const isDocPage = pageContext.pageType === 'doc';
  const isBlogPage = pageContext.pageType === 'blog';
  console.log('rest',rest);
  if (isBlogPage) {
    return <BlogTemplate location={location} {...rest}>{children}</BlogTemplate>;
  }
  if (isDocPage) {
    return <DocsTemplate location={location} {...rest}>{children}</DocsTemplate>;
  }


  return <PageTemplate location={location} {...rest}>{children}</PageTemplate>;
};

Index.propTypes = {
  children: PropTypes.node.isRequired,
  pageContext: PropTypes.shape({
    pageType: PropTypes.oneOf(['doc', 'page', 'blog']),
  }).isRequired,
  location: PropTypes.shape({}).isRequired,
};

export default Index;
