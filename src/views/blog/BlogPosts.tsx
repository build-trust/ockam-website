import { FunctionComponent, useContext } from 'react';
import { orderBy } from 'lodash';
import { Grid } from '@chakra-ui/react';

import { BlogPost } from '@typings/BlogPost';
import { SearchValueContext } from '@contextProviders/SearchValueProvider';

import FeaturedBlogPosts from './FeaturedBlogPosts';
import SearchBlogPosts from './SearchBlogPosts';

type BlogPostsProps = {
  posts: BlogPost[];
};

const BlogPosts: FunctionComponent<BlogPostsProps> = ({ posts }) => {
  const featuredPosts = posts.filter((post) => post.data.isFeatured);
  const [highlightedFeaturedBlogPost, ...restFeaturedPosts] = orderBy(
    featuredPosts,
    ['data.featuredOrder', 'data.date'],
    ['asc', 'asc']
  );

  const { searchValue, searchPosts } = useContext(SearchValueContext);

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
      {searchValue ? (
        <SearchBlogPosts posts={searchPosts || []} />
      ) : (
        <FeaturedBlogPosts
          highlightedFeaturedBlogPost={highlightedFeaturedBlogPost}
          restFeaturedPosts={restFeaturedPosts}
        />
      )}
    </Grid>
  );
};

export default BlogPosts;
