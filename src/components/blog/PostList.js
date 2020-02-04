import React from 'react';

import Heading from '../Heading';
import useAllBlogPosts from '../../hooks/useAllBlogPosts';

import PostShort from './PostShort';

const PostList = () => {
  const posts = useAllBlogPosts();
  return (
    <div>
      <Heading as="h1" mb={5}>
        All Blog posts
      </Heading>
      {posts.map(post => (
        <PostShort key={post.id} post={post} />
      ))}
    </div>
  );
};

PostList.propTypes = {};

export default PostList;
