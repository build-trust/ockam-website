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
          image: 'portals',
          title: 'Portals',
          mdx: await mdxSerialize(`
The magical thing about Ockam - it is built around application layer protocols that abstract away the setup, management, and security of the network layer. When application connectivity and security is decoupled from your network, you no longer need to wait for your IT team to give you permissions to build connections.`),
        },

        {
          image: 'virtual-adjacency',
          title: 'Virtual Adjacency',
          mdx: await mdxSerialize(`
When you have two applications running in two different networks, and they need to share data with each other, the classic way to set this up would be to connect networks or use VPNs, reverse proxies, maybe a platform specific solution like PrivateLink. There are many ways that you could do this at the network layer.  
          
Ockam is at the application layer. This is a fundamental paradigm shift in how you can think about moving data and connecting applications. Because in this scenario, what we are doing is we're moving these applications so that they sit virtually next to each other. That means applications are available to each other on \`localhost\` in a peer-to-peer way. Applications appear to each other like they're sitting next to each other in the same box! And what we don't have to do in this scenario is change any of the network layer configurations or really need to understand anything and the network at all. In this way we say Ockam is networkless.`),
        },
      ],
    },
  };
}

FeaturesPage.getLayout = (page: ReactElement): ReactNode => (
  <MainLayout gradient={['#4FDAB8', '#52C7EA']}>{page}</MainLayout>
);

export default FeaturesPage;
