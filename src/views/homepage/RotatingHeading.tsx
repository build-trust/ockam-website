import { FC, ReactNode } from 'react';
import { As, Box, Heading, ResponsiveValue, useTheme } from '@chakra-ui/react';

import RotatingText from '@root/components/RotatingText';

type Props = {
  text?: string;
  size?: ResponsiveValue<(string & {}) | '3xl' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'xs' | '4xl'>;
  as?: As;
};
const RotatingHeading: FC<Props> = ({ text, size, as }) => {
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
    if (text && rotatingWords().length > 0) {
      const parts = text.split(re);
      return parts.map((p, ix) => {
        if (ix === 1) {
          return (
            <RotatingText
              key={rotatingWords().join()}
              interval={3000}
              delay={4000}
              words={rotatingWords()}
              styles={{
                backgroundImage: gradients.dark,
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                paddingLeft: '0.1em',
                paddingRight: '0.1em',
                textWrap: 'nowrap',
              }}
            />
          );
        }
        return p;
      });
    }
    return text;
  };

  return (
    <Box mb={10}>
      <Heading
        as={as || 'h1'}
        fontSize={size || { base: '2em', sm: '3em', md: '3em', lg: '3em' }}
        fontWeight="medium"
        textAlign="center"
        color="rgba(255, 255, 255, 0.8)"
        letterSpacing="-0.08em"
        lineHeight={{ base: 1, lg: 1.2 }}
        mx="auto"
        style={{ textWrap: 'balance' }}
        maxW="20em"
      >
        {message()}
      </Heading>
    </Box>
  );
};

export default RotatingHeading;
