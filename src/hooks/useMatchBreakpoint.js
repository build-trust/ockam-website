import { useEffect, useState } from 'react';

import { BREAKPOINTS } from '../utils/rwd';

function useMatchBreakpoint(breakpoint) {
  const isClient = typeof window === 'object';
  const mql =
    isClient && window.matchMedia(`(min-width: ${BREAKPOINTS[breakpoint]}px)`);

  const [matchBreakpoint, setMatchBreakpoint] = useState(mql && mql.matches);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (!isClient) return undefined;
    mql.onchange = e => setMatchBreakpoint(e.matches);
  }, [mql, isClient]); // Empty array ensures that effect is only run on mount and unmount

  if (!isClient) return undefined;
  return matchBreakpoint;
}

export default useMatchBreakpoint;
