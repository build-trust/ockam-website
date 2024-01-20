import { FC, ReactElement, ReactNode, useEffect, useState } from 'react';
import { Steps, Step, useSteps } from 'chakra-ui-steps';
import {
  Box,
  Heading,
  Text,
  Button,
  Link,
  ListItem,
  UnorderedList,
  Flex,
  theme,
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

import ChoosePlan from './ChoosePlan';

const components = {
  h1: Heading,
  Heading,
  code: CodeBlock,
};

type InstructionsProps = {
  install: MDXRemoteSerializeResult;
  portals: MDXRemoteSerializeResult;
  enroll: MDXRemoteSerializeResult;
};

const mdxSerialize = async (content: string): Promise<MDXRemoteSerializeResult> => {
  const result = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [RemarkGFM, RemarkPrism],
    },
  });
  return result;
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

const Deploy: FC = () => (
  <Box>
    <Heading as="h2" size="lg" mb="4">
      Deploy
    </Heading>

    <Text mb="4">
      Now you&apos;re ready to build! Now you can take a look at the various{' '}
      <Link href="https://docs.ockam.io/guides/use-cases" color="brand.500">
        Ockam use cases
      </Link>{' '}
      and follow one of associated example guides to how to implement it. Also make sure you connect
      with us to stay updated on the latest changes or to get any help you may need:
    </Text>
    <UnorderedList spacing="2">
      <ListItem>
        <Link color="brand.600" href="https://discord.gg/RAbjRr3kds">
          👾 Discord
        </Link>{' '}
        - Join us at the Build Trust server, full of people interested in building systems that are
        secure-by-design
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

const Instructions: FC<InstructionsProps> = ({ enroll, install, portals }): ReactElement => {
  const steps = [
    { title: 'Log in', description: 'Setup your account' },
    { title: 'Choose a plan', description: 'Lorem ipsum' },
    { title: 'Download', description: 'Download & Install Ockam' },
    { title: 'Enroll', description: 'Connect your first node' },
    { title: 'Deploy', description: 'Create a secure channel' },
  ];

  const { nextStep, prevStep, activeStep } = useSteps({
    initialStep: 1,
  });

  useEffect(() => {
    // @ts-ignore window.analytics undefined below
    window.analytics.track(`Signup - Step ${activeStep + 1}`);
  }, [activeStep]);

  const setPlan = (): void => {
    nextStep();
  };
  const displayStep = (step: number): ReactElement => {
    switch (step) {
      case 1:
        return <ChoosePlan onComplete={setPlan} />;
        break;
      case 2:
        return <Download install={install} portals={portals} />;
        break;
      case 3:
        return <Enroll enroll={enroll} />;
        break;
      case 4:
        return <Deploy />;
        break;
      default:
        return <></>;
    }
  };

  return (
    <Flex mx="auto" mb="32" p={8} direction={{ base: 'row' }} w="100%">
      <Box>
        <Steps
          variant="circles"
          orientation="vertical"
          mobileBreakpoint={theme.breakpoints.sm}
          activeStep={activeStep}
          colorScheme="avocado"
          mb={12}
          size="sm"
          minW={{ base: '250px' }}
        >
          {steps.map(({ title, description }) => (
            <Step key={`step-${title}`} label={title} description={description} />
          ))}
        </Steps>
      </Box>
      <Box>
        {displayStep(activeStep)}
        <Button colorScheme="avocado" mb="8" onClick={prevStep}>
          Go back
        </Button>
        {activeStep < steps.length - 1 && activeStep !== 1 && (
          <Button colorScheme="avocado" mb="8" onClick={nextStep}>
            I&apos;ve completed this step
          </Button>
        )}
      </Box>
    </Flex>
  );
};

interface Props {
  install: MDXRemoteSerializeResult;
  portals: MDXRemoteSerializeResult;
  enroll: MDXRemoteSerializeResult;
}
interface StaticProps {
  props: Props;
}

const DownloadPage: NextPageWithLayout<Props> = ({ enroll, install, portals }) => {
  const router = useRouter();
  const [user, setUser] = useState<User>({});

  useEffect(() => {
    if (!isLoggedIn()) router.replace('/auth/login');
    setUser(currentUser() || {});
  }, [setUser, router]);
  return (
    <Box pt={{ base: 10, lg: 10 }}>
      <SEOHead title="Download Ockam - Get started for free" />
      <Instructions email={user.email} enroll={enroll} install={install} portals={portals} />
    </Box>
  );
};

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
