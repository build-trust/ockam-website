import { css } from '@emotion/core';

import { BREAKPOINTS, matchBreakpoint, matchBreakpointDown } from './rwd';

export const matchMedia = Object.keys(BREAKPOINTS).reduce(
  (accumulator, label) => {
    accumulator[label] = (...args) => {
      if (matchBreakpoint(label)) {
        return args[0];
      }
      return {};
    };
    return accumulator;
  },
  {}
);

export const matchMediaDown = Object.keys(BREAKPOINTS).reduce(
  (accumulator, label) => {
    accumulator[label] = (...args) => {
      if (matchBreakpointDown(label)) {
        return args[0];
      }
      return {};
    };
    return accumulator;
  },
  {}
);

export const media = Object.keys(BREAKPOINTS).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (min-width: ${BREAKPOINTS[label]}px) {
      ${css(...args)};
    }
  `;
  accumulator[label].down = (...args) => css`
    @media (min-width: ${BREAKPOINTS[label] - 1}px) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});
