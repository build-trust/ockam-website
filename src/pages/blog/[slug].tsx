import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { Flex } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useRef } from 'react';

import { generateSlugFromPath, getAllPosts, getPostBySlug, postFilePaths } from '@api/mdxApi';
import mdxComponents from '@components/mdx';
import { BlogPost, BlogPostData } from '@typings/BlogPost';
import BlogLayout from '@layouts/BlogLayout/BlogLayout';
import { BlogPostHeader, BlogPostRightNavigation } from '@views/blog';
import SEOHead from '@components/SEOHead';
import { NextPageWithLayout } from '@typings/NextPageWithLayout';
import { BLOG_PATH } from '@consts/paths';
import BlogsPagination from '@root/components/BlogsPagination';

const RIGHT_SIDEBAR_WIDTH = '16rem';

type BlogPostPageProps = {
  source: MDXRemoteSerializeResult;
  frontMatter: { [key: string]: string | number | boolean };
  posts: BlogPost[];
};

const BlogPostPage: NextPageWithLayout<BlogPostPageProps> = ({ source, frontMatter, posts }) => {
  const router = useRouter();
  const blogPostBodyRef = useRef<HTMLDivElement | null>(null);

  const title = (frontMatter?.metaTitle as string) || (frontMatter?.title as string) || '';
  const description =
    (frontMatter?.metaDescription as string) || (frontMatter?.description as string) || '';
  const canonicalPath = `${BLOG_PATH}/${router.query.slug}`;

  return (
    <BlogLayout blogPosts={posts}>
      <SEOHead subTitle={title} description={description} canonicalPath={canonicalPath} />

      <Flex
        direction="column"
        w="full"
        maxW={{ base: '3xl', '1.5xl': 'full' }}
        mt={{ base: 10, lg: 0 }}
        mx="auto"
      >
        <BlogPostHeader post={frontMatter as BlogPostData} />

        <Flex mt={{ base: 10, '1.5xl': 16 }} position="relative">
          <Flex
            flexDirection="column"
            ref={blogPostBodyRef}
            w="full"
            direction="column"
            fontFamily="blogPostBody"
            fontSize="lg"
            color="brand.900"
            pr={{ '1.5xl': `calc(${RIGHT_SIDEBAR_WIDTH} + 1.5rem)` }}
          >
            <MDXRemote {...source} components={mdxComponents} />
            <BlogsPagination />
          </Flex>

          <BlogPostRightNavigation
            slug={router.query.slug as string}
            tableOfContentSource={blogPostBodyRef?.current}
            w={RIGHT_SIDEBAR_WIDTH}
          />
        </Flex>
      </Flex>
    </BlogLayout>
  );
};

type ParamsType = {
  params: { slug: string };
};

export const getStaticProps = async ({
  params,
}: ParamsType): Promise<{ props: BlogPostPageProps }> => {
  const { source, frontMatter } = await getPostBySlug(params.slug);
  const posts = getAllPosts(true) as BlogPost[];
  const postsWithSlug = posts.map((post) => ({
    ...post,
    slug: generateSlugFromPath(post.filePath),
  }));

  return {
    props: {
      source,
      frontMatter,
      posts: postsWithSlug,
    },
  };
};

export const getStaticPaths = async (): Promise<{
  paths: ParamsType[];
  fallback: boolean;
}> => {
  const paths = postFilePaths
    .map((path) => generateSlugFromPath(path))
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export default BlogPostPage;
