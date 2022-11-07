import React, { FC, ReactNode, useRef } from 'react';
import { animated, useSpring } from 'react-spring';

import useEffectOnce from '@root/hooks/useEffectOnce';

type AnimationState = {
  opacity: number;
  y: number;
};

type TransitionProps = {
  initialState?: AnimationState;
  finalState?: AnimationState;
  duration?: number;
  delay?: number;
  children: ReactNode;
};

const Transition: FC<TransitionProps> = ({
  children,
  duration = 200,
  delay = 100,
  initialState = { opacity: 0, y: 25 },
  finalState = { opacity: 1, y: 0 },
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [transitions, animation] = useSpring(() => ({
    config: {
      duration,
    },
    opacity: initialState.opacity,
    y: initialState.y,
  }));

  useEffectOnce(() => {
    if (typeof window !== 'undefined') {
      observerRef.current = new IntersectionObserver((entries) => {
        const [entry] = entries;

        if (entry.isIntersecting) {
          animation.start({ opacity: finalState.opacity, y: finalState.y, delay });
          observerRef.current?.disconnect();
        }
      });

      observerRef.current?.observe(ref.current as Element);
    }

    return () => {
      observerRef.current?.disconnect?.();
    };
  }, [animation, delay, finalState.opacity, finalState.y, initialState.opacity, initialState.y]);

  return (
    <animated.div ref={ref} style={{ ...transitions }}>
      {children}
    </animated.div>
  );
};
export default Transition;