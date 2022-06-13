import React from 'react';
import MainLayout from '@layouts/MainLayout';
import { Box, Container } from '@chakra-ui/react';
import BlogLayoutSidebar from './BlogLayoutSidebar';

const BlogLayout = ({ children, posts }) => {
  return (
    <MainLayout>
      <Box bgColor="gray.50" pt={14} pb={10}>
        <Container alignItems="top" variant="section" display="flex" flexDirection="row">
          <BlogLayoutSidebar display={{ base: 'none', lg: 'block' }} posts={posts} />
          <Box>
            {children}
          </Box>
        </Container>
      </Box>
    </MainLayout>
  );
};


export default BlogLayout;
