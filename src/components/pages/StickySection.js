import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import { media } from '../../utils/emotion';
import Heading from "../Heading";
import AnimateOnScroll from "../AnimateOnScroll";

import Content from "./Content";


const StickySectionContent = styled(Content)`
  display: flex;
  flex-direction: column;

  ${media.desktop`
    flex-direction: row;
    flex-wrap: wrap;
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
  flex: 4;
  display: flex;
  flex-direction: column;
  ${media.desktop`
    padding-left:11rem;
  `};
  order: ${props => (props.order === 'imageOnLeft' ? 2 : 1)};
`;

const StickyContainer = styled('div')`
  flex: 8;

  ${media.desktop`
    margin-bottom: 0;
  `};
  order: ${props => (props.order === 'imageOnLeft' ? 1 : 2)};
  position: relative;
`;

const EnvironmentLabel = styled('div')`
  display: none;
   ${media.desktop`
      display: block;
      font-size: 6rem;
      opacity: 0.2;
      position: absolute;
      left: -10rem;
      transform-origin: 0 0;
      transform: rotate(-90deg) translateX(-100%);
    `};
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

const MobileHeader = styled(Heading)`
  width: 100%;
   ${media.desktop`
    display: none;
  `}
`

const StickySection = ({ image, mobileImage, title, children, environmentTitle, order }) => {

  return (
    <StickySectionContent>
      <AnimateOnScroll transformY offsetTopViewport={300}>
        <MobileHeader textAlign="center" as="h2">
          {title}
        </MobileHeader>
      </AnimateOnScroll>
      <StickyContainer>
        <EnvironmentLabel>{environmentTitle}</EnvironmentLabel>
        <StickyBox order={order}>
          <AnimateOnScroll transformY offsetTopViewport={300}>
            <Image src={image} alt='sticky' />
            <MobileImage src={mobileImage} alt='mobileImage sticky' />
          </AnimateOnScroll>
        </StickyBox>
      </StickyContainer>
      <TextBox order={order}>
        <AnimateOnScroll offsetTopViewport={300}>
          {children}
        </AnimateOnScroll>
      </TextBox>
    </StickySectionContent>
  );
};

StickySection.propTypes = {
  order: PropTypes.oneOf(['imageOnLeft', 'imageOnRight']),
  image: PropTypes.string.isRequired,
  mobileImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  environmentTitle: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

StickySection.defaultProps = {
  order: 'imageOnLeft',
};

export default StickySection;
