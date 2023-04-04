import { FunctionComponent } from 'react';
import { Box, Button, Container, Heading, useTheme } from '@chakra-ui/react';
import styled from 'styled-components';

import Messenger from '@root/components/Messenger';
import RotatingText from '@root/components/RotatingText';

const HeroBox = styled(Box)`
  &:before {
    content: '';
    background: rgb(10, 10, 10);
    background-image: linear-gradient(0deg, rgb(40, 40, 40), rgb(10, 10, 10));
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
  color: white;
  overflow: hidden;
  position: relative;
`;

const Hero: FunctionComponent = () => {
  const { gradients } = useTheme();

  return (
    <HeroBox>
      <Container
        variant="section"
        pt={{ base: 10, lg: 16 }}
        pb={{ base: 0, lg: 0 }}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Box>
          <Heading
            as="h1"
            size="h1"
            fontWeight="extrabold"
            textAlign="center"
            color="white"
            my={16}
          >
            Build{' '}
            <Box as="span" bgImage={gradients.primary} bgClip="text">
              Trust
            </Box>
          </Heading>

          <Box>
            <Heading as="h1" size="h2" fontWeight="extrabold" textAlign="center" color="white">
              What if connecting{' '}
              <RotatingText
                interval={3000}
                delay={4000}
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
                interval={4000}
                delay={8000}
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
          </Box>

          <Box textAlign="center" my={20}>
            <Button
              mx={6}
              color="rgb(40, 40, 40)"
              border="1px solid white"
              _hover={{
                backgroundColor: 'rgb(10, 10, 10)',
                color: 'white',
              }}
            >
              Start Building
            </Button>
            <Button
              position="relative"
              borderWidth={2}
              borderStyle="solid"
              borderColor="transparent"
              backgroundColor="rgb(10, 10, 10)"
              backgroundClip="padding-box"
              _before={{
                content: "''",
                backgroundImage: gradients.primary,
                borderRadius: '4px',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: -1,
                margin: '-2px',
                boxShadow: '0 0 50px 0px #52c7ea',
              }}
              _hover={{
                backgroundImage: gradients.primary,
                borderColor: 'rgb(10, 10, 10)',
                color: 'rgb(10, 10, 10)',
              }}
              _active={{
                backgroundImage: `${gradients.primary}`,
                color: 'white',
                boxShadow: '0 0 60px 10px #52c7ea',
              }}
              _focus={{
                backgroundImage: `${gradients.primary}`,
                color: 'white',
                boxShadow: '0 0 60px 10px #52c7ea',
              }}
            >
              Get a Demo
            </Button>
          </Box>

          <Heading as="h3" size="h3" textAlign="center" color="white" my={40}>
            Tools for developers to Build Trust for data-in-motion
          </Heading>

          <Messenger />
        </Box>
      </Container>
    </HeroBox>
  );
};

export default Hero;
