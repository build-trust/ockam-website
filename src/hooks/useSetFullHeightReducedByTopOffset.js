import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { useEffect } from "react";

const setHeightBasedOnOffset = (ref, condition) => () => {
  if(!condition) {
    ref.current.style.removeProperty('height');
    return;
  }
  const viewportOffset = ref.current.getBoundingClientRect();
  // eslint-disable-next-line no-param-reassign
  ref.current.style.height = `calc(100vh - ${viewportOffset.top}px)`;
};

/**
 * Reat hook to set up full viewport height in element, reduced by offset from top of the page.
 * Useful when want to set height for element and fill rest of the viewport reduced by ie. top bar menu.
 * @param ref {object} - reference to element
 * @param condition {boolean} - condition whether make calculation and set height ( helpful ie. for mobile view )
 */
const useSetFullHeightReducedByTopOffset = (ref, condition = true) => {
  useScrollPosition(setHeightBasedOnOffset(ref, condition), [ref, condition]);
  useEffect(setHeightBasedOnOffset(ref, condition), [ref, condition]);
};

export default useSetFullHeightReducedByTopOffset;
