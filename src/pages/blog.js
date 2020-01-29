import React from 'react';
import styled from "@emotion/styled";

import useAllBlogPosts from '../hooks/useAllBlogPosts';
import PostShort from '../components/blog/PostShort';
import Heading from '../components/Heading';
import FeaturePost from "../components/blog/FeaturePost";
import BlogContent from "../components/blog/BlogContent";
import {media} from "../utils/emotion";

const Wrapper = styled('div')`
  margin-top: 7rem;
`;

const BlogFeatureArticleContent = styled(BlogContent)`
  background-color: ${props => props.theme.colors.accentBackground};
  padding-bottom: 6.5rem;
  padding-top:0;
  ${media.desktop`
     padding-top: 0;
  `}
`;

const BlogPostsContent = styled(BlogContent)`
  background-color: ${props => props.theme.colors.blogTextBackground};
`;

const Blog = () => {
  const posts = useAllBlogPosts();
  const featurePosts = posts.filter(item => item.isFeature === true);

  return (
    <Wrapper>
      <BlogFeatureArticleContent>
        {featurePosts.map(featurePost => (
          <FeaturePost key={featurePost.id} post={featurePost} />
        ))}
      </BlogFeatureArticleContent>
      <BlogPostsContent>
        <Heading as='h1' mb={5}>All Posts</Heading>
        {posts.map(post => (
          <PostShort key={post.id} post={post} />
        ))}
      </BlogPostsContent>
    </Wrapper>
  );
};

export default Blog;
