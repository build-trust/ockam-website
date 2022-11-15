import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export type IMdxContent = {
  source: MDXRemoteSerializeResult;
  frontMatter: { [key: string]: string | number };
};

export type TLogoContent = {
  isDark: boolean;
  logo: string;
  heading: string;
  description: string;
};

export type TColorsContent = {
  heading: string;
  text: string;
  colors: TColorCard[];
};

export type TColorCard = {
  name: string;
  code: string[];
  type: string;
};

export type TeamPhotoSampleContent = {
  image: string;
  heading: string;
  text: string;
  bulletPoints: string[];
};

export type TGraphicsContent = {
  image: string;
  width: string;
  height: string;
  mobileHeight: string;
  heading: string;
  text: string;
};

export type TTypographyContent = {
  name: string;
  fileName: string;
  fonts: TFont[];
};

export type TFont = {
  heading: string;
  content: TFontContent[];
};

type TFontContent = {
  tag: string;
  name: string;
  font: string[];
  ratio: string[];
  size: string;
  weight: number;
};
