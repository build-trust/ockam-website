import React from 'react';
import PropTypes from 'prop-types';

import PageLayout from '../layouts/PageLayout';

const PageTemplate = ({ children, location }) => {
  return (
    <PageLayout location={location}>
      <>{children}</>
    </PageLayout>
  );
};

PageTemplate.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.shape({}).isRequired,
};

export default PageTemplate;
