import { ReactElement, ReactNode, useEffect } from 'react';

import { getAllPosts } from '@api/blogApi';
import { BlogPost } from '@typings/BlogPost';
import BlogLayout from '@layouts/BlogLayout';
import { BlogPageHeader, BlogPosts } from '@views/blog';
import SEOHead from '@components/SEOHead';
import { useBlogPostsContext } from '@contextProviders/BlogPostsProvider';
import { NextPageWithLayout } from '@typings/NextPageWithLayout';

type BlogPageProps = { posts: BlogPost[] };

const BlogPage: NextPageWithLayout<BlogPageProps> = ({ posts }) => {
  const { handleSetBlogPosts } = useBlogPostsContext();

  useEffect(() => {
    if (!handleSetBlogPosts || !posts) return;

    handleSetBlogPosts(posts);
  }, [handleSetBlogPosts, posts]);

  return (
    <>
      <SEOHead subTitle="Blog" />

      <BlogPageHeader />
      <BlogPosts />
    </>
  );
};

BlogPage.getLayout = (page: ReactElement): ReactNode => <BlogLayout>{page}</BlogLayout>;

export function getStaticProps(): { props: BlogPageProps } {
  const posts = getAllPosts() as BlogPost[];
  return { props: { posts } };
}

export default BlogPage;
