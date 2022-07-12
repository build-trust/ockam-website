import { NextPage } from 'next';
import Head from 'next/head';

import { getAllPosts } from '@api/blogApi';
import { BlogPost, GroupedBlogPosts } from '@typings/BlogPost';
import BlogLayout from '@layouts/BlogLayout';
import { BlogPageHeader, BlogPosts } from '@views/blog';
import groupPostsByCategory from '@utils/groupPostsByCategory';
import CONFIG from '@config';

type BlogPageProps = { posts: BlogPost[]; groupedPosts: GroupedBlogPosts };

export function getStaticProps(): { props: BlogPageProps } {
  const posts = getAllPosts() as BlogPost[];
  const groupedPosts = groupPostsByCategory(posts);

  return { props: { posts, groupedPosts } };
}

const BlogPage: NextPage<BlogPageProps> = ({ posts, groupedPosts }) => (
  <BlogLayout posts={posts} groupedPosts={groupedPosts}>
    <Head>
      <title>{CONFIG.app.title} | Blog</title>
    </Head>
    <BlogPageHeader />
    <BlogPosts posts={posts} />
  </BlogLayout>
);

export default BlogPage;
