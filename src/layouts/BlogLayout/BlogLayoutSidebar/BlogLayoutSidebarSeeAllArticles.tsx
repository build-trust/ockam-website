import { FunctionComponent, useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AccordionItem, Link as ChakraLink, LinkProps } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

import { SearchValueContext } from '@contextProviders/SearchValueProvider';
import { BLOG_PATH } from '@consts/paths';

const BlogLayoutSidebarSeeAllArticles: FunctionComponent<LinkProps> = ({ ...props }) => {
  const { handleRemoveSearchQuery, searchValue } = useContext(SearchValueContext);
  const { pathname } = useRouter();

  return (
    <AccordionItem w="full" py={3} borderTop="none" onClick={handleRemoveSearchQuery}>
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
            color={pathname === '/blog' && !searchValue ? 'avocado.500' : 'brand.900'}
            display={{ base: 'none', lg: 'block' }}
          />
          All articles
        </ChakraLink>
      </Link>
    </AccordionItem>
  );
};

export default BlogLayoutSidebarSeeAllArticles;
