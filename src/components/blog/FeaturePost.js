import React from 'react';
import PropTypes from 'prop-types';

import Heading from '../Heading';
import Text from '../Text';

import AuthorBox from './AuthorBox';
import PostDetailsBox from './PostDetailsBox';
import PostLink from './PostLink';

const FeaturePost = ({ post }) => {
  const { title, description, author, authorAvatar, slug } = post;
  return (
    <div>
      <PostDetailsBox>FEATURE ARTICLE</PostDetailsBox>
      <PostLink to={slug}>
        <Heading as="h1">{title}</Heading>
      </PostLink>
      <Text>{description}</Text>
      <AuthorBox name={author} image={authorAvatar} />
    </div>
  );
};

FeaturePost.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    authorAvatar: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
  }).isRequired,
};

export default FeaturePost;
