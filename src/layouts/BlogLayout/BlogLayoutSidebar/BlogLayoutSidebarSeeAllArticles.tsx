import { FunctionComponent } from 'react';
import Link from 'next/link';
import { AccordionItem, Link as ChakraLink, LinkProps } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

import { useBlogPostsContext } from '@contextProviders/BlogPostsProvider';
import { BLOG_PATH } from '@consts/paths';

const BlogLayoutSidebarSeeAllArticles: FunctionComponent<LinkProps> = ({ ...props }) => {
  const { handleRemoveSearchPostsQuery } = useBlogPostsContext();

  return (
    <AccordionItem w="full" py={3} borderTop="none" onClick={handleRemoveSearchPostsQuery}>
      <Link href={BLOG_PATH} passHref>
        <ChakraLink
          display="flex"
          alignItems="center"
          fontSize="md"
          fontWeight="regular"
          color="brand.900"
          _active={{
            svg: {
              color: 'avocado.500',
            },
          }}
          {...props}
        >
          <ArrowForwardIcon
            w={5}
            h={6}
            mr={3}
            color="brand.900"
            display={{ base: 'none', lg: 'block' }}
          />
          All articles
        </ChakraLink>
      </Link>
    </AccordionItem>
  );
};

export default BlogLayoutSidebarSeeAllArticles;
