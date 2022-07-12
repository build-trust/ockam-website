import { FunctionComponent } from 'react';
import { Accordion, AccordionProps } from '@chakra-ui/react';

import { GroupedBlogPosts } from '@typings/BlogPost';

import BlogLayoutSidebarCategoryGroup from './BlogLayoutSidebarCategoryGroup';
import BlogLayoutSidebarSeeAllArticles from './BlogLayoutSidebarSeeAllArticles';

type BlogLayoutSidebarNavigationProps = {
  posts: GroupedBlogPosts;
} & AccordionProps;

const BlogLayoutSidebarNavigation: FunctionComponent<BlogLayoutSidebarNavigationProps> = ({
  posts,
  ...restProps
}) => (
  <Accordion as="nav" w={{ base: 'full', lg: '2xs' }} allowToggle {...restProps}>
    <BlogLayoutSidebarSeeAllArticles />
    {Object.entries(posts).map(([category, categoryPosts]) => (
      <BlogLayoutSidebarCategoryGroup
        categoryName={category}
        posts={categoryPosts}
        key={category}
      />
    ))}
  </Accordion>
);

export default BlogLayoutSidebarNavigation;
