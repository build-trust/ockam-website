import { FC, useEffect, useState, CSSProperties, useCallback, useRef } from 'react';
import {
  animated,
  config,
  useTransition,
  useSpringRef,
  AnimatedProps,
  TransitionFn,
  SpringValue,
  AnimationResult,
  UnknownProps,
  Controller,
} from '@react-spring/web';
import styled from 'styled-components';

const AnimatedContainer = styled(animated.div)`
  &:before {
    content: '';
    position: absolute;
    top: 80%;
    width: 100%;
    left: 0;
    height: 3px;
    border-radius: 2px;
    background-image: linear-gradient(142.21deg, #0a1a2b, #36a7c9);
  }

  position: relative;
  overflow-x: visible;
  overflow-y: hidden;
  display: inline-block;
  font-size: 1em;
  height: 1.4em;
  width: auto;
  vertical-align: middle;
  line-height: 1.2em;
  font-weight: 800;
`;

type Props = {
  words: string[];
  interval?: number;
  delay?: number;
  styles?: CSSProperties;
};

const makeElements = (
  words: string[],
  styles?: CSSProperties,
): ((props: AnimatedProps<{ style: CSSProperties }>) => React.ReactElement)[] =>
  words.map(
    (word) =>
      function ({ style }: AnimatedProps<{ style: CSSProperties }>) {
        return (
          <animated.div style={{ ...style, ...styles }} key={`ani-${word}`}>
            {word}
          </animated.div>
        );
      },
  );

const RotatingText: FC<Props> = ({ words, interval, delay, styles }) => {
  const int = interval || 2000;
  const dly = delay || 0;
  const [wordIdx, setWordIdx] = useState(0);
  const [delayed, setDelayed] = useState(false);
  const [animCount, setAnimCount] = useState(0);
  const transRef = useSpringRef();
  const wordRef = useRef<HTMLDivElement>(null);
  const wordElements = makeElements(words, styles);

  let intervId: NodeJS.Timer | null;

  const elementScrollPosition = useCallback((): number | undefined => {
    const viewportY = document.documentElement.clientHeight;
    const elScrollTop = wordRef.current?.getBoundingClientRect().top;
    const scrollPerc = (elScrollTop || 0) / viewportY;
    return scrollPerc;
  }, [wordRef]);

  const shouldAnimate = useCallback((): boolean => {
    const scrollPerc = elementScrollPosition();
    if (scrollPerc && scrollPerc > 0.25 && scrollPerc < 0.75) return true;
    return false;
  }, [elementScrollPosition]);

  const transition: TransitionFn<
    number,
    { opacity: number; transform: string; position: 'static' }
  > = useTransition(wordIdx, {
    config: config.default,
    ref: transRef,
    reset: 'initial',
    expires: false,
    from: {
      opacity: 0,
      transform: 'translate3d(0,120%,0)',
      position: 'static' as const,
    },
    enter: {
      opacity: 1,
      transform: 'translate3d(0,0,0)',
      position: 'static' as const,
    },
    leave: {
      opacity: 0,
      transform: 'translate3d(0,120%,0)',
      position: 'absolute' as const,
    },
    onChange: () => {
      if (!shouldAnimate()) {
        transRef.pause();
      }
    },
    onPause: (
      result: AnimationResult<SpringValue<UnknownProps>>,
      ctrl: Controller | SpringValue,
    ) => {
      const keepChecking = (): void => {
        if (shouldAnimate()) {
          if (intervId) {
            clearInterval(intervId);
            intervId = null;
          }
          transRef.resume();
        }
      };
      intervId = setInterval(keepChecking, 500);
      if (!result.finished) {
        if (ctrl instanceof SpringValue) ctrl.finish();
      }
    },
  });

  const animateWord = useCallback(() => {
    let nextIdx: number;
    if (wordIdx === words.length - 1) {
      nextIdx = 0;
    } else {
      nextIdx = wordIdx + 1;
    }
    if (shouldAnimate()) {
      setWordIdx(nextIdx);
    } else {
      setAnimCount(animCount + 1);
    }
  }, [words, wordIdx, shouldAnimate, animCount]);

  useEffect(() => {
    transRef.start();
    if (delayed) {
      setTimeout(() => {
        animateWord();
      }, int);
    } else {
      setTimeout(() => {
        animateWord();
      }, dly);
      setDelayed(true);
    }
  }, [wordIdx, animateWord, int, delayed, dly, transRef]);

  return (
    <AnimatedContainer ref={wordRef}>
      {transition((sty, i) => {
        const Word = wordElements[i];
        return <Word style={sty} />;
      })}
    </AnimatedContainer>
  );
};
export default RotatingText;
