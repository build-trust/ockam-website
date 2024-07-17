/* eslint-disable react/no-unescaped-entities */
import React, { ReactElement, ReactNode } from 'react';
import { existsSync } from 'node:fs';
import path from 'path';
import { Box, Heading, Text, TextProps } from '@chakra-ui/react';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

import Hero from '@views/for/common/Hero';
import { generateSlugFromPath, getPageBySlug, pageFilePaths } from '@api/mdxApi';
import { NextPageWithLayout } from '@typings/NextPageWithLayout';
import allPageMessageProps, { AllPageMessage, mdxSerialize } from '@utils/appPageMessage';
import DarkLayout from '@layouts/DarkLayout';
import { TextContainer } from '@views/for/common/HeroContainer';
import {
  Description,
  FlexContainer,
  StackContainer,
  SubTitle,
  Title,
  WhiteContainer,
} from '@views/for/common/WhiteContainer';
import FormSection, { Example } from '@views/for/common/FormSection';
import SEOHead from '@root/components/SEOHead';
import ExcalidrawAnimation from '@components/ExcalidrawAnimation';
import mdxComponents from '@components/mdx';

export const LANDING_PAGE_PATH = path.join(process.cwd(), 'src/content/landing-pages');

if (mdxComponents) {
  mdxComponents.p = (props: TextProps): JSX.Element => (
    <Text
      fontWeight={{ base: 400 }}
      color="gray.500"
      fontSize={{ base: '1rem' }}
      textAlign="justify"
      {...props}
    />
  );
}

type ParamsType = {
  params: { slug: string };
};
type PageProps = {
  slug: string;
  source: MDXRemoteSerializeResult;
  frontMatter: { [key: string]: string | number | boolean };
  allPageMessage?: AllPageMessage | null;
  backgroundImage: string;
};

type Step = {
  heading: string;
  text: string;
  mdxtext?: MDXRemoteSerializeResult;
  image: string;
};
type FrontmatterFeature = {
  icon?: string;
  title: string;
  subtitle?: string;
  text: string;
  mdxtext?: MDXRemoteSerializeResult;
  image?: string;
  imagealt?: string;
  animate?: boolean;
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

type Frontmatter = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};

const fieldsToMdx = async (fields: string[], frontmatter: Frontmatter): Promise<Frontmatter> => {
  const mdxFrontmatter = frontmatter;
  if (fields) {
    await fields.forEach(async (field) => {
      const [name, attr] = field.split('.', 2);
      if (name.indexOf('[]') > 0) {
        const n = name.replace('[]', '');
        const mdxFields = frontmatter[n];
        if (mdxFields) {
          await mdxFields.forEach(async (obj: Frontmatter, idx: number) => {
            const val = obj[attr];
            mdxFrontmatter[n][idx][`mdx${attr}`] = await mdxSerialize(val);
          });
        }
      }
    });
  }
  return mdxFrontmatter;
};

export const getStaticProps = async ({ params }: ParamsType): Promise<{ props: PageProps }> => {
  const frontmatterMdxFields = ['steps[].text', 'features[].text'];
  const { source, frontMatter } = await getPageBySlug(LANDING_PAGE_PATH, params.slug);
  const { slug } = params;
  const bgfilename = path.resolve(`src/views/for/${slug}/assets/hero.svg`);
  let backgroundImage;
  if (existsSync(bgfilename)) {
    backgroundImage = (await import(`@views/for/${slug}/assets/hero.svg?url`)).default.src;
  } else {
    backgroundImage = (await import(`@views/for/saas-platforms/assets/hero.svg?url`)).default.src;
  }
  return {
    props: {
      slug,
      source,
      backgroundImage,
      frontMatter: await fieldsToMdx(frontmatterMdxFields, frontMatter),
      allPageMessage: await allPageMessageProps,
    },
  };
};
const SaaSPlatforms: NextPageWithLayout<PageProps> = ({
  frontMatter,
  backgroundImage,
}): ReactElement => {
  const title = (frontMatter?.metaTitle as string) || (frontMatter?.title as string) || '';
  const text = frontMatter?.hero_text as string;
  const image = frontMatter?.hero_image as string;
  const animate = frontMatter?.hero_animated as boolean;
  const imageAspect = frontMatter?.hero_aspect_priority as 'width' | 'height';
  const subtext = frontMatter?.subtext as string;
  const animationStartAt = frontMatter?.hero_animation_start_at as number;
  const examples = frontMatter?.examples as unknown as Example[];
  const steps = frontMatter?.steps as unknown as Step[];
  const features: FrontmatterFeature[] =
    (frontMatter?.features as unknown as FrontmatterFeature[]) || [];
  const feats = features
    .slice(0, 2)
    .map((feature) => feature.title)
    .join('||');
  const ogImage = `/api/og?title=${encodeURIComponent(
    text.replaceAll('_', ''),
  )}&template=landing&features=${encodeURIComponent(feats)}`;

  return (
    <Box>
      <SEOHead title={title} ogImageSrc={ogImage} />
      <Hero
        text={text}
        subtext={subtext}
        image={image}
        animate={animate || false}
        backgroundImage={backgroundImage}
        aspect={imageAspect}
        startAt={animationStartAt}
      />

      <WhiteContainer>
        <StackContainer>
          {features.map((feature) => (
            <FlexContainer key={feature.title}>
              <TextContainer>
                <Box>
                  <Title>{feature.title}</Title>
                  {feature.subtitle && <SubTitle>{feature.subtitle}</SubTitle>}
                </Box>
                {feature.mdxtext && <MDXRemote {...feature.mdxtext} components={mdxComponents} />}
                {!feature.mdxtext && <Description>{feature.text}</Description>}
              </TextContainer>
              {feature.image && (
                <ExcalidrawAnimation
                  src={feature.image}
                  animate={feature.animate || false}
                  aspect="width"
                  mx="auto"
                  flex={1}
                  maxWidth={{ base: '25rem', lg: 'initial' }}
                  width={{ base: '100%', lg: '50%' }}
                />
              )}
            </FlexContainer>
          ))}
        </StackContainer>

        {steps && steps.length > 0 && (
          <StackContainer mt={48}>
            <Heading
              fontWeight={{ base: 700 }}
              fontFamily="neutraface"
              fontSize={{ base: '2.5rem', lg: '5.5rem' }}
            >
              Going to production is as easy as&hellip;
            </Heading>
            {steps.map((step) => (
              <FlexContainer key={step.heading}>
                <TextContainer>
                  <Box>
                    <Title>{step.heading}</Title>
                  </Box>
                  <Description>{step.text}</Description>
                </TextContainer>
                {step.image && (
                  <ExcalidrawAnimation
                    src={step.image}
                    animate={false}
                    aspect="width"
                    mx="auto"
                    flex={1}
                    maxWidth={{ base: '25rem', lg: 'initial' }}
                    width={{ base: '100%', lg: '50%' }}
                  />
                )}
              </FlexContainer>
            ))}
          </StackContainer>
        )}
      </WhiteContainer>
      <FormSection examples={examples} />
    </Box>
  );
};

SaaSPlatforms.getLayout = (page: ReactElement, pageProps?: PageProps): ReactNode => (
  <DarkLayout
    except={pageProps?.allPageMessage?.except}
    message={pageProps?.allPageMessage?.message}
  >
    {page}
  </DarkLayout>
);

export default SaaSPlatforms;
