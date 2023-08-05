import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import orderBy from 'lodash/orderBy';
import RemarkGFM from 'remark-gfm';
import RehypeSlug from 'rehype-slug';
import RemarkPrism from 'remark-prism';
import RehypeKeywordLinks from '@root/utils/keywordLinks';

export const POSTS_PATH = path.join(process.cwd(), 'src/content/blog');
export const STYLE_GUIDE_PATH = path.join(process.cwd(), 'src/content/style-guide');

export const styleGuideFilePaths = fs
  .readdirSync(STYLE_GUIDE_PATH)
  .filter((path) => /\.mdx?$/.test(path));

export const generateSlugFromPath = (path) => path.replace(/\.mdx?$/, '');
export const generatePathFromSlug = (slug) => `${slug}.mdx`;

export const pageFilePaths = (folder) => {
  return fs.readdirSync(folder).filter((path) => /\.mdx?$/.test(path));
};
// postFilePaths is the list of all mdx files inside the POSTS_PATH directory
export const postFilePaths = pageFilePaths(POSTS_PATH);

export const getAllPagesForFolder = (folder, noContent) => {
  const filePaths = fs.readdirSync(folder).filter((path) => /\.mdx?$/.test(path));
  const pages = filePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(folder, filePath));
    const { content, data } = matter(source);
    if (noContent) return { data, filePath };
    return {
      content,
      data,
      filePath,
    };
  });
  return orderBy(pages, ['data.date'], ['desc']);
};

export const getAllPosts = (noContent) => {
  return getAllPagesForFolder(POSTS_PATH, noContent);
};

export const getPageBySlug = async (folder, slug) => {
  const postFilePath = path.join(folder, generatePathFromSlug(slug));
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [RemarkGFM, RemarkPrism],
      rehypePlugins: [RehypeSlug],
      remarkRehypeOptions: { fragment: true },
    },
    scope: data,
  });

  return {
    source: mdxSource,
    frontMatter: data,
  };
};
export const getPostBySlug = async (slug) => {
  return getPageBySlug(POSTS_PATH, slug);
};

export const getStyleGuideSections = async () => {
  const styleGuideSections = await Promise.all(
    styleGuideFilePaths.map(async (filePath) => {
      const source = fs.readFileSync(path.join(STYLE_GUIDE_PATH, filePath));
      const { content, data } = matter(source);

      const mdxSource = await serialize(content, {
        // Optionally pass remark/rehype plugins
        mdxOptions: {
          remarkPlugins: [RemarkGFM],
          rehypePlugins: [RehypeSlug],
          remarkRehypeOptions: { fragment: true },
        },
        scope: data,
      });
      return {
        source: mdxSource,
        frontMatter: data,
      };
    })
  );

  return styleGuideSections;
};
