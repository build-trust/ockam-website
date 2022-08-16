import { FunctionComponent, ReactNode } from 'react';
import { Box, Flex } from '@chakra-ui/react';

import BlogPostsProvider from '@contextProviders/BlogPostsProvider';

import LayoutFooter from '../components/LayoutFooter';

import BlogLayoutSidebar from './BlogLayoutSidebar/BlogLayoutSidebar';
import BlogLayoutMobileNav from './BlogLayoutMobileNav/BlogLayoutMobileNav';

type BlogLayoutProps = { children: ReactNode };

const BlogLayout: FunctionComponent<BlogLayoutProps> = ({ children }) => (
  <BlogPostsProvider>
    <BlogLayoutMobileNav />

    <Flex w="full">
      <BlogLayoutSidebar />

      <Flex
        flex={1}
        direction="column"
        align="stretch"
        minH="full"
        w="full"
        maxW="container.max"
        overflowX="hidden"
        mx="auto"
      >
        <Flex flex={1} direction="column" px={{ base: 5, md: 4, '1.5xl': 12 }}>
          <Box as="main" w="full" h="full">
            {children}
          </Box>
        </Flex>

        <LayoutFooter mt={24} px={10} />
      </Flex>
    </Flex>
  </BlogPostsProvider>
);

export default BlogLayout;
