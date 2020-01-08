import React from 'react';
import PropTypes from 'prop-types';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import PageSection from '../pages/PageSection';
import Heading from '../Heading';

const Post = ({ title, body }) => {
  return (
    <PageSection>
      <Heading as="h1" mb={5}>{title}</Heading>
      <MDXRenderer>{body}</MDXRenderer>
    </PageSection>
  );
};

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.shape({}).isRequired,
};

export default Post;
