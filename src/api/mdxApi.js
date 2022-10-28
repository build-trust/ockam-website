import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import orderBy from 'lodash/orderBy';
import RemarkGFM from 'remark-gfm';
import RehypeSlug from 'rehype-slug';

export const getTableOfContentFromMdxString = (contentMdxString) => {
  const regexp = new RegExp(/^(## |### |#### )(.*)\n/, 'gm');
  const headings = [...contentMdxString.matchAll(regexp)];

  return headings?.map((h) => {
    const title = h[2].trim();
    const level = h[1].trim().length;
    const id = title
      .toLowerCase()
      .replaceAll(' ', '-')
      .replaceAll(/[^\w-]+/g, '');

    return {
      title,
      id,
      level,
    };
  });
};

export const POSTS_PATH = path.join(process.cwd(), 'src/content/blog');
export const STYLE_GUIDE_PATH = path.join(process.cwd(), 'src/content/style-guide');

// postFilePaths is the list of all mdx files inside the POSTS_PATH directory

export const postFilePaths = fs.readdirSync(POSTS_PATH).filter((path) => /\.mdx?$/.test(path));

export const styleGuideFilePaths = fs
  .readdirSync(STYLE_GUIDE_PATH)
  .filter((path) => /\.mdx?$/.test(path));

export const getAllPosts = () => {
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });
  return orderBy(posts, ['data.date'], ['desc']);
};

export const getPostBySlug = async (slug) => {
  const postFilePath = path.join(POSTS_PATH, `${slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);
  const tableOfContent = getTableOfContentFromMdxString(content);

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [RemarkGFM],
      rehypePlugins: [RehypeSlug],
    },
    scope: data,
  });

  return {
    tableOfContent,
    source: mdxSource,
    frontMatter: data,
  };
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
