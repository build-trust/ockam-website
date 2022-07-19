import { FunctionComponent } from 'react';
import Link from 'next/link';
import { Box, Container, Link as ChakraLink, ContainerProps } from '@chakra-ui/react';

import { GroupedBlogPosts } from '@typings/BlogPost';
import { HOME_PATH } from '@consts/paths';
import LogoDark from '@assets/logo-dark.svg';

import BlogLayoutSocials from '../BlogLayoutSocials';
import BlogSearchInput from '../BlogSearchInput';

import BlogLayoutSidebarNavigation from './BlogLayoutSidebarNavigation';

type BlogLayoutSidebarProps = {
  posts: GroupedBlogPosts;
} & ContainerProps;

const BlogLayoutSidebar: FunctionComponent<BlogLayoutSidebarProps> = ({ posts, ...restProps }) => (
  <Container
    as="aside"
    w={305}
    h="100vh"
    minH="fit-content"
    py={8}
    pl={6}
    pr={3}
    pos="sticky"
    top={0}
    display="flex"
    flexDir="column"
    borderRight="1px"
    borderColor="gray.100"
    {...restProps}
  >
    <Link href={HOME_PATH} passHref>
      <ChakraLink>
        <Box as={LogoDark} w={175} h={50} display="inline" />
      </ChakraLink>
    </Link>
    <BlogSearchInput w="2xs" mt={14} />

    <BlogLayoutSidebarNavigation mt={10} mb={12} posts={posts} />
    <BlogLayoutSocials mt="auto" mb={12} />
  </Container>
);
export default BlogLayoutSidebar;
