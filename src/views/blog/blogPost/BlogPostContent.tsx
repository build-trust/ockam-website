import { FunctionComponent, ReactNode } from 'react';
import { Flex } from '@chakra-ui/react';

type BlogPostContentProps = {
  children: ReactNode;
};

const BlogPostContent: FunctionComponent<BlogPostContentProps> = ({ children }) => (
  <Flex
    direction="column"
    maxW="3xl"
    mx="auto"
    mt={{ base: 10, '1.5xl': 16 }}
    fontFamily="blogPost"
    color="brand.900"
  >
    {children}
  </Flex>
);

export default BlogPostContent;
