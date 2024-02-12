import { FC, ReactElement, ReactNode } from 'react';
import { Box, Container, Flex, Heading } from '@chakra-ui/react';

import { NextPageWithLayout } from '@typings/NextPageWithLayout';
import MainLayout from '@layouts/MainLayout';
import { Hero, Cases } from '@views/homepage';
import ItsSimple from '@assets/images/its-simple-with.svg';
import AndIts from '@assets/images/and-its.svg';
import RotatingText from '@root/components/RotatingText';

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
          you no longer need to{' '}
          <RotatingText
            interval={3000}
            delay={4000}
            words={['punch holes in your firewall', 'wait on your IT department']}
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

const HomePage: NextPageWithLayout = () => (
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
    <Cases />
  </Box>
);

HomePage.getLayout = (page: ReactElement): ReactNode => (
  <MainLayout gradient={['#4FDAB8', '#52C7EA']}>{page}</MainLayout>
);

export default HomePage;
