import { ReactElement, ReactNode } from 'react';
import { Box } from '@chakra-ui/react';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import RemarkGFM from 'remark-gfm';
import RemarkPrism from 'remark-prism';

import { NextPageWithLayout } from '@typings/NextPageWithLayout';
import { MainLayout } from '@root/layouts';
import SEOHead from '@components/SEOHead';

import SignupFlowManager from '../../components/Signup/SignupFlowManager';

const mdxSerialize = async (content: string): Promise<MDXRemoteSerializeResult> => {
  const result = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [RemarkGFM, RemarkPrism],
    },
  });
  return result;
};

interface Props {
  install: MDXRemoteSerializeResult;
}
interface StaticProps {
  props: Props;
}

const DownloadPage: NextPageWithLayout<Props> = ({ install }) => (
  <Box pt={{ base: '120px' }}>
    <SEOHead title="Download Ockam - Get started for free" />
    <SignupFlowManager install={install} />
  </Box>
);

DownloadPage.getLayout = (page: ReactElement): ReactNode => (
  <MainLayout backgroundColor="#f9f9f9">{page}</MainLayout>
);

export async function getStaticProps(): Promise<StaticProps> {
  // MDX text - can be from a local file, database, anywhere

  const install = `
  \`\`\`sh
  curl --proto '=https' --tlsv1.2 -sSfL https://install.command.ockam.io | bash
  `;

  return {
    props: {
      install: await mdxSerialize(install),
    },
  };
}

export default DownloadPage;
