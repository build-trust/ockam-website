// @ts-nocheck
/* eslint-disable  */
type Checkpoint = {
  [key: string]: number;
};

/*
 * Throttle function borrowed from:
 * Underscore.js 1.5.2
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 */
function throttle(func, wait) {
  var context, args, result;
  var timeout = null;
  var previous = 0;
  var later = function () {
    previous = new Date();
    timeout = null;
    result = func.apply(context, args);
  };
  return function () {
    var now = new Date();
    if (!previous) previous = now;
    var remaining = wait - (now - previous);
    context = this;
    args = arguments;
    if (remaining <= 0) {
      clearTimeout(timeout);
      timeout = null;
      previous = now;
      result = func.apply(context, args);
    } else if (!timeout) {
      timeout = setTimeout(later, remaining);
    }
    return result;
  };
}

const findMaxCheckpoint = (checkpoints: Checkpoint[], depth: number): string | void => {
  const match = checkpoints.findLast((check) => {
    const point = Object.values(check)[0];
    return depth > point;
  });
  if (match) {
    return Object.keys(match)[0];
  }
};
const trackScrollDepth = (): void => {
  const minHeight = 100;
  const docHeight = document.documentElement.scrollHeight;
  if (docHeight < minHeight) return;
  const scrollTop = window.scrollY;
  const checkpoints: Checkpoint[] = [
    { '25%': Math.round(docHeight * 0.25) },
    { '33%': Math.round(docHeight * 0.33) },
    { '50%': Math.round(docHeight * 0.5) },
    { '66%': Math.round(docHeight * 0.66) },
    { '75%': Math.round(docHeight * 0.75) },
    { '100%': docHeight - window.innerHeight - 10 },
  ];
  const point = findMaxCheckpoint(checkpoints, scrollTop);
  if (point) {
    const analytics = (window.analytics = window?.analytics || []);
    analytics.track('Scroll Percentage', {
      category: 'Scroll Depth',
      label: point,
      eventNonInteraction: 1,
    });
  }
};

const bindScrollDepth = (): void => {
  if (typeof window !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
      document.addEventListener('scroll', throttle(trackScrollDepth, 500));
    });
  }
};

export default bindScrollDepth;
