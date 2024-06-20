import { ReactElement, ReactNode } from 'react';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import {
  Box,
  ListItem,
  ListItemProps,
  Text,
  TextProps,
  OrderedList,
  ListProps,
} from '@chakra-ui/react';
import path from 'path';
import styled from 'styled-components';

import { generateSlugFromPath, getPageBySlug, pageFilePaths } from '@api/mdxApi';
import { NextPageWithLayout } from '@typings/NextPageWithLayout';
import SEOHead from '@components/SEOHead';
import MainLayout from '@layouts/MainLayout';
import mdxComponents from '@components/mdx';

export const POLICIES_PAGE_PATH = path.join(process.cwd(), 'src/content/policies');

const OL = styled(OrderedList)`
  counter-reset: item;

  & > li {
    counter-increment: item;
  }

  & ol > li::marker {
    content: counters(item, '.') '. ';
    // margin-left: -20px;
  }

  & ol ol {
    // counter-reset: letter;
    // counter-increment: letter;
  }

  & ol ol > li {
    // counter-increment: letter;
  }
  & ol ol > li::marker {
    content: '(' counter(item, lower-alpha) ') ';
  }
`;

if (mdxComponents) {
  mdxComponents.p = (props: TextProps): JSX.Element => <Text mb={8} color="inherit" {...props} />;
  mdxComponents.ol = (props: ListProps): JSX.Element => <OL {...props} />;
  mdxComponents.li = (props: ListItemProps): JSX.Element => (
    <ListItem {...props} mb={2} lineHeight="1.5em" />
  );
  delete mdxComponents.strong;
}

type ParamsType = {
  params: { slug: string };
};

export const getStaticPaths = async (): Promise<{
  paths: ParamsType[];
  fallback: boolean;
}> => {
  const paths = pageFilePaths(POLICIES_PAGE_PATH)
    .map((p) => generateSlugFromPath(p))
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: ParamsType): Promise<{ props: PageProps }> => {
  const { source, frontMatter } = await getPageBySlug(POLICIES_PAGE_PATH, params.slug);
  const { slug } = params;
  return {
    props: {
      slug,
      source,
      frontMatter,
    },
  };
};

type PageProps = {
  slug: string;
  source: MDXRemoteSerializeResult;
  frontMatter: { [key: string]: string | number | boolean };
};
const TermsPage: NextPageWithLayout<PageProps> = ({ source, frontMatter }) => {
  const title = (frontMatter?.metaTitle as string) || (frontMatter?.title as string) || '';

  return (
    <Box pt={{ base: 10, lg: 30 }} px={10}>
      <SEOHead subTitle={title} />

      <MDXRemote {...source} components={mdxComponents} />
    </Box>
  );
};

TermsPage.getLayout = (page: ReactElement): ReactNode => <MainLayout>{page}</MainLayout>;

export default TermsPage;
