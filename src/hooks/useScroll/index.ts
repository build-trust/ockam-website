import { useEffect, useState, useRef, useCallback, RefObject, useMemo } from 'react';

const useScroll = (
  offset = 0,
  reset = false,
  outsideRef: RefObject<HTMLDivElement> = { current: null }
): { ref?: RefObject<HTMLDivElement>; isScrolled: boolean } => {
  const [isScrolled, setScroll] = useState(false);
  const internalRef = useRef<HTMLDivElement>(null);
  const ref = useMemo(() => outsideRef || internalRef, [outsideRef, internalRef]);

  const memoHandleScroll = useCallback(() => {
    if (!isScrolled && ref?.current) {
      setScroll(window.pageYOffset > ref.current.getBoundingClientRect().top + offset);
    } else {
      setScroll(true);
    }

    if (reset && ref?.current) {
      if (window.pageYOffset === ref.current.getBoundingClientRect().top) setScroll(false);
    }
  }, [isScrolled, offset, reset, ref]);

  useEffect(() => {
    window.addEventListener('scroll', memoHandleScroll);

    return (): void => window.removeEventListener('scroll', memoHandleScroll);
  }, [memoHandleScroll]);

  return {
    ref,
    isScrolled,
  };
};

export default useScroll;
