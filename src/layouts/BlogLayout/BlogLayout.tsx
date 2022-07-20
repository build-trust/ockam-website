import { FunctionComponent, ReactNode } from 'react';
import { Box, Container } from '@chakra-ui/react';

import BlogPostsProvider from '@contextProviders/BlogPostsProvider';

import LayoutFooter from '../components/LayoutFooter';

import BlogLayoutSidebar from './BlogLayoutSidebar/BlogLayoutSidebar';
import BlogLayoutMobileNav from './BlogLayoutMobileNav/BlogLayoutMobileNav';

type BlogLayoutProps = { children: ReactNode };

const BlogLayout: FunctionComponent<BlogLayoutProps> = ({ children }) => (
  <BlogPostsProvider>
    <BlogLayoutMobileNav />

    <Container px={0} alignItems="top" variant="section" flexDirection="row">
      <BlogLayoutSidebar display={{ base: 'none', lg: 'block' }} />

      <Box as="main" w="full">
        {children}
      </Box>
    </Container>

    <LayoutFooter mt={24} />
  </BlogPostsProvider>
);

export default BlogLayout;
