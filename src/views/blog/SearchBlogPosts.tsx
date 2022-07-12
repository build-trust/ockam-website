import { FunctionComponent } from 'react';

import { BlogPost } from '@typings/BlogPost';

import BlogPostCard from './components/BlogPostCard';

type SearchBlogPostsProps = {
  posts: BlogPost[];
};

const SearchBlogPosts: FunctionComponent<SearchBlogPostsProps> = ({ posts }) => (
  <>
    {posts.map((post) => (
      <BlogPostCard post={post} key={post.data.title} />
    ))}
  </>
);

export default SearchBlogPosts;
