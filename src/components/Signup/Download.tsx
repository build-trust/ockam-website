import { Box, Heading, Text } from '@chakra-ui/react';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { FC } from 'react';

import CodeBlock from '@root/components/mdx/CodeBlock';

const components = {
  h1: Heading,
  Heading,
  code: CodeBlock,
};

type DownloadProps = {
  install: MDXRemoteSerializeResult;
};
const Download: FC<DownloadProps> = ({ install }) => (
  <Box>
    <Heading as="h2" size="lg" mb="4">
      Install Ockam Command
    </Heading>
    <Text mb="10">
      Now that you&apos;ve created your account you need to download and install Ockam Command to
      your local machine:
    </Text>
    <MDXRemote {...install} components={components} />
  </Box>
);

export default Download;
