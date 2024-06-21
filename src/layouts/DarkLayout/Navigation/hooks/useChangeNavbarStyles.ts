import { useEffect, useState } from 'react';

const baseVariables = {
  '--navbar-bg': '#19374C',
  '--navbar-text': 'white',
};

type CSSVariable = `--${string}`;
const useChangeNavbarStyles = (): Record<CSSVariable, string> => {
  const [cssVariables, setOpacity] = useState(baseVariables);

  useEffect(() => {
    const handleScroll = (): void => {
      const currentScrollPos = window.scrollY;
      const newVariables =
        currentScrollPos > 0
          ? {
              '--navbar-bg': 'white',
              '--navbar-text': 'var(--chakra-colors-brand-800)',
            }
          : baseVariables;

      setOpacity(newVariables);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return cssVariables;
};

export default useChangeNavbarStyles;
