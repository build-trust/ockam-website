import { FunctionComponent } from 'react';
import Link from 'next/link';
import { Box, Flex, Link as ChakraLink } from '@chakra-ui/react';

import { HOME_PATH } from '@consts/paths';
import LogoDark from '@assets/logo-dark.svg';
import { useBlogPostsContext } from '@contextProviders/BlogPostsProvider';

import BlogLayoutSocials from '../BlogLayoutSocials';
import BlogSearchInput from '../BlogSearchInput';

import BlogLayoutSidebarNavigation from './BlogLayoutSidebarNavigation';

const BlogLayoutSidebar: FunctionComponent = () => {
  const { groupedBlogPostsByCategory } = useBlogPostsContext();

  return (
    <Flex
      display={{ base: 'none', lg: 'flex' }}
      as="aside"
      w="container.sidebar"
      minW="container.sidebar"
      h="100vh"
      minH="fit-content"
      py={8}
      px={6}
      pos="sticky"
      top={0}
      flexDir="column"
      borderRight="1px"
      borderColor="gray.100"
      overflow="hidden"
    >
      <Link href={HOME_PATH} passHref>
        <ChakraLink>
          <Box as={LogoDark} w={175} h={50} />
        </ChakraLink>
      </Link>

      <BlogSearchInput mt={14} />

      <BlogLayoutSidebarNavigation
        posts={groupedBlogPostsByCategory}
        overflowY="scroll"
        overflowX="hidden"
        mt={10}
        mb={30}
      />

      <BlogLayoutSocials position="absolute" bottom={0} mt="auto" mb={12} />
    </Flex>
  );
};
export default BlogLayoutSidebar;
