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
  portals: MDXRemoteSerializeResult;
};
const Download: FC<DownloadProps> = ({ install, portals }) => (
  <Box>
    <Heading as="h2" size="lg" mb="4">
      Mac users only: Install Portals for Mac, by Ockam
    </Heading>
    <Text mb="10">
      Portals is a Mac app that uses the Ockam library to privately share a service on your Mac to
      anyone, anywhere. The service is shared securely over an end-to-end encrypted Ockam Portal.
      Your friends will have access to it on their{' '}
      <strong>
        <code>localhost</code>
      </strong>
      !
    </Text>
    <MDXRemote {...portals} components={components} />
    <Heading as="h2" size="lg" mb="4">
      Everyone else: Install Ockam Command
    </Heading>
    <Text mb="10">
      Now that you&apos;ve created your account you need to download and install Ockam Command to
      your local machine:
    </Text>
    <MDXRemote {...install} components={components} />
  </Box>
);

export default Download;
