import { useRouter } from 'next/router';
import RemarkGFM from 'remark-gfm';
import RemarkPrism from 'remark-prism';
import { useUser } from '@auth0/nextjs-auth0/client';
import { Box, Container, Heading } from '@chakra-ui/react';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

import { MainLayout } from '@root/layouts';
import CodeBlock from '@root/components/mdx/CodeBlock';

const components = {
  h1: Heading,
  Heading,
  code: CodeBlock,
};

interface Props {
  installInstructions: MDXRemoteSerializeResult;
}
const LoginPage = ({ installInstructions }: Props): JSX.Element => {
  const router = useRouter();
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (!user) {
    router.push('/api/auth/login');
    return <></>;
  }

  return (
    <MainLayout>
      <Box pt={{ base: 10, lg: 20 }}>
        <Container variant="section">
          <Heading as="h1" size="h4" w="full" fontWeight="extrabold" textAlign="center">
            Welcome {user.name}!
          </Heading>
          <MDXRemote {...installInstructions} components={components} />
        </Container>
      </Box>
    </MainLayout>
  );
};
interface StaticProps {
  props: Props;
}

const mdxSerialize = async (content: string): Promise<MDXRemoteSerializeResult> => {
  const result = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [RemarkGFM, RemarkPrism],
    },
  });
  return result;
};

export async function getStaticProps(): Promise<StaticProps> {
  // MDX text - can be from a local file, database, anywhere
  const source = `
\`\`\`sh
curl --proto '=https' --tlsv1.2 -sSf \\ 
    https://raw.githubusercontent.com/build-trust/ockam/develop/install.sh | bash
\`\`\`
`;

  const mdxSource = await mdxSerialize(source);
  return {
    props: {
      installInstructions: mdxSource,
    },
  };
}
export default LoginPage;
