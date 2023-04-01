import { FunctionComponent } from 'react';
import { Box, Container, Heading, useTheme } from '@chakra-ui/react';

import HeroLinearGradient from '@assets//images/hero-linear-gradient.png';
import Messenger from '@root/components/Messenger';
import RotatingText from '@root/components/RotatingText';

const Hero: FunctionComponent = () => {
  const { gradients } = useTheme();

  return (
    <Box bgImage={HeroLinearGradient.src} bgPosition="center bottom" bgRepeat="no-repeat">
      <Container
        variant="section"
        pb={{ base: 10, lg: 16 }}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        height={{ base: 'calc(100vh - 108px)', lg: '50rem' }}
      >
        <Box>
          <Heading as="h1" size="h2" fontWeight="extrabold" textAlign="center">
            What if connecting{' '}
            <Box as="span" bgImage={gradients.primary} bgClip="text">
              <RotatingText
                words={['Kafka', 'InfluxDB', 'services', 'devices', 'anything', 'everything']}
              />
            </Box>{' '}
            was as
            <br />
            <Box as="span" bgImage={gradients.primary} bgClip="text">
              <RotatingText words={['secure', 'simple', 'trusted']} interval={2500} />
            </Box>{' '}
            as conversations with your friends?
          </Heading>
          <Messenger />
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
