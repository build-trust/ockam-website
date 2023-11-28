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
const SvgAnimation = ({ name, onLoad }: { name: string; onLoad: Function }): ReactElement => {
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
            width: '100%',
            height: '100%',
            overflow: 'visible',
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
};
const ExcalidrawAnimation: FunctionComponent<Props> = ({ src, animate }): ReactElement | null => {
  const ref = useRef<HTMLDivElement>();
  const [svg, setSvg] = useState<SVGSVGElement>();

  const [scrollPosition, setScrollPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isPlayable, setIsPlayable] = useState(false);

  // const animationTimerRef = useRef<NodeJS.Timeout | undefined>()

  // const stepForwardAnimations = useCallback((): void => {
  //     // const beginTimeList: number[] = [1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000, 5500, 6000, 6500, 7000, 7500, 8000, 8500, 9000, 9500, 10000, 10500, 11000]
  //     if (svg) {
  //         // const currentTime = svg.getCurrentTime() * 1000;
  //         // let nextTime = beginTimeList.find((t) => t > currentTime + 50) || 0;
  //         // if (nextTime) {
  //         //     nextTime -= 1;
  //         // } else {
  //         //     nextTime = currentTime + 500;
  //         // }
  //         // console.log('nextTime ', nextTime)
  //         // if (animationTimerRef.current) {
  //         //     clearTimeout(animationTimerRef.current);
  //         //     animationTimerRef.current = undefined
  //         // }
  //         svg.unpauseAnimations();
  //         // const pause = (nextTime - currentTime)
  //         // console.log("pause ", pause)
  //         // animationTimerRef.current = setTimeout(() => {
  //         //     console.log('timeout')
  //         //     clearTimeout(animationTimerRef.current);
  //         //     svg.pauseAnimations();
  //         //     //svg.setCurrentTime(nextTime / 1000);
  //         //     stepForwardAnimations()
  //         // }, pause);
  //     }
  // }, [svg])

  // const resetAnimations = (): void => {
  //     svg.setCurrentTime(0);
  // }

  const handleScroll = (): void => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  const { ref: inViewRef } = useInView({
    threshold: 0.65,
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
    <div
      className="excalidraw-animation"
      ref={setRefs}
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        background: 'white',
        paddingTop: '15px',
      }}
    >
      <SvgAnimation name={src} onLoad={svgLoaded} />
    </div>
  );
};

export default ExcalidrawAnimation;
