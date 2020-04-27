import React from 'react';
import PropTypes from 'prop-types';

import PageTemplate from './PageTemplate';
import LearnTemplate from './LearnTemplate';
import BlogTemplate from './BlogTemplate';

const Index = ({ children, pageContext, location, ...rest }) => {
  const isDocPage = pageContext.pageType === 'doc';
  const isBlogPage = pageContext.pageType === 'blog';
  const isJobPage = pageContext.pageType === 'job';

  if (isBlogPage) {
    return (
      <BlogTemplate location={location} {...rest}>
        {children}
      </BlogTemplate>
    );
  }
  if (isDocPage) {
    return (
      <LearnTemplate location={location} algoliaIndexes={pageContext.algoliaIndexes.learn} dependedRepos={pageContext.dependedRepos} {...rest}>
        {children}
      </LearnTemplate>
    );
  }

  if (isJobPage) {
    return (
      <PageTemplate location={location} {...rest}>
        {React.cloneElement(children, { job: pageContext.job})}
      </PageTemplate>
    );
  }

  return (
    <PageTemplate location={location} {...rest}>
      {children}
    </PageTemplate>
  );
};

Index.propTypes = {
  children: PropTypes.node.isRequired,
  pageContext: PropTypes.shape({
    pageType: PropTypes.oneOf(['doc', 'page', 'blog']),
    dependedRepos: PropTypes.arrayOf(PropTypes.shape({})),
    algoliaIndexes: PropTypes.arrayOf(PropTypes.shape({
      learn: PropTypes.arrayOf(PropTypes.string),
    })),
    job: PropTypes.shape({}),
  }).isRequired,
  location: PropTypes.shape({}).isRequired,

};


export default Index;
