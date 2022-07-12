import { FunctionComponent } from 'react';
import Link from 'next/link';
import { ListItem, Link as ChakraLink, ListItemProps } from '@chakra-ui/react';

import { BlogPost } from '@typings/BlogPost';
import { BLOG_PATH } from '@consts/paths';

type BlogLayoutSidebarPostLinkProps = {
  post: BlogPost;
} & ListItemProps;

const BlogLayoutSidebarPostLink: FunctionComponent<BlogLayoutSidebarPostLinkProps> = ({
  post,
  ...restProps
}) => (
  <ListItem
    _notLast={{ lg: { mb: 4 } }}
    bgColor={{ base: 'gray.50', lg: 'inherit' }}
    {...restProps}
  >
    <Link
      as={`${BLOG_PATH}/${post.filePath.replace(/\.mdx?$/, '')}`}
      href={`${BLOG_PATH}/[slug]`}
      passHref
    >
      <ChakraLink
        w={{ base: '100%', lg: 'fit-content' }}
        display="block"
        p={{ base: 3, lg: 0 }}
        _hover={{
          base: { bgColor: 'blackAlpha.50' },
          lg: { bgColor: 'white', color: 'avocado.500', textDecoration: 'underline' },
        }}
        fontSize={{ base: 'md', lg: 'sm' }}
      >
        {post.data.title}
      </ChakraLink>
    </Link>
  </ListItem>
);

export default BlogLayoutSidebarPostLink;
