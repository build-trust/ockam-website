import { FunctionComponent } from 'react';
import { Grid } from '@chakra-ui/react';

import { useBlogPostsContext } from '@contextProviders/BlogPostsProvider';

import FeaturedBlogPosts from './FeaturedBlogPosts';
import SearchBlogPosts from './SearchBlogPosts';

type BlogPostsProps = {};

const BlogPosts: FunctionComponent<BlogPostsProps> = () => {
  const { featuredAndOrderedBlogPosts, searchPostsQuery, searchPostsResult } =
    useBlogPostsContext();

  if (!featuredAndOrderedBlogPosts?.length) return null;

  return (
    <Grid
      as="section"
      w="fit-content"
      templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', '1.25xl': 'repeat(3, 1fr)' }}
      rowGap={18}
      columnGap={{ base: 10, lg: 7, '1.25xl': 2, '1.5xl': 10 }}
      mx="auto"
      justifyItems={{ base: 'center', xl: 'normal' }}
    >
      {searchPostsQuery ? (
        <SearchBlogPosts posts={searchPostsResult} />
      ) : (
        <FeaturedBlogPosts
          highlightedFeaturedBlogPost={featuredAndOrderedBlogPosts[0]}
          restFeaturedPosts={featuredAndOrderedBlogPosts.slice(1)}
        />
      )}
    </Grid>
  );
};

export default BlogPosts;
