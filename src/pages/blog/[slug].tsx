import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { Box, Flex } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { ReactElement, ReactNode, useEffect } from 'react';

import { getAllPosts, getPostBySlug, postFilePaths } from '@api/blogApi';
import mdxComponents from '@components/mdx';
import { BlogPost, BlogPostData } from '@typings/BlogPost';
import BlogLayout from '@layouts/BlogLayout/BlogLayout';
import { BlogPostHeader } from '@views/blog';
import SEOHead from '@components/SEOHead';
import { NextPageWithLayout } from '@typings/NextPageWithLayout';
import { useBlogPostsContext } from '@contextProviders/BlogPostsProvider';
import { BLOG_PATH } from '@consts/paths';

type BlogPostPageProps = {
  source: MDXRemoteSerializeResult;
  frontMatter: { [key: string]: string | number | boolean };
  posts: BlogPost[];
};

const BlogPostPage: NextPageWithLayout<BlogPostPageProps> = ({ source, frontMatter, posts }) => {
  const router = useRouter();
  const canonicalPath = `${BLOG_PATH}/${router.query.slug}`;
  const { handleSetBlogPosts } = useBlogPostsContext();

  useEffect(() => {
    if (!handleSetBlogPosts || !posts) return;

    handleSetBlogPosts(posts);
  }, [handleSetBlogPosts, posts]);

  return (
    <>
      <SEOHead
        subTitle={(frontMatter?.metaTitle as string) || ''}
        description={(frontMatter?.metaDescription as string) || ''}
        canonicalPath={canonicalPath}
      />

      <Box
        maxW={{ base: '3xl', '1.5xl': 'fit-content' }}
        mt={{ base: 10, lg: 0 }}
        mx="auto"
        px={{ base: 5, '1.5xl': 0 }}
      >
        <BlogPostHeader post={frontMatter as BlogPostData} />

        <Flex
          direction="column"
          maxW="52rem"
          mx="auto"
          mt={{ base: 10, '1.5xl': 16 }}
          fontFamily="blogPostBody"
          fontSize="lg"
          color="brand.900"
        >
          <MDXRemote {...source} components={mdxComponents} />
        </Flex>
      </Box>
    </>
  );
};

BlogPostPage.getLayout = (page: ReactElement): ReactNode => <BlogLayout>{page}</BlogLayout>;

type ParamsType = {
  params: { slug: string };
};

export const getStaticProps = async ({
  params,
}: ParamsType): Promise<{ props: BlogPostPageProps }> => {
  const { source, frontMatter } = await getPostBySlug(params.slug);
  const posts = getAllPosts() as BlogPost[];

  return {
    props: {
      source,
      frontMatter,
      posts,
    },
  };
};

export const getStaticPaths = async (): Promise<{
  paths: ParamsType[];
  fallback: boolean;
}> => {
  const paths = postFilePaths
    .map((path) => path.replace(/\.mdx?$/, ''))
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export default BlogPostPage;
