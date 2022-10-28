import { useState } from 'react';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import isArray from 'lodash/isArray';

const useActiveHashInViewport = (hashes: string[] = []): string | null => {
  const [activeViewportHashId, setActiveViewportHashId] = useState<string | null>(null);

  useScrollPosition(() => {
    if (hashes.length === 0 || !isArray(hashes)) {
      setActiveViewportHashId(null);
      return;
    }
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    const elements = hashes.filter((item) => item).map((hash) => document.getElementById(hash));

    const activeEl = elements
      .filter((item) => item)
      .find((item, index) => {
        if (!item) return null;

        const rect = item.getBoundingClientRect();
        const vertInView = rect.top <= windowHeight && rect.top + rect.height >= 0;

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
      setActiveViewportHashId(activeEl.getAttribute('id'));
    }
  });

  return activeViewportHashId;
};

export default useActiveHashInViewport;
