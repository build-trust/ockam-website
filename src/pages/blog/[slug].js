import { MDXRemote } from 'next-mdx-remote'
import Link from 'next/link'
import { Link as ChakraLink, AspectRatio, Stack, Text, chakra } from '@chakra-ui/react'
import { getAllPosts, getPostBySlug, postFilePaths } from '../../api/blogApi';
import mdxComponents from '@components/mdx';
import { ArrowBackIcon } from '@chakra-ui/icons'

import { Box, Heading, Flex } from '@chakra-ui/react';
import BlogLayout from '@layouts/BlogLayout/BlogLayout';

export default function PostPage({ source, frontMatter, posts }) {
  console.log('authorAvatar',frontMatter.authorAvatar)
  return (
    <BlogLayout posts={posts}>
      <Box alignSelf="flex-start" mb={6} display={{ base: 'block', lg: 'none' }}>
        <Link
          as={`/blog`}
          href={`/blog`}
        >
          <ChakraLink fontSize="sm">
            <ArrowBackIcon /> Back to post list
          </ChakraLink>
        </Link>
      </Box>
      {/* @todo unify this card like container to be consistent and reusable across the app */}
      <Flex
        borderWidth='1px'
        direction="column"
        p={10}
        border="1px"
        borderColor="gray.200"
        borderBottom="4px"
        borderBottomColor="avocado.400"
        borderRadius="md"
        bg="white"
      >
        <Box mb={12}>
          <Heading mb={2} alignSelf="flex-start" as="h1">{frontMatter.title}</Heading>
          <Stack spacing="24px">
            <Text fontSize="sm" color="gray.600">
              Published <chakra.span color="gray.700" fontWeight="semibold">{frontMatter.date}</chakra.span> by <chakra.span color="gray.700" fontWeight="semibold">{frontMatter.author}</chakra.span>
            </Text>
          </Stack>
        </Box>
        <MDXRemote {...source} components={{ ...mdxComponents, AspectRatio }} />
      </Flex>
    </BlogLayout>
  )
}

export const getStaticProps = async ({ params }) => {
  const { source, frontMatter } = await getPostBySlug(params.slug)
  const posts = getAllPosts();
  return {
    props: {
      source,
      frontMatter,
      posts,
    },
  }
}

export const getStaticPaths = async () => {
  const paths = postFilePaths
    .map((path) => path.replace(/\.mdx?$/, ''))
    .map((slug) => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}

