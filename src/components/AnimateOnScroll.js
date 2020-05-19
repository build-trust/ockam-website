import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import useIsInViewport from 'use-is-in-viewport';
import { useSpring, a } from 'react-spring';

const slideInDistance = '200';

const slideInTranslateGenerator = {
  down: {
    from: `translate3d(0,${slideInDistance}px,0)`,
    to: conditions => `translate3d(0,${conditions ? 0 : slideInDistance}px,0)`,
  },
  top: {
    from: `translate3d(0,-${slideInDistance}px,0)`,
    to: conditions => `translate3d(0,${conditions ? 0 : -slideInDistance}px,0)`,
  },
  right: {
    from: `translate3d(${slideInDistance}px,0,0)`,
    to: conditions => `translate3d(${conditions ? 0 : slideInDistance}px,0,0)`,
  },
  left: {
    from: `translate3d(${-slideInDistance}px,0,0)`,
    to: conditions => `translate3d(${conditions ? 0 : -slideInDistance}px,0,0)`,
  },
  none: {
    from: `translate3d(0,0,0)`,
    to: () => `translate3d(0,0,0)`,
  },
};

const AnimateOnScroll = ({
  children,
  animateOnce,
  fadeIn,
  slideIn,
  threshold,
  delay,
  styles,
}) => {
  const targetRef = useRef(null);
  const [isVisibleOnce, setIsVisibleOnce] = useState(null);
  const [isInViewport, wrappedTargetRef] = useIsInViewport({
    threshold,
    target: targetRef,
  });

  const showOnce = isVisibleOnce && animateOnce;
  const showAnimation = isInViewport || showOnce;
  const showFadeIn = showAnimation || !fadeIn;
  const props = useSpring({
    from: { opacity: 0, transform: slideInTranslateGenerator[slideIn].from },
    to: {
      opacity: showFadeIn ? 1 : 0,
      transform: slideInTranslateGenerator[slideIn].to(showAnimation),
    },
    delay,
  });

  useEffect(() => {
    if (isVisibleOnce) return;
    if (isInViewport === true) setIsVisibleOnce(true);
  }, [isInViewport, isVisibleOnce, animateOnce]);

  return (
    <div ref={wrappedTargetRef}>
      <a.div style={{ ...props, ...styles }}>{children}</a.div>
    </div>
  );
};

AnimateOnScroll.propTypes = {
  delay: PropTypes.number,
  threshold: PropTypes.number,
  fadeIn: PropTypes.bool,
  slideIn: PropTypes.oneOf(['none', 'down', 'up', 'left', 'right']),
  animateOnce: PropTypes.bool,
  styles: PropTypes.shape({}),
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

AnimateOnScroll.defaultProps = {
  delay: 200,
  threshold: 20,
  styles: {},
  fadeIn: true,
  slideIn: 'none',
  animateOnce: true,
};

export default AnimateOnScroll;
