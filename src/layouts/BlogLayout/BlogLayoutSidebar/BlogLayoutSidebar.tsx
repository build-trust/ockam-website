import { FunctionComponent } from 'react';
import Link from 'next/link';
import { Box, Flex, FlexProps, Link as ChakraLink } from '@chakra-ui/react';

import { HOME_PATH } from '@consts/paths';
import LogoDark from '@assets/logo-dark.svg';
import { useBlogPostsContext } from '@contextProviders/BlogPostsProvider';

import BlogLayoutSocials from '../BlogLayoutSocials';
import BlogSearchInput from '../BlogSearchInput';

import BlogLayoutSidebarNavigation from './BlogLayoutSidebarNavigation';
import { GroupedBlogPosts } from '@root/typings/BlogPost';

const BlogLayoutSidebar: FunctionComponent<FlexProps> = (props) => {
  const { groupedBlogPostsByCategory } = useBlogPostsContext();

  console.log(groupedBlogPostsByCategory);

  const onlyPublishedPosts = (groupedPosts: GroupedBlogPosts) => {
    const publishedPosts = Object.entries(groupedPosts).map(([category, posts]) => {
      return [
        category,
        posts.filter(
          (post) =>
            post.data && (post.data.published || typeof post.data.published === 'undefined'),
        ),
      ];
    });
    return Object.fromEntries(publishedPosts);
  };
  return (
    <Flex
      display={{
        base: 'none',
        sm: props.className?.includes('codetour') ? 'none' : 'flex',
        huge: 'flex',
      }}
      as="aside"
      w="container.sidebar"
      minW="container.sidebar"
      h="100vh"
      minH="fit-content"
      py={8}
      px={6}
      pos="fixed"
      top={0}
      left={0}
      flexDir="column"
      borderRight="1px"
      borderColor="gray.100"
      overflow="hidden"
      {...props}
    >
      <ChakraLink as={Link} href={HOME_PATH}>
        <Box as={LogoDark} w={175} h={50} />
      </ChakraLink>

      <BlogSearchInput mt={14} />

      <BlogLayoutSidebarNavigation
        posts={onlyPublishedPosts(groupedBlogPostsByCategory)}
        overflowY="scroll"
        overflowX="hidden"
        mt={10}
        mb={30}
      />

      <BlogLayoutSocials position="absolute" bottom={0} mt="auto" mb={12} />
    </Flex>
  );
};
export default BlogLayoutSidebar;
