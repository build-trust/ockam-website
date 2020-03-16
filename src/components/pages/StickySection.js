import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import { media } from '../../utils/emotion';
import Heading from "../Heading";
import AnimateOnScroll from "../AnimateOnScroll";

import Content from "./Content";


const StickySectionContent = styled(Content)`

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-template-areas: 
    "title"
    "image"
    "content";
  ${media.desktop`   
      grid-template-columns: 7fr 4fr;
      grid-template-rows: 1fr;
      grid-column-gap: 11rem;
      grid-template-areas: 
      "image title"
      "image content";
  `}

`;

const StickyBox = styled('div')`

  text-align: center;
  ${media.desktop`
    position: sticky;
    top: 8rem;
  `}
`

const TextBox = styled('div')`
  grid-area: content;
  flex: 4;
  display: flex;
  flex-direction: column;
  ${media.desktop`

  `};
`;

const StickyContainer = styled('div')`
  flex: 8;
  grid-area: image;

  ${media.desktop`
    margin-bottom: 0;
  `};

  position: relative;
`;

const Image = styled('img')`
  width: 100%;
  display: none;
  ${media.desktop`
    display: initial;
  `}
`;

const MobileImage = styled('img')`
  width: 100%;
  max-width: 50rem;
  margin-bottom: 4rem;
  ${media.desktop`
    display: none;
  `}
`

const Title = styled(Heading)`
   grid-area: title;
`

const StickySection = ({ image, mobileImage, title, TitleComponent, children, order }) => {

  return (
    <AnimateOnScroll>
      <StickySectionContent>
        <StickyContainer>
          <StickyBox order={order}>
            <AnimateOnScroll slideIn="down" offsetTopViewport={300}>
              <Image src={image} alt='sticky' />
              <MobileImage src={mobileImage} alt='mobileImage sticky' />
            </AnimateOnScroll>
          </StickyBox>
        </StickyContainer>
        {title && (
          <Title as="h2" textAlign={{ _: "center", lg: 'left'}}>
            {title}
          </Title>
        )}
        {TitleComponent && <Title as="div"><TitleComponent /></Title>}
        <TextBox order={order}>
          {children}
        </TextBox>
      </StickySectionContent>
    </AnimateOnScroll>
  );
};

StickySection.propTypes = {
  order: PropTypes.oneOf(['imageOnLeft', 'imageOnRight']),
  image: PropTypes.string.isRequired,
  mobileImage: PropTypes.string.isRequired,
  title: PropTypes.string,
  TitleComponent: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

StickySection.defaultProps = {
  order: 'imageOnLeft',
  title: undefined,
  TitleComponent: undefined,
};

export default StickySection;
