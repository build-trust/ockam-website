import { FunctionComponent, ReactNode } from 'react';
import { Box, Container } from '@chakra-ui/react';

import { BlogPost, GroupedBlogPosts } from '@typings/BlogPost';
import SearchValueProvider from '@contextProviders/SearchValueProvider';
import MobileNavbarProvider from '@contextProviders/MobileNavbarProvider';

import LayoutFooter from '../components/LayoutFooter';

import BlogLayoutSidebar from './BlogLayoutSidebar/BlogLayoutSidebar';
import BlogLayoutMobileNav from './BlogLayoutMobileNav/BlogLayoutMobileNav';

type BlogLayoutProps = { children: ReactNode; posts: BlogPost[]; groupedPosts: GroupedBlogPosts };

const BlogLayout: FunctionComponent<BlogLayoutProps> = ({ children, posts, groupedPosts }) => (
  <MobileNavbarProvider>
    <SearchValueProvider posts={posts}>
      <BlogLayoutMobileNav posts={groupedPosts} />
      <Container px={0} alignItems="top" variant="section" flexDirection="row">
        <BlogLayoutSidebar display={{ base: 'none', lg: 'block' }} posts={groupedPosts} />
        <Box as="main" w="full">
          {children}
        </Box>
      </Container>
      <LayoutFooter mt={24} />
    </SearchValueProvider>
  </MobileNavbarProvider>
);

export default BlogLayout;
