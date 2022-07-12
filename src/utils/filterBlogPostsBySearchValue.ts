import { BlogPost } from '@typings/BlogPost';

const filterBlogPostsBySearchValue = (
  posts: BlogPost[],
  searchValue: string | undefined
): BlogPost[] =>
  posts!.filter((post) =>
    [post.data.title, post.data.date, post.data.author, post.data.category]
      .join('')
      .toLowerCase()
      .includes((searchValue || '').toLowerCase())
  );

export default filterBlogPostsBySearchValue;
