export type BlogPostData = {
  title: string;
  date: string;
  description: string;
  metaTitle: string;
  author: string;
  authorAvatar: string;
  category: string;
  featuredOrder?: number;
  isFeatured?: boolean;
  image: string;
  authorPosition: string;
};

export type BlogPost = {
  content: string;
  data: BlogPostData;
  filePath: string;
};

export type GroupedBlogPosts = {
  [key: string]: BlogPost[];
};
