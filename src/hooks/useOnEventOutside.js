import { useEffect } from 'react';

const isRefContainTarget = (ref, event) =>
  ref && (!ref.current || ref.current.contains(event.target));

const useOnEventOutside = (ref, handler, eventName = 'click') => {
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

    document.addEventListener(eventName, listener);
    if (eventName === 'click') {
      document.addEventListener('touchstart', listener);
    }

    return () => {
      document.removeEventListener(eventName, listener);
      if (eventName === 'click') {
        document.removeEventListener('touchstart', listener);
      }
    };
  }, [ref, handler, eventName]);
};

export default useOnEventOutside;
