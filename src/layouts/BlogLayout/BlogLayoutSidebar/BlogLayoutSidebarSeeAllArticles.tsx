import { FunctionComponent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AccordionItem, Link as ChakraLink, LinkProps } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

import { useBlogPostsContext } from '@contextProviders/BlogPostsProvider';
import { BLOG_PATH } from '@consts/paths';

const BlogLayoutSidebarSeeAllArticles: FunctionComponent<
  LinkProps & { setActiveIndex: (index: number) => void }
> = ({ setActiveIndex, ...restProps }) => {
  const { handleRemoveSearchPostsQuery, searchPostsQuery } = useBlogPostsContext();
  const router = useRouter();

  const handleOnClick = (): void => {
    handleRemoveSearchPostsQuery();
    setActiveIndex(-1);
  };

  return (
    <AccordionItem w="full" py={3} borderTop="none" onClick={handleOnClick}>
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
          {...restProps}
        >
          <ArrowForwardIcon
            w={5}
            h={6}
            mr={3}
            color={router.pathname === BLOG_PATH && !searchPostsQuery ? 'avocado.500' : 'brand.900'}
            display={{ base: 'none', lg: 'block' }}
          />
          Featured articles
        </ChakraLink>
      </Link>
    </AccordionItem>
  );
};

export default BlogLayoutSidebarSeeAllArticles;
