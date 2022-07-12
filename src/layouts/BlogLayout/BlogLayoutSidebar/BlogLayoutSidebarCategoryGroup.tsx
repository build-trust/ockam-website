import { FunctionComponent, ReactNode } from 'react';
import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  UnorderedList,
  Flex,
  AccordionItemProps,
  AccordionIcon,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

import { BlogPost } from '@typings/BlogPost';

import BlogLayoutSidebarPostLink from './BlogLayoutSidebarPostLink';

type BlogLayoutSidebarCategoryGroupProps = {
  categoryName: string;
  posts: BlogPost[];
} & AccordionItemProps;

const BlogLayoutSidebarCategoryGroup: FunctionComponent<BlogLayoutSidebarCategoryGroupProps> = ({
  categoryName,
  posts,
  ...restProps
}) => (
  <AccordionItem width="100%" mr={16} flexShrink="0" border={{ lg: 'none' }} {...restProps}>
    {({ isExpanded }): ReactNode => (
      <>
        <AccordionButton
          pl={0}
          py={3}
          _hover={{
            textDecoration: 'underline',
          }}
        >
          <Flex w="full" alignItems="center" fontSize="md" fontWeight="regular" color="brand.900">
            <ArrowForwardIcon
              w={5}
              h={6}
              mr={3}
              color={isExpanded ? 'avocado.500' : 'brand.900'}
              transition="stroke 400ms ease-in-out"
              display={{ base: 'none', lg: 'block' }}
            />
            {categoryName}
            <AccordionIcon w={6} h={6} ml="auto" display={{ base: 'block', lg: 'none' }} />
          </Flex>
        </AccordionButton>
        <AccordionPanel pl={{ base: 1, lg: 8 }} py={1}>
          <UnorderedList listStyleType="none" ml={0}>
            {posts.map((post: BlogPost) => (
              <BlogLayoutSidebarPostLink post={post} key={post.data.title} />
            ))}
          </UnorderedList>
        </AccordionPanel>
      </>
    )}
  </AccordionItem>
);

export default BlogLayoutSidebarCategoryGroup;
