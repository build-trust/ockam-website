import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { MutableRefObject, useEffect } from 'react';

const setMaxHeightBasedOnOffset =
  (ref: MutableRefObject<HTMLElement | undefined>, condition: boolean): (() => void) =>
  () => {
    if (!condition) {
      ref?.current?.style.removeProperty('maxHeight');
      return;
    }
    const viewportOffset = ref?.current?.getBoundingClientRect();
    if (ref?.current && !!viewportOffset) {
      // eslint-disable-next-line no-param-reassign
      ref.current.style.maxHeight = `calc(100vh - ${viewportOffset?.top}px)`;
    }
  };

const useSetFullMaxHeightReducedByTopOffset = (
  ref: MutableRefObject<HTMLDivElement | undefined>,
  condition = true
): void => {
  useScrollPosition(setMaxHeightBasedOnOffset(ref, condition), [ref, condition]);
  useEffect(() => setMaxHeightBasedOnOffset(ref, condition), [ref, condition]);
};

export default useSetFullMaxHeightReducedByTopOffset;
