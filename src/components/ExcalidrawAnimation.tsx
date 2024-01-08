import { Box } from '@chakra-ui/react';
import {
  ComponentType,
  FunctionComponent,
  ReactElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useInView } from 'react-intersection-observer';

type SvgProps = {
  style: {};
};
const SvgAnimation = ({
  name,
  onLoad,
  hero,
}: {
  name: string;
  onLoad: Function;
  hero?: boolean;
}): ReactElement => {
  const ImportedSvgRef = useRef(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const importSvg = async (): Promise<void> => {
      try {
        const a = await import(`../assets/animations/${name}.svg`);
        const { default: namedImport } = a;

        ImportedSvgRef.current = namedImport;
      } finally {
        setLoading(false);
        onLoad();
      }
    };
    importSvg();
  }, [name, onLoad]);

  if (!loading && ImportedSvgRef.current) {
    const { current: ImportedSvg }: { current: ComponentType<SvgProps> | null } = ImportedSvgRef;
    if (ImportedSvg)
      return (
        <ImportedSvg
          style={{
            display: 'block',
            width: hero ? 'auto' : '100%',
            height: hero ? '100%' : '100%',
            margin: '15px auto',
            paddingTop: hero ? '15px' : 'auto',
          }}
        />
      );
    return <></>;
  }
  return <></>;
};

type Props = {
  src: string;
  animate: boolean;
  hero?: boolean;
};
const ExcalidrawAnimation: FunctionComponent<Props> = ({
  src,
  animate,
  hero,
}): ReactElement | null => {
  const ref = useRef<HTMLDivElement>();
  const [svg, setSvg] = useState<SVGSVGElement>();

  const [scrollPosition, setScrollPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isPlayable, setIsPlayable] = useState(false);

  const handleScroll = (): void => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  const { ref: inViewRef } = useInView({
    threshold: 0.5,
    onChange: (inView) => {
      if (!animate) return;
      setIsVisible(inView);
    },
  });

  const setRefs = useCallback(
    (node: HTMLDivElement) => {
      ref.current = node;
      inViewRef(node);
    },
    [inViewRef],
  );

  const waitForElm = (selector: string, root?: Document | Element): Promise<Element | null> =>
    new Promise((resolve) => {
      const searchBase = root || document;
      if (searchBase.querySelector(selector)) {
        resolve(searchBase.querySelector(selector));
      }

      const observer = new MutationObserver(() => {
        if (searchBase.querySelector(selector)) {
          observer.disconnect();
          resolve(searchBase.querySelector(selector));
        }
      });

      observer.observe(searchBase, {
        childList: true,
        subtree: true,
      });
    });

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const svgLoaded = useCallback(async (): Promise<void> => {
    if (ref.current) {
      const s = (await waitForElm('svg', ref.current)) as SVGSVGElement;
      if (s) {
        setSvg(s);
        s.setCurrentTime(0);
        if (!animate) {
          const steps = s.querySelectorAll('animate');
          if (steps && steps.length > 0) {
            const lastStep = steps[steps.length - 1];
            s.setCurrentTime(
              parseFloat(lastStep.getAttribute('begin') || '0') +
                parseFloat(lastStep.getAttribute('delay') || '0'),
            );
          }
        }
        s.pauseAnimations();
      }
    }
  }, [animate]);

  useEffect(() => {
    if (!svg) return;
    if (animate) {
      if (isPlayable) {
        svg.unpauseAnimations();
      } else {
        svg.pauseAnimations();
      }
    } else {
      svg.pauseAnimations();
    }
  }, [svg, animate, isPlayable]);

  useEffect(() => {
    if (!animate) return;
    if (isVisible && scrollPosition > 300) {
      setIsPlayable(true);
    } else {
      setIsPlayable(false);
    }
  }, [scrollPosition, isVisible, animate]);

  return (
    <Box
      className="excalidraw-animation"
      ref={setRefs}
      flexDirection="column"
      h={{
        base: hero ? '80vh' : '100%',
      }}
      w="100%"
      backgroundClip="white"
      pt="15px"
      maxH={{
        base: hero ? '80vh' : '50vh',
        lg: 'min-content',
        xl: 'min-content',
      }}
      boxSizing={hero ? 'border-box' : 'content-box'}
    >
      <SvgAnimation name={src} onLoad={svgLoaded} hero={hero} />
    </Box>
  );
};

export default ExcalidrawAnimation;
