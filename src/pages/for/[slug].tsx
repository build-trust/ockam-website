import { ReactElement, ReactNode } from 'react';
import { Box, Flex, Heading } from '@chakra-ui/react';
import path from 'path';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

import { generateSlugFromPath, getPageBySlug, pageFilePaths } from '@api/mdxApi';
import mdxComponents from '@components/mdx';
import { NextPageWithLayout } from '@typings/NextPageWithLayout';
import LandingLayout from '@layouts/LandingLayout';
import { Hero } from '@views/homepage';
import SEOHead from '@root/components/SEOHead';
import { ContactForm } from '@views/contact-form';

export const LANDING_PAGE_PATH = path.join(process.cwd(), 'src/content/landing-pages');

type ParamsType = {
  params: { slug: string };
};

export const getStaticPaths = async (): Promise<{
  paths: ParamsType[];
  fallback: boolean;
}> => {
  const paths = pageFilePaths(LANDING_PAGE_PATH)
    .map((p) => generateSlugFromPath(p))
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async ({ params }: ParamsType): Promise<{ props: PageProps }> => {
  const { source, frontMatter } = await getPageBySlug(LANDING_PAGE_PATH, params.slug);

  return {
    props: {
      source,
      frontMatter,
    },
  };
};

type PageProps = {
  source: MDXRemoteSerializeResult;
  frontMatter: { [key: string]: string | number | boolean };
};
const LandingPage: NextPageWithLayout<PageProps> = ({ source, frontMatter }) => {
  const title = (frontMatter?.metaTitle as string) || (frontMatter?.title as string) || '';
  const text = frontMatter?.hero_text as string;
  const subtext = frontMatter?.subtext as string;

  return (
    <Box pt={{ base: 10, lg: 10 }}>
      <SEOHead title={title} />
      <Hero text={text} subtext={subtext} />

      {/* <Features />
      <Cases />
      <GetStarted /> */}

      <Flex
        w="full"
        pt={{ base: 12, md: 24 }}
        pb={{ base: 24, md: 32 }}
        justify={{ base: 'center', lg: 'center' }}
        align="center"
        gap={{ base: 0, lg: 10 }}
        maxW={{ base: '3xl', lg: '3xl' }}
        direction="column"
        mx="auto"
      >
        <MDXRemote {...source} components={mdxComponents} />
        <Heading id="contact">Speak to our sales team today!</Heading>
        <ContactForm />
      </Flex>
    </Box>
  );
};

LandingPage.getLayout = (page: ReactElement): ReactNode => <LandingLayout>{page}</LandingLayout>;

export default LandingPage;
