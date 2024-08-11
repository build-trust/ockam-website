import { FC, ReactNode } from 'react';
import { As, Box, Heading, useTheme } from '@chakra-ui/react';

import RotatingText from '@root/components/RotatingText';

type Props = {
  text?: string;
  as?: As;
  color?: string;
};

const RotatingHeading: FC<Props> = ({ text, as, ...rest }) => {
  const { gradients } = useTheme();
  const re = /<(.+)>/;

  const rotatingWords = (): string[] => {
    if (text && text.match(re)) {
      const matched = text.match(re);
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
      <Heading size="h2" as={as || 'h1'} variant={`dynamicSize${as || 'h1'}`} {...rest}>
        {message()}
      </Heading>
    </Box>
  );
};

export type { Props };
export default RotatingHeading;
