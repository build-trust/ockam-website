import { groupBy } from 'lodash';

import { BlogPost, GroupedBlogPosts } from '@typings/BlogPost';

const groupPostsByCategory = (posts: BlogPost[]): GroupedBlogPosts =>
  groupBy(posts, (post: BlogPost): string =>
    post.data.category ? post.data.category : 'No category'
  );

export default groupPostsByCategory;
