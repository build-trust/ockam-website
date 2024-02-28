import { ReactElement, ReactNode } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  TextProps,
  ListItem,
  ListItemProps,
  Link,
} from '@chakra-ui/react';
import path from 'path';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

import { generateSlugFromPath, getPageBySlug, pageFilePaths } from '@api/mdxApi';
import mdxComponents from '@components/mdx';
import { NextPageWithLayout } from '@typings/NextPageWithLayout';
import RazorLayout from '@layouts/RazorLayout';
import { DISCORD } from '@root/consts/externalResources';
import AuthorSignature from '@root/components/AuthorSignature';

export const RAZOR_PAGE_PATH = path.join(process.cwd(), 'src/content/the-razor');

if (mdxComponents) {
  mdxComponents.p = (props: TextProps): JSX.Element => <Text mb={8} color="inherit" {...props} />;
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
  const paths = pageFilePaths(RAZOR_PAGE_PATH)
    .map((p) => generateSlugFromPath(p))
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

type PageProps = {
  slug: string;
  source: MDXRemoteSerializeResult;
  frontMatter: { [key: string]: string | number | boolean };
};

export const getStaticProps = async ({ params }: ParamsType): Promise<{ props: PageProps }> => {
  const { source, frontMatter } = await getPageBySlug(RAZOR_PAGE_PATH, params.slug);
  const { slug } = params;
  return {
    props: {
      slug,
      source,
      frontMatter,
    },
  };
};

const LandingPage: NextPageWithLayout<PageProps> = ({ source, frontMatter }) => {
  const author = frontMatter?.author as string;
  const authorAvatar = frontMatter?.authorAvatar as string;

  return (
    <Box pt={{ base: 10, lg: 10 }} background="#ECFDF9">
      <Flex
        w="full"
        pt={{ base: 12, md: 24 }}
        pb={{ base: 12, md: 12 }}
        justify={{ base: 'center', lg: 'center' }}
        align="left"
        gap={{ base: 0, lg: 0 }}
        maxW={{ base: '2xl', lg: '2xl' }}
        direction="column"
        mx="auto"
        fontFamily="blogPostBody"
        fontSize="lg"
        letterSpacing="-0.01em"
      >
        <MDXRemote {...source} components={mdxComponents} />
        <AuthorSignature mt={6} author={author} authorAvatar={authorAvatar} />
        <Box
          my={6}
          transition="all 400ms ease-in-out"
          boxShadow="xl"
          p={6}
          textAlign="center"
          background="white"
          borderRadius={6}
          letterSpacing="-0.03em"
          _hover={{ background: '#e3bfff' }}
        >
          <Heading size="md" mb={6}>
            Want to meet people that are interested in these topics?
          </Heading>
          <Text fontFamily="Inter" color="brand.900">
            👾&nbsp;
            <Link
              href={DISCORD.href}
              style={{ textDecoration: 'underline', fontWeight: '800' }}
              _hover={{ color: '#891bdf' }}
            >
              Join the Build Trust community
            </Link>
            &nbsp;on Discord&nbsp;👾
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

LandingPage.getLayout = (page: ReactElement): ReactNode => (
  <RazorLayout
    isEpisode
    title={page.props.frontMatter.title}
    subtext={page.props.frontMatter.description}
  >
    {page}
  </RazorLayout>
);

export default LandingPage;
