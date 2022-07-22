import { FunctionComponent, ReactNode } from 'react';
import { Box, Container, Flex } from '@chakra-ui/react';

import BlogPostsProvider from '@contextProviders/BlogPostsProvider';

import LayoutFooter from '../components/LayoutFooter';

import BlogLayoutSidebar from './BlogLayoutSidebar/BlogLayoutSidebar';
import BlogLayoutMobileNav from './BlogLayoutMobileNav/BlogLayoutMobileNav';

type BlogLayoutProps = { children: ReactNode };

const BlogLayout: FunctionComponent<BlogLayoutProps> = ({ children }) => (
  <BlogPostsProvider>
    <BlogLayoutMobileNav />

    <Flex>
      <BlogLayoutSidebar display={{ base: 'none', lg: 'block' }} />

      <Container alignItems="top" variant="section" px={0}>
        <Box as="main" w="full">
          {children}
        </Box>

        <LayoutFooter mt={24} px={12} />
      </Container>
    </Flex>
  </BlogPostsProvider>
);

export default BlogLayout;
