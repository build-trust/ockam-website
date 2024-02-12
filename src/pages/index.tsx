import { FC, ReactElement, ReactNode } from 'react';
import { Box, Container, Flex, Heading, Text } from '@chakra-ui/react';

import { NextPageWithLayout } from '@typings/NextPageWithLayout';
import MainLayout from '@layouts/MainLayout';
import { Hero, GetStarted, Cases } from '@views/homepage';
import ItsSimple from '@assets/images/its-simple-with.svg';
import AndIts from '@assets/images/and-its.svg';
import RotatingText from '@root/components/RotatingText';

const Networkless: FC = () => (
  <Container variant="section" mb="12">
    <Flex direction="column" alignItems="flex-start" justifyContent="space-between" width="100%">
      <Box width="350px" marginLeft="50%" height="180px">
        <ItsSimple width="100%" preserveAspectRatio="xMinYMin meet" />
      </Box>
      <Box flexGrow="1">
        <Heading as="h2" size="h2" lineHeight={1.3} mb={{ base: 6, lg: 8 }} letterSpacing="-2px">
          Networkless connectivity
        </Heading>
        <Text>Ockam works at the application layer.</Text>
        <Text>
          When application security is decoupled from your network, <br />
          you no longer need to ...
        </Text>
      </Box>
    </Flex>
  </Container>
);

const SecureByDesign: FC = () => (
  <Container variant="section" style={{ clear: 'both' }}>
    <Flex direction="row" alignItems="flex-start" justifyContent="space-between" width="100%">
      <Box width="33%" ml="15%">
        <AndIts width="100%" preserveAspectRatio="xMinYMin meet" />
      </Box>

      <Box flexGrow="1" pt="160px" ml="8">
        <Heading as="h2" size="h2" lineHeight={1.3} mb={{ base: 6, lg: 8 }} letterSpacing="-2px">
          Secure-by-design
        </Heading>
        <Text>
          Ockam is{' '}
          <RotatingText
            interval={3000}
            delay={4000}
            words={['audited', 'point-to-point', 'open source', 'zero trust']}
          />
          .
        </Text>
        <Text>So your applications can be secure too.</Text>
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
      mx="auto"
    >
      <Networkless />
      <SecureByDesign />
    </Box>
    <Cases />
    <GetStarted />
  </Box>
);

HomePage.getLayout = (page: ReactElement): ReactNode => (
  <MainLayout gradient={['#4FDAB8', '#52C7EA']}>{page}</MainLayout>
);

export default HomePage;
