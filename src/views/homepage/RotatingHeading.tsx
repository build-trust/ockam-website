import { FC, ReactNode } from 'react';
import { Box, Heading, useTheme } from '@chakra-ui/react';

import RotatingText from '@root/components/RotatingText';

type Props = {
  text?: string;
};
const RotatingHeading: FC<Props> = ({ text }) => {
  const { gradients } = useTheme();
  const re = /<(.+)>/;

  const rotatingWords = (): string[] => {
    if (text && text.match(re)) {
      const matched = text.match(re);
      // @ts-ignore
      return matched[1].split('|');
    }
    return [];
  };

  const message = (): ReactNode => {
    if (rotatingWords().length > 0) {
      const parts = text.split(re);
      return parts.map((p, ix) => {
        if (ix === 1) {
          return (
            <RotatingText
              interval={3000}
              delay={4000}
              words={rotatingWords()}
              styles={{
                backgroundImage: gradients.dark,
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            />
          );
        }
        return p;
      });
      return parts.join();
    }
    return text;
  };

  return (
    <Box mb={10}>
      <Heading
        as="h1"
        size={{ base: 'md', lg: 'h2' }}
        fontWeight="medium"
        textAlign="center"
        color="rgba(255, 255, 255, 0.8)"
        letterSpacing="-0.08em"
        lineHeight={{ base: 1, lg: 1.2 }}
        maxW="15em"
        mx="auto"
        style={{ textWrap: 'balance' }}
      >
        {message()}
      </Heading>
    </Box>
  );
};

export default RotatingHeading;
