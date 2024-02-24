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

const mdxSerialize = async (content: string): Promise<MDXRemoteSerializeResult> => {
  const result = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [RemarkGFM, RemarkPrism],
    },
  });
  return result;
};

const Networkless: FC = () => (
  <Container variant="section" mb="12">
    <Flex direction="column" alignItems="flex-start" justifyContent="space-between" width="100%">
      <Box
        width={{ base: '70%', sm: '33%' }}
        marginLeft={{ base: '30%', sm: '70%', md: '50%', lg: '50%' }}
        height="180px"
      >
        <ItsSimple width="100%" preserveAspectRatio="xMinYMin meet" />
      </Box>
      <Box flexGrow="1" mt={{ sm: '-20%', md: '-5%', lg: '0' }}>
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
  <Container variant="section" style={{ clear: 'both' }}>
    <Flex direction="row" alignItems="flex-start" justifyContent="space-between" width="100%">
      <Box width={{ base: '100%', sm: '53%' }} ml={{ base: '0', sm: '10%', md: '10%', lg: '25%' }}>
        <AndIts width="100%" preserveAspectRatio="xMinYMin meet" />
      </Box>

      <Box
        flexGrow="1"
        pt="160px"
        ml={{ base: '0', sm: '8' }}
        mt={{ base: '-25%', sm: '-15%', md: '-10%', lg: '-5%' }}
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
  <Box pt={{ base: 0 }}>
    <Hero subtext="Between your platform and every <Application|Database|Repo|Agent|SaaS|Datalake> everywhere" />
    <Box
      pt={{ base: 4, lg: 4 }}
      pb={{ base: 20, lg: 24 }}
      boxShadow="2xl"
      borderRadius="15"
      borderStyle="none"
      background="white"
      maxW="container.max"
      mx={{ base: 0, xl: 'auto' }}
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
The magical thing about Ockam - it is built around application layer protocols that abstract away the setup, management, and security of the network layer. When application connectivity and security is decoupled from your network, you no longer need to wait for your IT team to give you permissions to build connections.`),
        },

        {
          image: 'virtual-adjacency',
          title: 'Virtual Adjacency',
          mdx: await mdxSerialize(`
When you have two applications running in two different networks, and they need to share data with each other, the classic way to set this up would be to connect networks or use VPNs, reverse proxies, maybe a platform specific solution like PrivateLink. There are many ways that you could do this at the network layer.  
          
Ockam is at the application layer. This is a fundamental paradigm shift in how you can think about moving data and connecting applications. Because in this scenario, what we are doing is we're moving these applications so that they sit virtually next to each other. That means applications are available to each other on \`localhost\` in a peer-to-peer way. Applications appear to each other like they're sitting next to each other in the same box! And what we don't have to do in this scenario is change any of the network layer configurations or really need to understand anything and the network at all. In this way we say Ockam is networkless.`),
        },
      ],
    },
  };
}

HomePage.getLayout = (page: ReactElement): ReactNode => (
  <MainLayout gradient={['#4FDAB8', '#52C7EA']}>{page}</MainLayout>
);

export default HomePage;
