import { ReactElement, ReactNode } from 'react';
import { Box, Button, Flex, Heading, SimpleGrid } from '@chakra-ui/react';
import path from 'path';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import Link from 'next/link';
import styled from 'styled-components';

import { generateSlugFromPath, getPageBySlug, pageFilePaths } from '@api/mdxApi';
import mdxComponents from '@components/mdx';
import { NextPageWithLayout } from '@typings/NextPageWithLayout';
import LandingLayout from '@layouts/LandingLayout';
import { Hero } from '@views/homepage';
import SEOHead from '@root/components/SEOHead';
import { ContactForm } from '@views/contact-form';
import { Feature } from '@root/views/homepage/Features';
import { BUILD_DEMO } from '@root/consts/externalResources';
import Paragraph from '@root/components/mdx/Paragraph';
import Card from '@root/components/Card';
import allPageMessageProps, { AllPageMessage, mdxSerialize } from '@root/utils/appPageMessage';
import SideBySidePanel from '@root/components/mdx/SideBySidePanel';

export const LANDING_PAGE_PATH = path.join(process.cwd(), 'src/content/landing-pages');

const SubButton = styled.span`
  display: block;
  font-size: 66%;
  padding-top: 5px;
`;
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

type PageProps = {
  slug: string;
  source: MDXRemoteSerializeResult;
  frontMatter: { [key: string]: string | number | boolean };
  allPageMessage?: AllPageMessage | null;
};

type Frontmatter = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};

const fieldsToMdx = async (fields: string[], frontmatter: Frontmatter): Promise<Frontmatter> => {
  const mdxFrontmatter = frontmatter;
  await fields.forEach(async (field) => {
    const [name, attr] = field.split('.', 2);
    if (name.indexOf('[]') > 0) {
      const n = name.replace('[]', '');
      await frontmatter[n].forEach(async (obj: Frontmatter, idx: number) => {
        const val = obj[attr];
        mdxFrontmatter[n][idx][`mdx${attr}`] = await mdxSerialize(val);
      });
    }
  });
  return mdxFrontmatter;
};

export const getStaticProps = async ({ params }: ParamsType): Promise<{ props: PageProps }> => {
  const frontmatterMdxFields = ['steps[].text'];
  const { source, frontMatter } = await getPageBySlug(LANDING_PAGE_PATH, params.slug);
  const { slug } = params;
  return {
    props: {
      slug,
      source,
      frontMatter: await fieldsToMdx(frontmatterMdxFields, frontMatter),
      allPageMessage: await allPageMessageProps,
    },
  };
};

type FrontmatterFeature = {
  icon: string;
  title: string;
  text: string;
};

type Example = {
  name: string;
  url: string;
};

type Step = {
  heading: string;
  text: string;
  mdxtext?: MDXRemoteSerializeResult;
  image: string;
};
const LandingPage: NextPageWithLayout<PageProps> = ({ slug, source, frontMatter }) => {
  const title = (frontMatter?.metaTitle as string) || (frontMatter?.title as string) || '';
  const text = frontMatter?.hero_text as string;
  const image = frontMatter?.hero_image as string;
  const animate = frontMatter?.hero_animated as boolean;
  const imageAspect = frontMatter?.hero_aspect_priority as 'width' | 'height';
  const subtext = frontMatter?.subtext as string;
  const animationStartAt = frontMatter?.hero_animation_start_at as number;
  const examples = frontMatter?.examples as unknown as Example[];
  const steps = frontMatter?.steps as unknown as Step[];

  const listFeatures = (
    typeof frontMatter?.list_features === 'undefined' ? true : frontMatter?.list_features
  ) as boolean;
  const features: FrontmatterFeature[] =
    (frontMatter?.features as unknown as FrontmatterFeature[]) || [];

  const displayFeatures = (): JSX.Element => {
    if (!listFeatures) return <></>;
    if (Array.isArray(features) && features.length < 1) return <></>;
    return (
      <SimpleGrid
        id="features"
        columns={{ base: 1, md: 1, lg: 1 }}
        spacingX={{ base: 8, md: 20, lg: 24 }}
        spacingY={{ base: 8, md: 12, lg: 12 }}
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

  const displayExamples = (): JSX.Element => {
    if (!examples || examples.length === 0) {
      return (
        <Box>
          <Heading mx="auto" mt="16" id="contact" textAlign="center">
            It&apos;s time to&hellip;
          </Heading>
          <Box my="16">
            <Link href={BUILD_DEMO.href} passHref legacyBehavior>
              <Button
                mx={0}
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
                Start Building
                <SubButton>(for free!)</SubButton>
              </Button>
            </Link>
          </Box>
        </Box>
      );
    }
    return (
      <Box>
        <Heading mx="auto" mt="16" id="contact" textAlign="center">
          It&apos;s time to start building&hellip;
        </Heading>
        <SimpleGrid
          id="examples"
          columns={{ base: 3, md: 3, lg: 3 }}
          spacingX={{ base: 8, md: 20, lg: 24 }}
          spacingY={{ base: 8, md: 12, lg: 12 }}
        >
          {examples.map((example) => (
            <Link href={example.url} passHref legacyBehavior key={example.name}>
              <Card px={2} py={2} cursor="pointer">
                <Heading size="lg">{example.name}</Heading>
              </Card>
            </Link>
          ))}
        </SimpleGrid>
      </Box>
    );
  };

  const displaySteps = (): JSX.Element | JSX.Element[] => {
    if (!steps || steps.length === 0) return <></>;
    const ss = steps.map((step) => (
      <SideBySidePanel textOrientation="left" image={step.image}>
        <Heading>{step.heading}</Heading>
        {step.mdxtext && <MDXRemote {...step.mdxtext} components={mdxComponents} />}
      </SideBySidePanel>
    ));
    ss.unshift(
      <Heading fontSize="5vh" textAlign="center" width="100%">
        It&apos;s as simple as
      </Heading>,
    );
    return ss;
  };
  const feats = features.map((feature) => feature.title).join('||');
  const ogImage = `/api/og?title=${encodeURIComponent(
    text.replaceAll('_', ''),
  )}&template=landing&features=${encodeURIComponent(feats)}`;

  return (
    <Box pt={{ base: 0 }}>
      <SEOHead title={title} ogImageSrc={ogImage} />
      <Hero
        text={text}
        subtext={subtext}
        image={image}
        landingPage
        animate={animate || false}
        aspect={imageAspect}
        animationStartAt={animationStartAt}
        pt={32}
        color="#242A31"
      />

      <Flex
        w="full"
        pt={{ base: 12, md: 24 }}
        pb={{ base: 24, md: 32 }}
        px={{
          base: 5,
          lg: 20,
          xl: 30,
        }}
        justify={{ base: 'center', lg: 'center' }}
        align="center"
        gap={{ base: 0, lg: 10 }}
        direction="column"
        mx="auto"
        id="why"
      >
        <MDXRemote {...source} components={mdxComponents} />
        {displaySteps()}
        {displayFeatures()}
        {displayExamples()}

        <Heading textAlign="center">&hellip; or, ask our team a question</Heading>
        <Paragraph textAlign="center">
          We&apos;ll get back to you within one business day.
        </Paragraph>
        <ContactForm landingPage={slug} />
      </Flex>
    </Box>
  );
};

LandingPage.getLayout = (page: ReactElement): ReactNode => (
  <LandingLayout hideNav>{page}</LandingLayout>
);

export default LandingPage;
