import { useEffect, useRef } from 'react';

type VoidCallback = () => void;

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type, @typescript-eslint/no-explicit-any
const useEffectOnce = (callback: () => VoidCallback | undefined, deps: any[] = []) => {
  const mounted = useRef(false);
  const unmountCallbackRef = useRef<VoidCallback>();

  useEffect(() => {
    if (!mounted.current) {
      unmountCallbackRef.current = callback();
      mounted.current = true;
    }

    return unmountCallbackRef.current;
  }, deps);
};

export default useEffectOnce;
