import { FunctionComponent } from 'react';

import LayoutMobileHeader from '@layouts/components/LayoutMobileHeader';
import { useBlogPostsContext } from '@contextProviders/BlogPostsProvider';

import BlogLayoutSidebarNavigation from '../BlogLayoutSidebar/BlogLayoutSidebarNavigation';
import BlogLayoutSocials from '../BlogLayoutSocials';
import BlogSearchInput from '../BlogSearchInput';

type Props = {
  isCodetour: boolean;
};

const BlogLayoutMobileNav: FunctionComponent<Props> = ({ isCodetour }) => {
  const navProps = isCodetour ? { display: { base: 'block', huge: 'none' } } : {};
  const { groupedBlogPostsByCategory } = useBlogPostsContext();

  return (
    <LayoutMobileHeader {...navProps}>
      <BlogLayoutSidebarNavigation posts={groupedBlogPostsByCategory} />
      <BlogSearchInput w="xs" my={10} />
      <BlogLayoutSocials display="flex" flexDirection="column" alignItems="center" mt="auto" />
    </LayoutMobileHeader>
  );
};

export default BlogLayoutMobileNav;
