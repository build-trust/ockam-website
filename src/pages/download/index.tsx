import { FC, ReactElement, ReactNode, useEffect, useState } from 'react';
import {
  Box,
  Heading,
  Text,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
  Button,
  Link,
} from '@chakra-ui/react';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import RemarkGFM from 'remark-gfm';
import RemarkPrism from 'remark-prism';

import { NextPageWithLayout } from '@typings/NextPageWithLayout';
import { MainLayout } from '@root/layouts';
import SEOHead from '@components/SEOHead';
import { currentUser, User } from '@root/components/Auth';
import CodeInline from '@root/components/mdx/CodeInline';
import CodeBlock from '@root/components/mdx/CodeBlock';

const components = {
  h1: Heading,
  Heading,
  code: CodeBlock,
};

type InstructionsProps = {
  email?: string;
  install: MDXRemoteSerializeResult;
  enroll: MDXRemoteSerializeResult;
};
const Instructions: FC<InstructionsProps> = ({ install, enroll }): ReactElement => {
  const steps = [
    { title: 'Log in', description: 'Setup your account' },
    { title: 'Download', description: 'Download & Install Ockam' },
    { title: 'Enroll', description: 'Connect your first node' },
    { title: 'Deploy', description: 'Create a secure channel' },
  ];
  const { activeStep, setActiveStep } = useSteps({
    index: 2,
    count: steps.length,
  });

  const displayStep = (step: number): ReactElement => {
    switch (step) {
      case 2:
        return (
          <Box>
            <Text mb="10">
              Now that you&apos;ve created your accound you need to download and install Ockam
              Command to your local machine:
            </Text>
            <MDXRemote {...install} components={components} />
          </Box>
        );
        break;
      case 3:
        return (
          <Box>
            <Text>
              Next you need to authenticate the Ockam Command app, you do this via the{' '}
              <CodeInline>enroll</CodeInline> command:
            </Text>
            <MDXRemote {...enroll} components={components} />
          </Box>
        );
        break;
      case 4:
        return (
          <Box>
            <Heading as="h2" size="lg" mb="4">
              Success
            </Heading>

            <Text mb="10">
              Now you can take a look at the various{' '}
              <Link href="https://docs.ockam.io/guides/use-cases" color="brand.500">
                Ockam use cases
              </Link>{' '}
              and follow one of associated example guides to how to implement it.
            </Text>
          </Box>
        );
        break;
      default:
        return <></>;
    }
  };

  return (
    <Box maxW="6xl" mx="auto" mb="32">
      <Stepper index={activeStep} mb="8" mt="16" colorScheme="avocado">
        {steps.map((step) => (
          <Step key={`step-${step.title}`}>
            <StepIndicator>
              <StepStatus
                complete={<StepIcon />}
                incomplete={<StepNumber />}
                active={<StepNumber />}
              />
            </StepIndicator>

            <Box flexShrink="0">
              <StepTitle>{step.title}</StepTitle>
              <StepDescription>{step.description}</StepDescription>
            </Box>

            <StepSeparator />
          </Step>
        ))}
      </Stepper>
      {displayStep(activeStep)}
      {activeStep < steps.length && (
        <Button colorScheme="avocado" mb="8" onClick={(): void => setActiveStep(activeStep + 1)}>
          I&apos;ve completed this step
        </Button>
      )}
    </Box>
  );
};

interface Props {
  install: MDXRemoteSerializeResult;
  enroll: MDXRemoteSerializeResult;
}
interface StaticProps {
  props: Props;
}
const DownloadPage: NextPageWithLayout<Props> = ({ install, enroll }) => {
  const [user, setUser] = useState<User>({});

  useEffect(() => {
    setUser(currentUser() || {});
  }, [setUser]);
  return (
    <Box pt={{ base: 10, lg: 10 }}>
      <SEOHead subTitle="Download Ockam - Get started for free" />
      <Instructions email={user.email} install={install} enroll={enroll} />
    </Box>
  );
};

DownloadPage.getLayout = (page: ReactElement): ReactNode => <MainLayout>{page}</MainLayout>;

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
  const install = `
  \`\`\`sh
  curl --proto '=https' --tlsv1.2 -sSf \\ 
      https://raw.githubusercontent.com/build-trust/ockam/develop/install.sh | bash
  \`\`\`
  `;

  const enroll = `
  \`\`\`sh
  ockam enroll
  \`\`\`
  `;

  return {
    props: {
      install: await mdxSerialize(install),
      enroll: await mdxSerialize(enroll),
    },
  };
}

export default DownloadPage;
