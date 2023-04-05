import { FC } from 'react';
import { Box, Heading, useTheme } from '@chakra-ui/react';

import RotatingText from '@root/components/RotatingText';

const RotatingHeading: FC = () => {
  const { gradients } = useTheme();
  return (
    <Box my={30}>
      <Heading
        as="h1"
        size={{ base: 'md', lg: 'h2' }}
        fontWeight="extrabold"
        textAlign="center"
        color="white"
        lineHeight={{ base: 1, lg: 2 }}
      >
        What if connecting{' '}
        <RotatingText
          interval={3000}
          delay={4000}
          words={[
            'Kafka',
            'InfluxDB',
            'services',
            'devices',
            'applications',
            'anything',
            'everything',
          ]}
          styles={{
            backgroundImage: gradients.primary,
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
          }}
        />{' '}
        <br />
        was as{' '}
        <RotatingText
          interval={4000}
          delay={8000}
          words={['secure', 'simple', 'trusted', 'private']}
          styles={{
            backgroundImage: gradients.primary,
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
          }}
        />{' '}
        as a conversation
        <br />
        with your&nbsp;friends?
      </Heading>
    </Box>
  );
};
export default RotatingHeading;
