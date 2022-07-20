import { FunctionComponent } from 'react';
import Link from 'next/link';
import { Box, Container, Link as ChakraLink, ContainerProps } from '@chakra-ui/react';

import { HOME_PATH } from '@consts/paths';
import LogoDark from '@assets/logo-dark.svg';
import { useBlogPostsContext } from '@contextProviders/BlogPostsProvider';

import BlogLayoutSocials from '../BlogLayoutSocials';
import BlogSearchInput from '../BlogSearchInput';

import BlogLayoutSidebarNavigation from './BlogLayoutSidebarNavigation';

const BlogLayoutSidebar: FunctionComponent<ContainerProps> = (props) => {
  const { groupedBlogPostsByCategory } = useBlogPostsContext();

  return (
    <Container
      as="aside"
      w={305}
      h="fit-content"
      py={8}
      pl={6}
      pr={3}
      borderRight="1px"
      borderColor="gray.100"
      {...props}
    >
      <Link href={HOME_PATH} passHref>
        <ChakraLink>
          <Box as={LogoDark} w={175} h={50} display="inline" />
        </ChakraLink>
      </Link>
      <BlogSearchInput w="2xs" mt={14} />

      <BlogLayoutSidebarNavigation mt={10} posts={groupedBlogPostsByCategory} />
      <BlogLayoutSocials mt={188} />
    </Container>
  );
};
export default BlogLayoutSidebar;
