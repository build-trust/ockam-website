import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { useState } from 'react';

import isNotEmptyArray from '../utils/isNotEmptyArray';

const useActiveHashInViewport = (hashes = []) => {
  const [activeViewportHash, setActiveViewportHash] = useState();
  useScrollPosition(() => {
    if (isNotEmptyArray(hashes)) {
      setActiveViewportHash(null);
      return;
    }
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;
    const elements = hashes.map(hash => document.querySelector(hash));
    const activeEl = elements.find((item, index) => {
      const rect = item.getBoundingClientRect();
      const vertInView =
        rect.top <= windowHeight && rect.top + rect.height >= 0;
      if (!vertInView) {
        const nextEl = elements[index + 1];
        if (nextEl) {
          const rectNext = nextEl.getBoundingClientRect();
          return rectNext.top + rect.height > windowHeight / 2;
        }
      }
      return vertInView;
    });

    if (activeEl) {
      setActiveViewportHash(`#${activeEl.getAttribute('id')}`);
    }
  });
  return activeViewportHash;
};

export default useActiveHashInViewport;
