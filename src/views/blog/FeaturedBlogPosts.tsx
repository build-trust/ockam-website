import { FunctionComponent } from 'react';

import { BlogPost } from '@typings/BlogPost';

import BlogPostCard from './components/BlogPostCard';
import FeaturedBlogPost from './components/FeaturedBlogPost';

type FeaturedBlogPostsProps = {
  highlightedFeaturedBlogPost: BlogPost;
  restFeaturedPosts: BlogPost[];
};

const FeaturedBlogPosts: FunctionComponent<FeaturedBlogPostsProps> = ({
  highlightedFeaturedBlogPost,
  restFeaturedPosts,
}) => (
  <>
    <BlogPostCard post={highlightedFeaturedBlogPost} display={{ base: 'block', '1.5xl': 'none' }} />
    <FeaturedBlogPost
      post={highlightedFeaturedBlogPost}
      display={{ base: 'none', '1.5xl': 'block' }}
    />

    {restFeaturedPosts.map((post) => (
      <BlogPostCard post={post} key={post.data.title} />
    ))}
  </>
);

export default FeaturedBlogPosts;
