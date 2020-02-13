import React, {useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import useIsInViewport from "use-is-in-viewport";
import { useSpring, a } from 'react-spring'


const AnimateOnScroll = ({ children, animateOnce, opacity, transformY, threshold, delay }) => {
  const targetRef = useRef(null);
  const [isVisibleOnce, setIsVisibleOnce] = useState(null);
  const [isInViewport, wrappedTargetRef] = useIsInViewport({ threshold, target: targetRef });

  const showOnce = isVisibleOnce && animateOnce;
  const showTransformY = (isInViewport || !transformY) || showOnce;
  const showOpacity = (isInViewport || !opacity) || showOnce;
  const props = useSpring({
    from: { opacity: 0, transform: `translate3d(0,200px,0)` },
    to: { opacity: showOpacity ? 1 : 0, transform: `translate3d(0,${showTransformY ? 0 : 200}px,0)` },
    delay,
  });

  useEffect(() => {
    if(isVisibleOnce) return;
    if(isInViewport === true) setIsVisibleOnce(true);
  },[isInViewport, isVisibleOnce, animateOnce]);

  return (
    <div ref={wrappedTargetRef}>
      <a.div style={props}>
        {children}
      </a.div>
    </div>
  );
};

AnimateOnScroll.propTypes = {
  delay: PropTypes.number,
  threshold: PropTypes.number,
  opacity: PropTypes.bool,
  transformY: PropTypes.bool,
  animateOnce: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,

};

AnimateOnScroll.defaultProps = {
  delay: 200,
  threshold: 20,
  opacity: true,
  transformY: false,
  animateOnce: true,
};

export default AnimateOnScroll;
