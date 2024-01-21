import { Box, Heading, Text } from '@chakra-ui/react';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { FC } from 'react';

import CodeBlock from '@root/components/mdx/CodeBlock';
import CodeInline from '@root/components/mdx/CodeInline';

const components = {
  h1: Heading,
  Heading,
  code: CodeBlock,
};

type EnrollProps = {
  enroll: MDXRemoteSerializeResult;
};

const Enroll: FC<EnrollProps> = ({ enroll }) => (
  <Box>
    <Heading as="h2" size="lg" mb="4">
      Enroll
    </Heading>

    <Text>
      Next you need to authenticate the Ockam Command app, you do this via the{' '}
      <CodeInline>enroll</CodeInline> command:
    </Text>
    <MDXRemote {...enroll} components={components} />
    <Text mb="10">
      Once you&apos;ve enrolled you will now have a space for you to host your projects, as well as
      a default project for you within this space. In addition you will also have generated a unique
      cryptographically provable identity and saves the corresponding key in a vault. This identity
      is issued a membership credential that will be used to manage the resources in your project.
      <br />
      <br />
      Don&apos;t worry if some of this doesn&apos;t make sense yet! Our job is to simplify all these
      complexities away, but we know some of you are curious to know how the magic happens.
    </Text>
  </Box>
);

export default Enroll;
