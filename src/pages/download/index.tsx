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
  ListItem,
  UnorderedList,
} from '@chakra-ui/react';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import RemarkGFM from 'remark-gfm';
import RemarkPrism from 'remark-prism';
import { useRouter } from 'next/router';

import { NextPageWithLayout } from '@typings/NextPageWithLayout';
import { MainLayout } from '@root/layouts';
import SEOHead from '@components/SEOHead';
import { currentUser, isLoggedIn, User } from '@root/components/Auth';
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
    index: 1,
    count: steps.length,
  });
  useEffect(() => {
    // @ts-ignore window.analytics undefined below
    window.analytics.track(`Download - Step ${activeStep + 1}`);
  }, [activeStep]);

  const displayStep = (step: number): ReactElement => {
    switch (step) {
      case 1:
        return (
          <Box>
            <Heading as="h2" size="lg" mb="4">
              Download
            </Heading>

            <Text mb="10">
              Now that you&apos;ve created your account you need to download and install Ockam
              Command to your local machine:
            </Text>
            <MDXRemote {...install} components={components} />
          </Box>
        );
        break;
      case 2:
        return (
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
              Once you&apos;ve enrolled you will now have a space for you to host your projects, as
              well as a default project for you within this space. In addition you will also have
              generated a unique cryptographically provable identity and saves the corresponding key
              in a vault. This identity is issued a membership credential that will be used to
              manage the resources in your project.
              <br />
              <br />
              Don&apos;t worry if some of this doesn&apos;t make sense yet! Our job is to simplify
              all these complexities away, but we know some of you are curious to know how the magic
              happens.
            </Text>
          </Box>
        );
        break;
      case 3:
        return (
          <Box>
            <Heading as="h2" size="lg" mb="4">
              Deploy
            </Heading>

            <Text mb="4">
              Now you&apos;re ready to build! Now you can take a look at the various{' '}
              <Link href="https://docs.ockam.io/guides/use-cases" color="brand.500">
                Ockam use cases
              </Link>{' '}
              and follow one of associated example guides to how to implement it. Also make sure you
              connect with us to stay updated on the latest changes or to get any help you may need:
            </Text>
            <UnorderedList spacing="2">
              <ListItem>
                <Link color="brand.600" href="https://discord.gg/RAbjRr3kds">
                  👾 Discord
                </Link>{' '}
                - Join us at the Build Trust server, full of people interested in building systems
                that are secure-by-design
              </ListItem>
              <ListItem>
                <Link color="brand.600" href="https://github.com/build-trust/ockam/discussions">
                  💬 Discussions
                </Link>{' '}
                - Come and introduce yourself, ask for help, etc.
              </ListItem>
              <ListItem>
                <Link color="brand.600" href="https://github.com/build-trust/ockam">
                  ⭐️ Star us on GitHub! ⭐️️
                </Link>{' '}
                - Share the 💙, see updates in your feed, help others discover Ockam
              </ListItem>
            </UnorderedList>
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
      {activeStep < steps.length - 1 && (
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
  const router = useRouter();
  const [user, setUser] = useState<User>({});

  useEffect(() => {
    if (!isLoggedIn()) router.replace('/auth/login');
    setUser(currentUser() || {});
  }, [setUser, router]);
  return (
    <Box pt={{ base: 10, lg: 10 }}>
      <SEOHead title="Download Ockam - Get started for free" />
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
  curl --proto '=https' --tlsv1.2 -sSfL https://install.command.ockam.io | bash
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
