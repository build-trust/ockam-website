import { FC, useEffect, useState, CSSProperties, useCallback } from 'react';
import {
  animated,
  config,
  useTransition,
  useSpringRef,
  AnimatedProps,
  TransitionFn,
} from '@react-spring/web';
import styled from 'styled-components';

const AnimatedContainer = styled(animated.div)`
  &:before {
    content: '';
    position: absolute;
    top: 97%;
    width: 100%;
    left: 0;
    height: 3px;
    border-radius: 2px;
    background-image: linear-gradient(142.21deg, #4fdab8 4.44%, #52c7ea 94.64%);
  }

  position: relative;
  overflow: auto;
  overflow-y: hidden;
  display: inline-block;
  font-size: 1em;
  height: 1.2em;
  vertical-align: middle;
  line-height: 1em;
`;

type Props = {
  words: string[];
  interval?: number;
  delay?: number;
  styles?: CSSProperties;
};

const makeElements = (
  words: string[],
  styles?: CSSProperties
): ((props: AnimatedProps<{ style: CSSProperties }>) => React.ReactElement)[] =>
  words.map(
    (word) =>
      function ({ style }: AnimatedProps<{ style: CSSProperties }>) {
        return <animated.div style={{ ...style, ...styles }}>{word}</animated.div>;
      }
  );

const RotatingText: FC<Props> = ({ words, interval, delay, styles }) => {
  const int = interval || 2000;
  const dly = delay || 0;
  const [wordIdx, setWordIdx] = useState(0);
  const [delayed, setDelayed] = useState(false);
  const transRef = useSpringRef();

  const wordElements = makeElements(words, styles);

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
  });

  const animateWord = useCallback(() => {
    let nextIdx: number;
    if (wordIdx === words.length - 1) {
      nextIdx = 0;
    } else {
      nextIdx = wordIdx + 1;
    }
    setWordIdx(nextIdx);
  }, [words, wordIdx]);

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
    <AnimatedContainer>
      {transition((sty, i) => {
        const Word = wordElements[i];
        return <Word style={sty} />;
      })}
    </AnimatedContainer>
  );
};
export default RotatingText;
