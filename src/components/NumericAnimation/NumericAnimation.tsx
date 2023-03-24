import React, { FC, useRef } from 'react';
import { animated, useSpring, config } from 'react-spring';
import { Box, useTheme } from '@chakra-ui/react';
import styled from '@emotion/styled';

import useEffectOnce from '@root/hooks/useEffectOnce';

type NumericAnimationProps = {
  number: string | number;
};

const AnimatedContainer = styled(animated.div)`
  position: relative;
  height: 120px;
  overflow: auto;
  overflow-y: hidden;
  font-size: 120px;
`;

const NumericAnimation: FC<NumericAnimationProps> = ({ number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const { gradients } = useTheme();

  const [transitionFast, animationFast] = useSpring(() => ({
    delay: 300,
    immediate: false,
    from: { scroll: 0 },
    config: config.molasses,
    reset: false,
  }));

  const [transitionSlow, animationSlow] = useSpring(() => ({
    delay: 300,
    immediate: false,
    from: { scroll: 0 },
    config: config.slow,
    reset: false,
  }));

  useEffectOnce(() => {
    if (typeof window !== 'undefined') {
      observerRef.current = new IntersectionObserver((entries) => {
        const [entry] = entries;

        if (entry.isIntersecting) {
          animationFast.start({ scroll: (7 - 1) * 120 });
          animationSlow.start({ scroll: (7 - 1) * 120 });
          observerRef.current?.disconnect();
        }
      });

      observerRef.current?.observe(ref.current as Element);
    }

    return () => {
      observerRef.current?.disconnect?.();
    };
  }, [animationFast, animationSlow]);

  const numberArray = Array.from(String(number), Number);

  return (
    <Box display="flex">
      {numberArray.map((num, index) => {
        if (Number.isNaN(num)) {
          return (
            <Box height="120px" fontSize="120px" key={`${index + 1}`} bg={gradients.primary}
            bgClip="text">
              .
            </Box>
          );
        }
        return (
          <AnimatedContainer
            key={`${index + 1}`}
            ref={ref}
            scrollTop={
              index === numberArray.length - 1 ? transitionFast.scroll : transitionSlow.scroll
            }
          >
            {[1, 2, 3, 4, 5, 6, num].map((elem, i) => (
              <Box
                key={`${elem}_${i + 1}`}
                width="100%"
                height="100%"
                textAlign="center"
                bg={gradients.primary}
                bgClip="text"
              >
                {elem}
              </Box>
            ))}
          </AnimatedContainer>
        );
      })}
    </Box>
  );
};

export default NumericAnimation;
