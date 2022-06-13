import Link from 'next/link'
import { getAllPosts } from '../../../api/blogApi';
import { Box, Container, Flex, Heading, LinkBox, LinkOverlay, SimpleGrid, Text } from '@chakra-ui/react';
import BlogLayout from '@layouts/BlogLayout/BlogLayout';


export default function Index({ posts }) {
  return (
      <BlogLayout posts={posts}>
        <Heading mb={16} size='lg' as="h1" alignSelf="flex-start">Blog posts</Heading>
        <SimpleGrid columns={{ base: 1, md:2 }} spacing={10} >
          {posts.map((post) => (
            // @todo unify this card like container to be consistent and reusable across the app
            <Flex
              key={post.filePath}
              borderWidth='1px'
              direction="column"
              p={6}
              border="1px"
              borderColor="gray.200"
              borderBottom="4px"
              borderBottomColor="avocado.400"
              borderRadius="md"
              bg="white"
              maxW="lg"
            >
              <LinkBox flex={1} as="article" display="flex" flexDirection="column" cursor="pointer">
                <Heading size='md' mb={3} as="h4" fontSize="xl" color="brand.900">{post.data.title}</Heading>
                <Text mb={3}>{post.data.description}</Text>
                <Link
                  as={`/learn/blog/${post.filePath.replace(/\.mdx?$/, '')}`}
                  href={`/learn/blog/[slug]`}
                >
                  <LinkOverlay mt="auto" ml="auto">
                    Read more
                  </LinkOverlay>
                </Link>
              </LinkBox>
            </Flex>
          ))}
        </SimpleGrid>
      </BlogLayout>
  )
}

export function getStaticProps() {
  const posts = getAllPosts();

  return { props: { posts } }
}
