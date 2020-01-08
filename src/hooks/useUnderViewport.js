import { useState } from 'react';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

const useUnderViewport = (ref, onChangeToHidden = () => {}, onChangeToVisible = () => {}) => {
  const [isUnderViewport, setIsUnderViewport] = useState(false);
  const [elementHeight, setElementHeight] = useState(null);

  const makeCollapsed = ({ prevPos, currPos }) => {
    if (!ref || !ref.current) return;

    const viewportOffset = ref.current.getBoundingClientRect();
    setElementHeight(viewportOffset.height);
    const currentIsUnderViewport = viewportOffset.height + currPos.y < 0;
    if (currentIsUnderViewport !== isUnderViewport) {
      if (prevPos.y > currPos.y) onChangeToVisible(viewportOffset.height);
      else onChangeToHidden(viewportOffset.height);
    }
    setIsUnderViewport(viewportOffset.height + currPos.y < 0);
  };
  useScrollPosition(makeCollapsed, [ref]);
  return [ isUnderViewport, elementHeight];
};

export default useUnderViewport;
