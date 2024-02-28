import { FC, ReactElement, ReactNode } from 'react';
import { Box, Container, Flex, Heading } from '@chakra-ui/react';
import { serialize } from 'next-mdx-remote/serialize';
import RemarkGFM from 'remark-gfm';
import RemarkPrism from 'remark-prism';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';

import { NextPageWithLayout } from '@typings/NextPageWithLayout';
import MainLayout from '@layouts/MainLayout';
import { Hero, Cases } from '@views/homepage';
import ItsSimple from '@assets/images/its-simple-with.svg';
import AndIts from '@assets/images/and-its.svg';
import RotatingText from '@root/components/RotatingText';
import Magic, { FeatureType } from '@root/views/homepage/Magic';
import GradientContainer from '@root/layouts/components/GradientContainer';

const mdxSerialize = async (content: string): Promise<MDXRemoteSerializeResult> => {
  const result = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [RemarkGFM, RemarkPrism],
    },
  });
  return result;
};

const Networkless: FC = () => (
  <Container variant="section" mb={{ base: 40, sm: 40, md: 12 }} pt={{ base: 16, sm: 16, md: 0 }}>
    <Flex direction="column" alignItems="flex-start" justifyContent="space-between" width="100%">
      <Box
        width={{ base: '70%', sm: '33%' }}
        marginLeft={{ base: '30%', sm: '70%', md: '50%', lg: '50%' }}
        height="180px"
        display={{ base: 'none', sm: 'none', md: 'block' }}
      >
        <ItsSimple width="100%" preserveAspectRatio="xMinYMin meet" />
      </Box>
      <Box flexGrow="1" mt={{ sm: 8, md: '-5%', lg: '0' }}>
        <Heading as="h2" size="h2" lineHeight={1.3} mb={{ base: 6, lg: 8 }} letterSpacing="-2px">
          Networkless connectivity
        </Heading>
        <Heading size="h4" as="h3">
          Ockam works at the application layer.
        </Heading>
        <Heading as="h3" size="md" color="gray.500" fontWeight="500" letterSpacing="-0.07em">
          When application security is decoupled from your network, <br />
          you can skip the pain of{' '}
          <RotatingText
            interval={3000}
            delay={4000}
            words={[
              'implicit trust in your network',
              'firewalls',
              'VPNs',
              'reverse proxies',
              'certificate management',
              'IP lists',
              'IT backlogs',
              'sysadmins',
            ]}
          />
          .
        </Heading>
      </Box>
    </Flex>
  </Container>
);

const SecureByDesign: FC = () => (
  <Container
    variant="section"
    style={{ clear: 'both' }}
    mb={{ base: 40, sm: 40, md: 12 }}
    pt={{ base: 16, sm: 16, md: 0 }}
  >
    <Flex direction="row" alignItems="flex-start" justifyContent="space-between" width="100%">
      <Box
        width={{ base: '100%', sm: '53%' }}
        ml={{ base: '0', sm: '10%', md: '10%', lg: '25%' }}
        display={{ base: 'none', sm: 'none', md: 'block' }}
      >
        <AndIts width="100%" preserveAspectRatio="xMinYMin meet" />
      </Box>

      <Box
        flexGrow="1"
        pt={{ base: 0, sm: 0, md: '160px' }}
        ml={{ base: 0, sm: 0, md: 8 }}
        mt={{ base: 0, sm: 0, md: '-10%', lg: '-5%' }}
        w={{ base: '100%' }}
      >
        <Heading as="h2" size="h2" lineHeight={1.3} mb={{ base: 6, lg: 8 }} letterSpacing="-2px">
          Secure-by-design
        </Heading>
        <Heading size="h4" as="h3">
          Ockam is{' '}
          <RotatingText
            interval={3000}
            delay={4000}
            words={['audited', 'point-to-point', 'open source', 'zero trust']}
          />
          .
        </Heading>
        <Heading as="h3" size="md" color="gray.500" fontWeight="500" letterSpacing="-0.07em">
          So your applications can be secure too.
        </Heading>
      </Box>
    </Flex>
  </Container>
);

interface Props {
  magic: FeatureType[];
}

interface StaticProps {
  props: Props;
}

const HomePage: NextPageWithLayout<Props> = ({ magic }) => (
  <Box pt={0}>
    <GradientContainer
      bottomOnly
      pt={{ base: '5em', sm: '10em', md: '10em', lg: '15em' }}
      minH="100vh"
    >
      <Hero
        subtext="Between your platform and every <Application|Database|Repo|Agent|SaaS|Datalake> everywhere"
        minH="40vh"
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
      mt="-14em"
    >
      <Networkless />
      <SecureByDesign />
    </Box>
    <Magic magic={magic} />
    <Cases />
  </Box>
);

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
    },
  };
}

HomePage.getLayout = (page: ReactElement): ReactNode => (
  <MainLayout gradient={['#4FDAB8', '#52C7EA']}>{page}</MainLayout>
);

export default HomePage;
