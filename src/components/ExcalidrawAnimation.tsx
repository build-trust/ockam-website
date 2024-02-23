import { Box } from '@chakra-ui/react';
import { FunctionComponent, ReactElement, useCallback, useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import SvgAnimation from './SvgAnimation';

type Props = {
  src: string;
  animate: boolean;
  hero?: boolean;
  aspect?: 'width' | 'height';
};
const ExcalidrawAnimation: FunctionComponent<Props> = ({
  src,
  animate,
  hero,
  aspect,
}): ReactElement | null => {
  const ref = useRef<HTMLDivElement>();
  const [svg, setSvg] = useState<SVGSVGElement>();

  const [scrollPosition, setScrollPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isPlayable, setIsPlayable] = useState(false);
  const [isNested, setIsNested] = useState(false);
  const [interval, setInter] = useState<NodeJS.Timer>();

  const handleScroll = (): void => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  const { ref: inViewRef } = useInView({
    threshold: 0.35,
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

  const hasClaymationSteps = useCallback(
    (elem: SVGSVGElement): boolean => elem.querySelectorAll('svg').length > 1,
    [],
  );
  const hasAnimatedDrawings = (elem: SVGSVGElement): boolean =>
    elem.querySelectorAll('animate').length > 0;
  const calculateAnimationDuration = (elem: SVGSVGElement): number => {
    const steps = elem.querySelectorAll('animate');
    if (steps && steps.length > 0) {
      const duration = Math.max(
        ...Array.from(steps).map(
          (step) =>
            parseFloat(step.getAttribute('begin') || '0') +
            parseFloat(step.getAttribute('delay') || '0') +
            parseFloat(step.getAttribute('dur') || '0'),
        ),
      );
      return duration;
    }
    return 0;
  };
  const findScene = useCallback(
    (id: string, s?: SVGSVGElement) => {
      const root = s || svg;
      if (root) {
        if (hasClaymationSteps(root)) return root.getElementById(id) as SVGSVGElement;
        if (root.id === id) return svg;
      }
      return undefined;
    },
    [svg, hasClaymationSteps],
  );

  const hideScene = useCallback(
    (id: string): void => {
      if (!svg) return;
      const scene: SVGSVGElement | undefined = svg.getElementById(id) as SVGSVGElement;
      scene.dataset.looped = '0';
      scene.style.display = 'none';
      scene.pauseAnimations();
      scene.setCurrentTime(0);
    },
    [svg],
  );

  const showScene = useCallback(
    (id: string, s?: SVGSVGElement): void => {
      const scene = findScene(id, s);
      if (!scene) return;
      scene.dataset.looped = '0';
      if (hasAnimatedDrawings(scene)) {
        const duration = calculateAnimationDuration(scene);
        const moveTo = duration < 2000 ? duration : 1;
        scene.setCurrentTime(moveTo);
        scene.pauseAnimations();
        if (isPlayable) scene.unpauseAnimations();
      }
      scene.style.display = 'block';
    },
    [findScene, isPlayable],
  );

  const hideAll = (s?: SVGSVGElement): void => {
    (s || ref?.current)?.querySelectorAll('.scene').forEach((el) => {
      const ss = el as SVGSVGElement;
      ss.style.display = 'none';
      ss.pauseAnimations();
    });
  };

  const initialize = (sv: SVGSVGElement): void => {
    const s = sv;
    s.pauseAnimations();

    hideAll();
    if (hasClaymationSteps(s)) setIsNested(true);
    showScene('scene0', s);
  };

  // const setupNestedAnimations = useCallback((parentSvg: SVGSVGElement): void => {
  //   const scenes: NodeListOf<SVGSVGElement> = parentSvg.querySelectorAll('.scene');
  //   if (scenes.length > 0) {
  //     setIsNested(true);
  //     scenes.forEach((scene) => {
  //       const s = scene;
  //       s.style.display = 'none';
  //       const endTime = Math.max(
  //         ...Array.from(s.querySelectorAll('animate')).map((a) =>
  //           parseInt(a.getAttribute('begin') || '0', 10),
  //         ),
  //       );
  //       s.setCurrentTime(endTime);
  //     });
  //     const opening = parentSvg.getElementById('scene0') as SVGSVGElement;
  //     if (opening) {
  //       opening.style.display = 'block';
  //     }
  //   }
  // }, []);

  const svgLoaded = async (): Promise<void> => {
    if (ref.current && !svg) {
      const s = (await waitForElm('svg', ref.current)) as SVGSVGElement;
      if (s) {
        setSvg(s);
        initialize(s);
      }
    }
  };

  const getAllScenes = useCallback((): SVGSVGElement[] => {
    if (!svg) return [];
    return Array.from(svg.querySelectorAll('.scene')) as SVGSVGElement[];
  }, [svg]);

  const isLastScene = useCallback(
    (scene: SVGSVGElement): boolean => {
      const scenes = getAllScenes();
      const total = scenes.length;
      const cIx = parseInt(scene.id.replace('scene', ''), 10);
      if (cIx === total - 1) return true;
      return false;
    },
    [getAllScenes],
  );

  const intervalMs = 1000;
  const viewingBufferMs = 5000;
  const shouldKeepLooping = useCallback(
    (scene: SVGSVGElement): boolean => {
      if (hasAnimatedDrawings(scene)) {
        const duration = calculateAnimationDuration(scene) + viewingBufferMs;
        const position = scene.getCurrentTime() * 1000;
        return position < duration;
      }
      if (!isLastScene(scene)) return false;
      const x = parseInt(scene.dataset.looped || '0', 10);
      if (x >= viewingBufferMs / intervalMs) return false;
      return true;
    },
    [isLastScene],
  );

  const incrementLoop = (scene: SVGSVGElement): void => {
    const x = parseInt(scene.dataset.looped || '0', 10);
    const s = scene;
    s.dataset.looped = (x + 1).toString();
  };

  const findCurrentScene = useCallback(() => {
    const scenes = getAllScenes();
    const current = scenes.find((s) => s.style.display === 'block');
    return current;
  }, [getAllScenes]);

  const nextSceneId = useCallback(() => {
    const current = findCurrentScene();
    if (!current) return 'scene0';
    const scenes = getAllScenes();
    const total = scenes.length;
    const cIx = parseInt(current.id.replace('scene', ''), 10);
    if (cIx === total - 1) return 'scene0';
    return `scene${cIx + 1}`;
  }, [findCurrentScene, getAllScenes]);

  const play = useCallback(() => {
    if (!svg) return;
    if (isNested) {
      if (!interval) {
        const i = setInterval(() => {
          const current = findCurrentScene();
          if (current) {
            current.unpauseAnimations();
            if (shouldKeepLooping(current)) {
              incrementLoop(current);
            } else {
              const nextId = nextSceneId();
              showScene(nextId);
              hideScene(current.id);
            }
          }
        }, intervalMs);
        setInter(i);
      }
    } else {
      svg.unpauseAnimations();
    }
  }, [
    nextSceneId,
    isNested,
    svg,
    interval,
    showScene,
    hideScene,
    findCurrentScene,
    shouldKeepLooping,
  ]);

  const pause = useCallback(() => {
    if (!svg) return;
    if (isNested) {
      if (interval) {
        clearInterval(interval);
        setInter(undefined);
      }
    } else {
      svg.pauseAnimations();
    }
  }, [isNested, svg, interval]);

  useEffect(() => {
    if (!svg) return;
    if (animate) {
      if (isPlayable) {
        play();
      } else {
        pause();
      }
    } else {
      pause();
    }
  }, [svg, animate, isPlayable, pause, play]);

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
        base: hero ? 'auto' : '100%',
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
      <SvgAnimation name={src} onLoad={svgLoaded} aspect={aspect} />
    </Box>
  );
};

export default ExcalidrawAnimation;
