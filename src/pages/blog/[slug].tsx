import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { Box, Flex, Link, Icon } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { ReactElement, ReactNode, useEffect, useRef } from 'react';

import GitHubColorIcon from '@assets/icons/github-color.svg';
import { getAllPosts, getPostBySlug, postFilePaths } from '@api/mdxApi';
import mdxComponents from '@components/mdx';
import { BlogPost, BlogPostData } from '@typings/BlogPost';
import BlogLayout from '@layouts/BlogLayout/BlogLayout';
import { BlogPostHeader } from '@views/blog';
import SEOHead from '@components/SEOHead';
import { NextPageWithLayout } from '@typings/NextPageWithLayout';
import { useBlogPostsContext } from '@contextProviders/BlogPostsProvider';
import { BLOG_PATH } from '@consts/paths';
import Card from '@components/Card';
import TableOfContent from '@components/TableOfContent';
import { TableOfContentItem } from '@typings/TableOfContentItem';
import useSetFullMaxHeightReducedByTopOffset from '@hooks/useSetFullMaxHeightReducedByTopOffset';

type BlogPostPageProps = {
  source: MDXRemoteSerializeResult;
  frontMatter: { [key: string]: string | number | boolean };
  posts: BlogPost[];
  tableOfContent: TableOfContentItem[];
};

const BlogPostPage: NextPageWithLayout<BlogPostPageProps> = ({
  source,
  frontMatter,
  tableOfContent,
  posts,
}) => {
  const stickySidebarRef = useRef<HTMLDivElement>();
  const router = useRouter();
  const canonicalPath = `${BLOG_PATH}/${router.query.slug}`;
  const { handleSetBlogPosts } = useBlogPostsContext();

  useEffect(() => {
    if (!handleSetBlogPosts || !posts) return;

    handleSetBlogPosts(posts);
  }, [handleSetBlogPosts, posts]);
  useSetFullMaxHeightReducedByTopOffset(stickySidebarRef);

  const title = (frontMatter?.metaTitle as string) || (frontMatter?.title as string) || '';
  const description =
    (frontMatter?.metaDescription as string) || (frontMatter?.description as string) || '';

  return (
    <>
      <SEOHead subTitle={title} description={description} canonicalPath={canonicalPath} />

      <Box
        maxW={{ base: '3xl', '1.5xl': 'fit-content' }}
        mt={{ base: 10, lg: 0 }}
        mx="auto"
        px={{ base: 5, '1.5xl': 0 }}
      >
        <BlogPostHeader post={frontMatter as BlogPostData} />

        <Flex w="full" mt={{ base: 10, '1.5xl': 16 }}>
          <Flex
            w="full"
            flex={1}
            direction="column"
            fontFamily="blogPostBody"
            fontSize="lg"
            color="brand.900"
            mr={8}
          >
            <MDXRemote {...source} components={mdxComponents} />
          </Flex>

          <Box w={{ base: '14rem', xl: '16rem' }} h="auto" display={{ base: 'none', lg: 'block' }}>
            <Card
              /* @ts-ignore */
              ref={stickySidebarRef}
              w="full"
              position="sticky"
              top={5}
              px={2}
              py={4}
              overflow="scroll"
            >
              <Link
                isExternal
                href={`https://github.com/build-trust/ockam-website/blob/production/src/content/blog/${router.query.slug}.mdx`}
                mb={6}
                py={3}
                px={2}
                fontWeight="medium"
                borderRadius="md"
                display="flex"
                alignItems="center"
                _hover={{ bgColor: 'avocado.50' }}
              >
                <Icon as={GitHubColorIcon} w={6} h={6} mr={4} />
                Edit on Github
              </Link>

              <TableOfContent data={tableOfContent} px={2} />
            </Card>
          </Box>
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
  const { source, frontMatter, tableOfContent } = await getPostBySlug(params.slug);
  const posts = getAllPosts() as BlogPost[];

  return {
    props: {
      // @ts-ignore
      tableOfContent,
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
