'use client';
import { z } from 'zod';
import { ObservedDiv, Scroller } from './transition/Scroller';

import React, { FC, memo, useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Heading, Image } from '@chakra-ui/react';
import { Block, parseProps } from 'codehike/blocks';

const StepsContext = React.createContext<{
  selectedIndex: number;
  selectIndex: React.Dispatch<React.SetStateAction<number>>;
}>({
  selectedIndex: 0,
  selectIndex: () => {},
});

const SelectionProvider = ({
  children,
  rootMargin,
  ...rest
}: React.HTMLAttributes<HTMLDivElement> & {
  rootMargin?: string;
}) => {
  const [selectedIndex, selectIndex] = React.useState<number>(0);
  return (
    <div data-selected-index={selectedIndex} {...rest}>
      <Scroller onIndexChange={selectIndex} rootMargin={rootMargin}>
        <StepsContext.Provider
          value={{
            selectedIndex,
            selectIndex,
          }}
        >
          {children}
        </StepsContext.Provider>
      </Scroller>
    </div>
  );
};

const Selectable = ({
  index,
  selectOn = ['click'],
  ...rest
}: {
  index: number;
  selectOn?: ('click' | 'hover' | 'scroll')[];
} & React.HTMLAttributes<HTMLDivElement>) => {
  const { selectedIndex, selectIndex } = React.useContext(StepsContext);
  const eventHandlers = React.useMemo(() => {
    const handlers: Record<string, () => void> = {};
    if (selectOn.includes('click')) {
      handlers.onClick = () => selectIndex(index);
    }
    if (selectOn.includes('hover')) {
      handlers.onMouseEnter = () => selectIndex(index);
    }
    return handlers;
  }, [index, selectIndex, selectOn]);

  const props = {
    'data-selected': selectedIndex === index,
    ...eventHandlers,
    ...rest,
  };

  return selectOn.includes('scroll') ? (
    <ObservedDiv index={index} {...props} />
  ) : (
    <div {...props} />
  );
};

const StyledSelectable = styled(Selectable)`
  padding: 0.5rem 1.25rem 0.5rem 1.25rem;
  margin-bottom: 24px;
  background-color: white;
  opacity: 0.3;
  transition: opacity 0.5s ease-in;

  &[data-selected='true'] {
    opacity: 1;
  }
`;

const Schema = Block.extend({
  steps: z.array(
    Block.extend({ tour: z.optional(z.object({ url: z.string(), alt: z.string() })) }),
  ),
});
const ImageTour: FC = (props) => {
  const data = parseProps(props, Schema);
  const { steps } = data;

  return (
    <SelectionProvider style={{ display: 'flex', gap: '0', flexDirection: 'row' }}>
      <div
        className="prose prose-invert"
        style={{ flex: '1 1 0%', marginTop: '8rem', marginBottom: '8rem', marginLeft: '0' }}
      >
        {steps.map((step, i) => (
          <StyledSelectable
            key={i}
            index={i}
            selectOn={['click', 'scroll']}
            style={{
              borderColor: 'border-color: rgb(63 63 70)',
              padding: '0.5rem 1.25rem 0.5rem 1.25rem',
              marginBottom: '24px',
              backgroundColor: 'white',
            }}
          >
            <Heading
              as="h2"
              style={{ marginTop: '1rem', fontSize: '1.25rem', lineHeight: '1.75rem' }}
            >
              {step.title}
            </Heading>
            <div>{step.children}</div>
          </StyledSelectable>
        ))}
      </div>
      <div
        style={{
          width: '40vw',
          maxWidth: '36rem',
          backgroundColor: 'white',
          borderRadius: '4px',
        }}
      >
        <div style={{ top: '8rem', position: 'sticky', overflow: 'auto' }}>
          <WindowFrame
            images={
              steps &&
              steps.map((step) => {
                return { src: step.tour?.url, alt: step.tour?.alt };
              })
            }
          />
        </div>
      </div>
    </SelectionProvider>
  );
};

type TourImageProps = {
  src?: string;
  alt?: string;
};

type WindowFrameProps = {
  images: TourImageProps[];
};
const WindowFrame: FC<WindowFrameProps> = memo(({ images }) => {
  const { selectedIndex } = React.useContext(StepsContext);
  const [previousIndex, setPreviousIndex] = useState(selectedIndex);

  const containerRef = useRef<HTMLDivElement>(null);
  const windowRef = useRef<HTMLDivElement>(null);

  const Window = styled.div`
    display: block;
    border-radius: 5px;
    border: 2px solid #222;
    width: 100%;
    padding: 0;
  `;
  const Bar = styled.div`
    display: block;
    background: #808080;
    padding: 2px 5px 2px 7px;
  `;
  const Close = styled.span`
    display: inline-block;
    background: #ff5f58;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-right: 3px;
  `;
  const Minimize = styled.span`
    display: inline-block;
    background: #febb30;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-right: 3px
    margin-left: 3px
  `;
  const Maximize = styled.span`
    display: inline-block;
    background: #2bc840;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-left: 3px;
  `;
  const Main = styled.div`
    display: block;
    padding: 2px;
  `;

  // Function from David Walsh: http://davidwalsh.name/css-animation-callback
  const whichTransitionEvent = () => {
    if (typeof window !== 'undefined') {
      let t;
      const el = document.createElement('fakeelement');

      const transitions: { [key: string]: string } = {
        transition: 'transitionend',
        OTransition: 'oTransitionEnd',
        MozTransition: 'transitionend',
        WebkitTransition: 'webkitTransitionEnd',
      };

      for (t in transitions) {
        if (el.style[t as keyof CSSStyleDeclaration] !== undefined) {
          return transitions[t];
        }
      }
    }
  };

  const transitionEvent = whichTransitionEvent();

  const updateImage = useCallback(() => {
    if (!containerRef.current) return;
    const imgs = containerRef.current.querySelectorAll('img');
    const prev = imgs[previousIndex];
    setPreviousIndex(selectedIndex);
    if (transitionEvent) prev.removeEventListener(transitionEvent, updateImage);
    const curr = imgs[selectedIndex];
    curr.style.opacity = '1';
  }, [selectedIndex, previousIndex, containerRef]);

  useEffect(() => {
    if (!containerRef.current) return;
    const imgs = containerRef.current.querySelectorAll('img');
    const prev = imgs[previousIndex];
    if (prev.style.opacity !== '0' && transitionEvent) {
      prev.addEventListener(transitionEvent, updateImage);
      prev.style.opacity = '0';
    } else {
      updateImage();
    }
  }, [selectedIndex]);

  useEffect(() => {
    updateImage();
  }, []);

  return (
    <Window ref={windowRef}>
      <Bar>
        <Close />
        <Minimize />
        <Maximize />
      </Bar>
      <Main>
        <div style={{ display: 'grid' }} ref={containerRef}>
          {images &&
            images.map((img, ix) => (
              <Image
                key={img.src}
                src={img.src}
                alt={img.alt}
                style={{
                  transition: 'opacity 0.3s ease-in',
                  gridArea: '1 / 1 / 1 / 1',
                  opacity: ix == selectedIndex ? '1' : 0,
                }}
              />
            ))}
        </div>
      </Main>
    </Window>
  );
});
WindowFrame.displayName = 'WindowFrame';
export default ImageTour;
