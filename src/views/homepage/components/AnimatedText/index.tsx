import { chakra, Box, BoxProps } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { ReactElement, useEffect, useRef } from 'react';

const variants = {
  initial: { y: -30, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: 30, opacity: 0 },
};

const MotionText = chakra(motion.span, {
  shouldForwardProp: () => true,
});

interface AnimatedTextProps extends Omit<BoxProps, 'transition'> {
  children: string;
}
const AnimatedText = ({ children, ...boxProps }: AnimatedTextProps): ReactElement => {
  const isFirstRender = useRef(false);

  useEffect(() => {
    isFirstRender.current = true;
  }, []);

  return (
    <Box as="span" overflow="hidden" display="inline-flex" alignItems="center">
      <AnimatePresence mode="wait">
        <MotionText
          key={children}
          initial={isFirstRender.current ? 'initial' : false}
          animate="animate"
          exit="exit"
          variants={variants}
          {...boxProps}
        >
          {children}
        </MotionText>
      </AnimatePresence>
    </Box>
  );
};

export default AnimatedText;
