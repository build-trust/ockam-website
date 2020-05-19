import { useEffect } from 'react';

const isRefContainTarget = (ref, event) =>
  !ref.current || ref.current.contains(event.target);

const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = event => {
      if (Array.isArray(ref)) {
        const isInside = ref.find(item => isRefContainTarget(item, event));
        if (!isInside) handler(event);
        return;
      }
      if (isRefContainTarget(ref, event)) {
        return;
      }
      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
};

export default useOnClickOutside;
