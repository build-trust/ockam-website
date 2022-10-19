import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export type IMdxContent = {
  source: MDXRemoteSerializeResult;
  frontMatter: { [key: string]: string | number };
};
