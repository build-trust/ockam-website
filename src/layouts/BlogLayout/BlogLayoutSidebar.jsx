import React from 'react';
import Link from 'next/link'
import { Box, UnorderedList, ListItem, Link as ChakraLink } from "@chakra-ui/react";

const BlogLayoutSidebar = ({ posts, ...restProps }) => {
  return (
    <Box width="250px" mr={16} flexShrink="0" {...restProps}>
      <UnorderedList>
        {posts.map(post => (
          <ListItem mb={4}>
            <ChakraLink _hover={{ color: 'avocado.500'}}>
              <Link
                as={`/learn/blog/${post.filePath.replace(/\.mdx?$/, '')}`}
                href={`/learn/blog/[slug]`}
              >
                {post.data.title}
              </Link>
            </ChakraLink>
          </ListItem>
        ))}
      </UnorderedList>

    </Box>
  );
};

BlogLayoutSidebar.propTypes = {

};

export default BlogLayoutSidebar;
