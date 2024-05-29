import { ReactElement, ReactNode } from 'react';
import { Box, Button, Flex } from '@chakra-ui/react';
import { serialize } from 'next-mdx-remote/serialize';
import RemarkGFM from 'remark-gfm';
import RemarkPrism from 'remark-prism';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import Link from 'next/link';

import { NextPageWithLayout } from '@typings/NextPageWithLayout';
import MainLayout from '@layouts/MainLayout';
import { Hero, Cases, SecureByDesign, Networkless, Magic, Videos } from '@views/homepage';
import { FeatureType } from '@root/views/homepage/Magic';
import GradientContainer from '@root/layouts/components/GradientContainer';
import { CONTACT_PAGE_PATH, SIGNUP_PATH } from '@root/consts/paths';
import { AllPageMessage } from '@root/components/AllPageNotice';
import allPageMessage from '@root/utils/appPageMessage';

const mdxSerialize = async (content: string): Promise<MDXRemoteSerializeResult> => {
  const result = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [RemarkGFM, RemarkPrism],
    },
  });
  return result;
};

interface Props {
  magic: FeatureType[];
  allPageMessage: AllPageMessage;
}

interface StaticProps {
  props: Props;
}

const HomePage: NextPageWithLayout<Props> = ({ magic }) => {
  const buttonStyles = {
    borderColor: 'white',
    color: 'white',
    _hover: {
      background: 'white',
      color: 'avocado.500',
    },
  };
  const heroCTAs = (): ReactElement => (
    <Flex width="100%" justifyContent="space-evenly">
      <Button as={Link} href={SIGNUP_PATH} variant="outline" {...buttonStyles}>
        Get Started
      </Button>
      <Button as={Link} href={CONTACT_PAGE_PATH} variant="outline" {...buttonStyles}>
        Contact Us
      </Button>
    </Flex>
  );

  return (
    <Box pt={0}>
      <GradientContainer bottomOnly pt={{ base: '5em', sm: '10em', md: '10em', lg: '15em' }}>
        <Hero
          subtext="Between your platform and every <Application|Database|Repo|Agent|SaaS|Datalake> everywhere"
          ctas={heroCTAs()}
        />
      </GradientContainer>
      <Box
        pt={{ base: 4, lg: 4 }}
        pb={{ base: 20, lg: 24 }}
        boxShadow="2xl"
        borderRadius={{ base: 0, lg: '15' }}
        borderStyle="none"
        background="white"
        maxW="container.max"
        mx={{ base: 0, xl: 'auto' }}
        mt="-17em"
        position="relative"
        zIndex={2}
      >
        <Networkless />
        <SecureByDesign />
      </Box>
      <Magic magic={magic} zIndex={1} marginTop="-3em" />
      <Cases marginTop="-3em" />
      <Videos />
    </Box>
  );
};

export async function getStaticProps(): Promise<StaticProps> {
  return {
    props: {
      magic: [
        {
          image: 'portals',
          title: 'Portals',
          mdx: await mdxSerialize(`
          Portals carry various protocols over end-to-end encrypted Ockam secure channels. They work at the application level and 
          abstract away the setup, management, and security of the network layer. When application connectivity and security is 
          decoupled from your network, you no longer need to wait for your IT team to give you permissions to build connections.
          
          No port forwarding, no changes to firewalls, no VPNs, no reverse proxies, no Private Link&hellip; get systems connected within minutes.
          `),
        },

        {
          image: 'virtual-adjacency',
          title: 'Virtual Adjacency',
          mdx: await mdxSerialize(`
          The magical thing that Ockam unlocks via Portals is what we call Virtual Adjacency. 

          The Portal connects your application to a remote application, and _virtually_ 
          pulls it through the portal so that it appears as though they sit next
          to each other on the same machine. That means applications are available 
          to each other on \`localhost\` in a peer-to-peer way. 
          
          What we don't have to do in this scenario is change any of the network 
          layer configurations or really need to understand anything at the 
          network layer at all. 
          
          In this way we say Ockam is networkless.`),
        },
      ],
      allPageMessage: await allPageMessage,
    },
  };
}

HomePage.getLayout = (page: ReactElement, pageProps?: Props): ReactNode => (
  <MainLayout
    gradient={['#4FDAB8', '#52C7EA']}
    backgroundColor="#f9f9f9"
    allPage={pageProps?.allPageMessage}
  >
    {page}
  </MainLayout>
);

export default HomePage;
