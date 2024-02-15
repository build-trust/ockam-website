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
  portals: MDXRemoteSerializeResult;
  enroll: MDXRemoteSerializeResult;
}
interface StaticProps {
  props: Props;
}

const DownloadPage: NextPageWithLayout<Props> = ({ enroll, install, portals }) => (
  <Box pt={{ base: 10, lg: 10 }}>
    <SEOHead title="Download Ockam - Get started for free" />
    <SignupFlowManager enroll={enroll} install={install} portals={portals} />
  </Box>
);

DownloadPage.getLayout = (page: ReactElement): ReactNode => <MainLayout>{page}</MainLayout>;

export async function getStaticProps(): Promise<StaticProps> {
  // MDX text - can be from a local file, database, anywhere

  const install = `
  \`\`\`sh
  curl --proto '=https' --tlsv1.2 -sSfL https://install.command.ockam.io | bash
  `;

  const portals = `
  \`\`\`sh
  brew update && brew install build-trust/ockam/portals  
  `;

  const enroll = `
  \`\`\`sh
  ockam enroll
  `;

  return {
    props: {
      install: await mdxSerialize(install),
      portals: await mdxSerialize(portals),
      enroll: await mdxSerialize(enroll),
    },
  };
}

export default DownloadPage;
