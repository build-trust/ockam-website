import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { useState } from 'react';
import isArray from 'lodash/isArray';

const isNotEmptyArray = (arr:string[]): boolean => arr.length === 0 || !isArray(arr);

const useActiveHashInViewport = (hashes: string[] = []): string | null => {
  const [activeViewportHash, setActiveViewportHash] = useState<string | null>(null);
  useScrollPosition(() => {
    if (isNotEmptyArray(hashes)) {
      setActiveViewportHash(null);
      return;
    }
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;
    const elements = hashes
      .filter(item => item)
      .map(hash => document.getElementById(hash.substring(1)));
    const activeEl = elements
      .filter(item => item)
      .find((item, index) => {
        if(!item) return false;
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
