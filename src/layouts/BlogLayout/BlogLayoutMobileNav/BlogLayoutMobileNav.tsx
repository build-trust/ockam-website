import { FunctionComponent } from 'react';

import { GroupedBlogPosts } from '@typings/BlogPost';
import LayoutMobileHeader from '@layouts/components/LayoutMobileHeader';

import BlogLayoutSidebarNavigation from '../BlogLayoutSidebar/BlogLayoutSidebarNavigation';
import BlogLayoutSocials from '../BlogLayoutSocials';
import BlogSearchInput from '../BlogSearchInput';

type BlogLayoutMobileNavProps = {
  posts: GroupedBlogPosts;
};

const BlogLayoutMobileNav: FunctionComponent<BlogLayoutMobileNavProps> = ({ posts }) => (
  <LayoutMobileHeader>
    <BlogLayoutSidebarNavigation posts={posts} />
    <BlogSearchInput w="xs" my={10} />
    <BlogLayoutSocials display="flex" flexDirection="column" alignItems="center" mt="auto" />
  </LayoutMobileHeader>
);

export default BlogLayoutMobileNav;
