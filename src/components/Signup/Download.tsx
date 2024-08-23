import { Box, Button, Heading, Text } from '@chakra-ui/react';
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
  next: () => void;
  prev: () => void;
};
const Download: FC<DownloadProps> = ({ install, next, prev }) => (
  <Box>
    <Heading as="h2" size="lg" mb="4">
      Install Ockam Command
    </Heading>
    <Text mb="10">
      Now that you&apos;ve created your account you need to download and install Ockam Command to
      your local machine:
    </Text>
    <MDXRemote {...install} components={components} />
    <Box my={8}>
      <Button colorScheme="avocado" mb="8" onClick={next}>
        I&apos;ve completed this step
      </Button>
      <Button colorScheme="gray" mb="8" onClick={prev} mx={4}>
        Go back
      </Button>
    </Box>
  </Box>
);

export default Download;
