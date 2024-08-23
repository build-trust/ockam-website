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
import { getPageBySlug } from '@root/api/mdxApi';
import { POLICIES_PAGE_PATH } from '../policies/[slug]';

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
  terms: MDXRemoteSerializeResult;
}
interface StaticProps {
  props: Props;
}

const DownloadPage: NextPageWithLayout<Props> = ({ install, terms }) => (
  <Box pt={{ base: '120px' }}>
    <SEOHead title="Download Ockam - Get started for free" />
    <SignupFlowManager install={install} terms={terms} />
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

  const { source } = await getPageBySlug(POLICIES_PAGE_PATH, 'terms');

  return {
    props: {
      install: await mdxSerialize(install),
      terms: source,
    },
  };
}

export default DownloadPage;
