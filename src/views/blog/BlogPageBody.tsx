import { FunctionComponent } from 'react';
import { Box, Center, Grid, GridItem, Text } from '@chakra-ui/react';
import Image from 'next/image';

import EmptySearchImage from '@assets/images/empty-search.png';
import { useBlogPostsContext } from '@contextProviders/BlogPostsProvider';

import FeaturedBlogPost from './components/FeaturedBlogPost';
import BlogPostCard from './components/BlogPostCard';

const BlogPageBody: FunctionComponent = () => {
  const { featuredAndOrderedBlogPosts, searchPostsQuery, searchPostsResult } =
    useBlogPostsContext();

  const isFeaturedPostsView = !searchPostsQuery;
  const isEmptySearchResultView =
    !isFeaturedPostsView && !!searchPostsQuery && !searchPostsResult.length;

  return (
    <Grid
      as="section"
      w="full"
      templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', '1.25xl': 'repeat(3, 1fr)' }}
      rowGap={18}
      columnGap={{ base: 10, lg: 7, '1.25xl': 2, '1.5xl': 10 }}
      justifyItems={{ base: 'center', md: 'normal' }}
    >
      {isEmptySearchResultView && (
        <GridItem colSpan={3}>
          <Center flexDir="column" my={30}>
            <Box>
              <Image src={EmptySearchImage} width={97} height={94} placeholder="blur" />
            </Box>
            <Text mt={8}>Sorry, we couldn&apos;t find any results</Text>
          </Center>
        </GridItem>
      )}

      {isFeaturedPostsView && (
        <GridItem as="article" colSpan={3} display={{ base: 'none', '1.5xl': 'initial' }}>
          <FeaturedBlogPost post={featuredAndOrderedBlogPosts[0]} />
        </GridItem>
      )}

      {(isFeaturedPostsView ? featuredAndOrderedBlogPosts : searchPostsResult).map(
        (post, index) => (
          <GridItem
            key={post.data.title}
            as="article"
            display={isFeaturedPostsView && index === 0 ? { '1.5xl': 'none' } : 'initial'}
          >
            <BlogPostCard post={post} />
          </GridItem>
        )
      )}
    </Grid>
  );
};

export default BlogPageBody;
