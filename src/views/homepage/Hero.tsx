import { FunctionComponent } from 'react';
import { Box, Container, Heading, Text, useTheme } from '@chakra-ui/react';
import styled from 'styled-components';

import Messenger from '@root/components/Messenger';
import RotatingText from '@root/components/RotatingText';

const HeroBox = styled(Box)`
  background: #111;
  background-image: linear-gradient(0deg, rgba(60 '', 40, 40), rgb(10, 10, 10));
  color: white;
  overflow: hidden;
`;

const FlashBox = styled(Box)`
  // &:before {
  //   background-image: radial-gradient(circle at center, #4FDAB8 4.44%, #52C7EA 50%, rgba(0,0,0,0) 95%);
  //   width: 100%;
  //   height: 100%;
  //   position: absolute;
  //   content: "";
  // }

  margin: 100px;
  position: relative;
`;
const Hero: FunctionComponent = () => {
  const { gradients } = useTheme();

  return (
    <HeroBox>
      {/* <Box bgImage={HeroLinearGradient.src} bgPosition="center bottom" bgRepeat="no-repeat"> */}
      <Container
        variant="section"
        pt={{ base: 10, lg: 16 }}
        pb={{ base: 0, lg: 0 }}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Box>
          <Heading as="h1" size="h1" fontWeight="extrabold" textAlign="center" color="white">
            Build{' '}
            <Box as="span" bgImage={gradients.primary} bgClip="text">
              Trust
            </Box>
          </Heading>
          <br />
          <br />
          <Text color="white" align="center">
            Ockam is a suite of open source tools, programming libraries, and managed cloud services
            to orchestrate end-to-end encryption, mutual authentication, key management, credential
            management, and authorization policy enforcement – at massive scale.
          </Text>
          <FlashBox>
            <Heading as="h1" size="h2" fontWeight="extrabold" textAlign="center" color="white">
              What if connecting{' '}
              <RotatingText
                interval={3000}
                delay={0}
                words={['Kafka', 'InfluxDB', 'services', 'devices', 'anything', 'everything']}
                styles={{
                  backgroundImage: gradients.primary,
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                }}
              />
              &nbsp;was as
              <br />
              <RotatingText
                interval={3000}
                delay={1500}
                words={['secure', 'simple', 'trusted']}
                styles={{
                  backgroundImage: gradients.primary,
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                }}
              />
              &nbsp;as conversations with your friends?
            </Heading>
            <br />
            <br />
          </FlashBox>
          <Heading as="h2" size="h2" textAlign="center" color="white">
            Tools for developers to Build Trust for data-in-motion
          </Heading>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Messenger />
        </Box>
      </Container>
    </HeroBox>
  );
};

export default Hero;
