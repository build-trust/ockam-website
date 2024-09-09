'use client';
import { Selection, Selectable, SelectionProvider } from 'codehike/utils/selection';

import { FC, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Heading, Image } from '@chakra-ui/react';

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

const ImageTour: FC = (props) => {
  const uid = Math.random().toString(36).slice(2, 5);
  const { steps } = props;

  return (
    <SelectionProvider style={{ display: 'flex', gap: '0', flexDirection: 'row' }}>
      <div
        className="prose prose-invert"
        style={{ flex: '1 1 0%', marginTop: '8rem', marginBottom: '8rem', marginLeft: '0' }}
      >
        {steps.map((step, i) => (
          <StyledSelectable
            key={`${uid}-${i}`}
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
        <div style={{ top: '4rem', position: 'sticky', overflow: 'auto' }}>
          <Selection
            from={
              steps &&
              steps.map((step, i) => {
                // if (!step.tour) return <></>
                return <TourImage key={i} src={step.tour?.url} alt={step.tour?.alt} />;
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

const TourImage: FC<TourImageProps> = ({ src, alt }) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [imgAlt, setImageAlt] = useState(alt);
  const [isChanging, setIsChanging] = useState(false);

  const imgRef = useRef<HTMLImageElement>(null);

  // Function from David Walsh: http://davidwalsh.name/css-animation-callback
  const whichTransitionEvent = () => {
    if (typeof window !== 'undefined') {
      let t;
      const el = document.createElement('fakeelement');

      const transitions = {
        transition: 'transitionend',
        OTransition: 'oTransitionEnd',
        MozTransition: 'transitionend',
        WebkitTransition: 'webkitTransitionEnd',
      };

      for (t in transitions) {
        if (el.style[t] !== undefined) {
          return transitions[t];
        }
      }
    }
  };

  const transitionEvent = whichTransitionEvent();

  const updateImage = () => {
    if (imgRef.current) {
      imgRef.current.removeEventListener(transitionEvent, updateImage);
      setImgSrc(src);
      setImageAlt(alt);
      setIsChanging(false);
    }
  };

  useEffect(() => {
    if (src !== imgSrc || alt !== imgAlt) {
      if (!imgRef.current) return;
      imgRef.current.addEventListener(transitionEvent, updateImage);
      setIsChanging(true);
    }
  }, [src, alt]);

  if (src) {
    return (
      <Image
        ref={imgRef}
        src={imgSrc}
        alt={imgAlt || ''}
        style={{ opacity: isChanging ? 0 : 1, transition: 'opacity 0.3s ease-in' }}
      />
    );
  }
  return <></>;
};

export default ImageTour;