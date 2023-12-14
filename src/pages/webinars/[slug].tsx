import { ReactElement, ReactNode } from 'react';
import { Box, Button, Flex, SimpleGrid } from '@chakra-ui/react';
import path from 'path';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import Link from 'next/link';

import { generateSlugFromPath, getPageBySlug, pageFilePaths } from '@api/mdxApi';
import mdxComponents from '@components/mdx';
import { NextPageWithLayout } from '@typings/NextPageWithLayout';
import LandingLayout from '@layouts/LandingLayout';
import { Hero } from '@views/homepage';
import SEOHead from '@root/components/SEOHead';
import { Feature } from '@root/views/homepage/Features';
import Paragraph from '@root/components/mdx/Paragraph';

export const WEBINAR_PAGE_PATH = path.join(process.cwd(), 'src/content/webinars');

type ParamsType = {
  params: { slug: string };
};

export const getStaticPaths = async (): Promise<{
  paths: ParamsType[];
  fallback: boolean;
}> => {
  const paths = pageFilePaths(WEBINAR_PAGE_PATH)
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
  const { source, frontMatter } = await getPageBySlug(WEBINAR_PAGE_PATH, params.slug);
  const { slug } = params;
  return {
    props: {
      slug,
      source,
      frontMatter,
    },
  };
};

type FrontmatterFeature = {
  icon: string;
  title: string;
  text: string;
};
const LandingPage: NextPageWithLayout<PageProps> = ({ source, frontMatter }) => {
  const title = (frontMatter?.metaTitle as string) || (frontMatter?.title as string) || '';
  const text = frontMatter?.hero_text as string;
  const image = frontMatter?.hero_image as string;
  const registrationUrl = frontMatter?.registration_url as string;
  const animate = frontMatter?.hero_animated as boolean;
  const subtext = frontMatter?.subtext as string;
  const features: FrontmatterFeature[] =
    (frontMatter?.features as unknown as FrontmatterFeature[]) || [];
  const listFeatures = (
    typeof frontMatter?.list_features === 'undefined' ? true : frontMatter?.list_features
  ) as boolean;

  const displayFeatures = (): JSX.Element => {
    if (!listFeatures) return <></>;
    if (Array.isArray(features) && features.length < 1) return <></>;
    return (
      <SimpleGrid
        id="features"
        columns={{ base: 1, md: 1, lg: 1 }}
        spacingX={{ base: 8, md: 20, lg: 24 }}
        spacingY={{ base: 8, md: 12, lg: 12 }}
        mb={12}
      >
        {features.map((feature) => (
          <Feature
            key={feature.title}
            icon={feature.icon}
            title={feature.title}
            text={feature.text}
          />
        ))}
      </SimpleGrid>
    );
  };

  const feats = features.map((feature) => feature.title).join('||');
  const ogImage = `/api/og?title=${encodeURIComponent(
    text.replaceAll('_', ''),
  )}&template=landing&features=${encodeURIComponent(feats)}`;

  return (
    <Box pt={0}>
      <SEOHead title={title} ogImageSrc={ogImage} />
      <Hero text={text} subtext={subtext} image={image} landingPage animate={animate || false} />

      <Flex
        w="full"
        pt={{ base: 12, md: 24 }}
        pb={{ base: 24, md: 32 }}
        justify={{ base: 'center', lg: 'center' }}
        align="center"
        gap={{ base: 0, lg: 0 }}
        maxW={{ base: '3xl', lg: '3xl' }}
        direction="column"
        mx="auto"
        id="why"
      >
        {displayFeatures()}
        <MDXRemote {...source} components={mdxComponents} />

        <Box my="16" textAlign="center">
          <Link href={registrationUrl} passHref legacyBehavior>
            <Button
              mx="auto"
              colorScheme="avocado"
              color="rgb(40, 40, 40)"
              border="1px solid white"
              flexDirection="column"
              _hover={{
                backgroundColor: 'rgb(10, 10, 10)',
                color: 'white',
              }}
              py={6}
              px={30}
              size="lg"
            >
              Register now!
            </Button>
          </Link>
          <Paragraph style={{ fontStyle: 'italic' }} my={2}>
            Can&apos;t make it? All registered attendees will be emailed a link to the recording
            after the event.
          </Paragraph>
        </Box>
      </Flex>
    </Box>
  );
};

LandingPage.getLayout = (page: ReactElement): ReactNode => (
  <LandingLayout hideNav>{page}</LandingLayout>
);

export default LandingPage;
