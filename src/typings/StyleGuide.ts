import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export type IMdxContent = {
  source: MDXRemoteSerializeResult;
  frontMatter: { [key: string]: string | number };
};

export type LogoContent = {
  isDark: boolean,
  logo: string,
  heading: string,
  description: string
}
