import { ReactElement, ReactNode, useEffect } from 'react';
import { Box } from '@chakra-ui/react';

import { getAllPosts } from '@api/blogApi';
import { BlogPost } from '@typings/BlogPost';
import BlogLayout from '@layouts/BlogLayout';
import SEOHead from '@components/SEOHead';
import { useBlogPostsContext } from '@contextProviders/BlogPostsProvider';
import { NextPageWithLayout } from '@typings/NextPageWithLayout';
import { BlogPageHeader, BlogPageBody } from '@views/blog';

type BlogPageProps = { posts: BlogPost[] };

const BlogPage: NextPageWithLayout<BlogPageProps> = ({ posts }) => {
  const { handleSetBlogPosts } = useBlogPostsContext();

  useEffect(() => {
    if (!handleSetBlogPosts || !posts) return;

    handleSetBlogPosts(posts);
  }, [handleSetBlogPosts, posts]);

  return (
    <Box w="full" pt={{ base: 10, lg: 8 }}>
      <SEOHead subTitle="Blog" />

      <BlogPageHeader />
      <BlogPageBody />
    </Box>
  );
};

BlogPage.getLayout = (page: ReactElement): ReactNode => <BlogLayout>{page}</BlogLayout>;

export function getStaticProps(): { props: BlogPageProps } {
  const posts = getAllPosts() as BlogPost[];
  return { props: { posts } };
}

export default BlogPage;
