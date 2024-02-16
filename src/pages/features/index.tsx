import { ReactElement, ReactNode } from 'react';
import { Box } from '@chakra-ui/react';
import RemarkGFM from 'remark-gfm';
import RemarkPrism from 'remark-prism';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';

import { Features } from '@root/views/homepage';
import { NextPageWithLayout } from '@typings/NextPageWithLayout';
import { MainLayout } from '@root/layouts';
import SEOHead from '@root/components/SEOHead';
import { FeatureType } from '@root/views/homepage/Features';

const ogFeatures = ['🎉 Start free today', '🌱 Grow to any size', '🛟 Premium support & SLAs'].join(
  '||',
);

const mdxSerialize = async (content: string): Promise<MDXRemoteSerializeResult> => {
  const result = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [RemarkGFM, RemarkPrism],
    },
  });
  return result;
};

interface Props {
  features: FeatureType[];
}
interface StaticProps {
  props: Props;
}

const FeaturesPage: NextPageWithLayout<Props> = ({ features }) => (
  <Box pt={{ base: 10, lg: 10 }}>
    <SEOHead
      title="Pricing & Packages - Get started for free"
      description="Ockam's pricing is designed to get you started quickly, and support you as you grow in the future. You can even sign up through your preferred cloud marketplace to unify billing & leverage existing commitments."
      ogImageSrc={`/api/og?title=${encodeURIComponent(
        'Simple pricing that scales with you',
      )}&features=${encodeURIComponent(ogFeatures)}&template=nocheck`}
    />
    <Features features={features} />
  </Box>
);

export async function getStaticProps(): Promise<StaticProps> {
  return {
    props: {
      features: [
        {
          image: 'virtual-adjacency',
          title: 'Virtual Adjacency',
          mdx: await mdxSerialize(`
When you have two applications running in two different networks, and they need to share data with each other, the classic way to set this up would be to connect networks or use VPNs, reverse proxies, maybe a platform specific solution like PrivateLink. There are many ways that you could do this at the network layer.  
          
Ockam is at the application layer. This is a fundamental paradigm shift in how you can think about moving data and connecting applications. Because in this scenario, what we are doing is we're moving these applications so that they sit virtually next to each other. That means applications are available to each other on \`localhost\` in a peer-to-peer way. Applications appear to each other like they're sitting next to each other in the same box! And what we don't have to do in this scenario is change any of the network layer configurations or really need to understand anything and the network at all. In this way we say Ockam is networkless.`),
        },

        {
          image: 'app-level',
          title: 'Portals',
          text: 'The magical thing about Ockam - it is built around application layer protocols that abstract away the setup, management, and security of the network layer. When application connectivity and security is decoupled from your network, you no longer need to wait for your IT team to give you permissions to build connections.',
        },

        {
          image: 'app-level',
          title: 'Authentication between Applications',
          text: 'The magical thing about Ockam - it is built around application layer protocols that abstract away the setup, management, and security of the network layer. When application connectivity and security is decoupled from your network, you no longer need to wait for your IT team to give you permissions to build connections.',
        },
        {
          image: 'guaranteed-authenticity',
          title: 'Encrypted Data-in-Motion',
          text: 'Modern applications are distributed and have an unwieldy number of interconnections that must trustfully exchange data. To trust data-in-motion, applications need end-to-end guarantees of data authenticity, integrity, and confidentiality. To be private and secure by-design, applications must have granular control over every trust and access decision. Ockam allows you to add these controls and guarantees to any application.',
        },
        {
          image: 'five-stars',
          title: 'Open and Adaptable',
          text: "Our programming libraries are open source and can be included in any applications. We've a thriving open source community and we're regularly ranked among the most popular open source security projects.",
        },
        {
          image: 'any-language',
          title: 'Developer-first Experience',
          text: 'Ockam has been built by and for developers first. Use our OSS programming libraries to embed our protocols directly into your application, or use Ockam Command to manage your portals and secure channels via the CLI.',
        },
      ],
    },
  };
}

FeaturesPage.getLayout = (page: ReactElement): ReactNode => (
  <MainLayout gradient={['#4FDAB8', '#52C7EA']}>{page}</MainLayout>
);

export default FeaturesPage;
