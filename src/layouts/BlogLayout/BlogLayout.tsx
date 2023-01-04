import { FunctionComponent, ReactNode } from 'react';
import { Box, Flex, useTheme } from '@chakra-ui/react';

import BlogPostsProvider from '@contextProviders/BlogPostsProvider';
import { BlogPost } from '@root/typings/BlogPost';

import LayoutFooter from '../components/LayoutFooter';

import BlogLayoutSidebar from './BlogLayoutSidebar/BlogLayoutSidebar';
import BlogLayoutMobileNav from './BlogLayoutMobileNav/BlogLayoutMobileNav';


type BlogLayoutProps = { children: ReactNode, blogPosts: BlogPost[] };

const BlogLayout: FunctionComponent<BlogLayoutProps> = ({ children, blogPosts }) => {
  const theme = useTheme();

  return (
    <BlogPostsProvider blogPosts={blogPosts} >
      <BlogLayoutMobileNav />
      <BlogLayoutSidebar display={{ base: 'none', lg: 'flex' }} />

      <Flex w="full" direction="column" pl={{ base: 'none', lg: theme.sizes.container.sidebar }}>
        <Box w="full" maxW="container.blogBodyMax" mx="auto">
          <Box as="main" w="full" h="full" mx="auto" px={{ base: 5, md: 4, '1.5xl': 12 }}>
            {children}
          </Box>

          <LayoutFooter mt={24} px={10} />
        </Box>
      </Flex>
    </BlogPostsProvider>
  );
};

export default BlogLayout;
