import { Box } from '@chakra-ui/react';

import { getAllPosts } from '@api/mdxApi';
import { BlogPost } from '@typings/BlogPost';
import BlogLayout from '@layouts/BlogLayout';
import SEOHead from '@components/SEOHead';
import { NextPageWithLayout } from '@typings/NextPageWithLayout';
import { BlogPageHeader, BlogPageBody } from '@views/blog';
import allPageMessageProps, { AllPageMessage } from '@root/utils/appPageMessage';

type BlogPageProps = {
  posts: BlogPost[];
  allPageMessage?: AllPageMessage | null;
};

const BlogPage: NextPageWithLayout<BlogPageProps> = ({ posts }) => (
  <BlogLayout blogPosts={posts}>
    <Box w="full" pt={{ base: 10, lg: 8 }}>
      <SEOHead subTitle="Blog" />

      <BlogPageHeader />
      <BlogPageBody />
    </Box>
  </BlogLayout>
);

export async function getStaticProps(): Promise<{ props: BlogPageProps }> {
  const posts = getAllPosts(true) as BlogPost[];
  return {
    props: {
      posts,
      allPageMessage: await allPageMessageProps,
    },
  };
}

export default BlogPage;
