import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import { media } from '../../utils/emotion';

import PageSection from './PageSection';

const Section = styled(PageSection)`
  background: ${({ theme }) => theme.colors.background};
  height: calc(100vh - 8rem);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;

  text-align: center;
  &::before {
    z-index: 1;
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background-size: cover;
    background-image: url(${props => props.image});
    background-repeat: no-repeat;
    background-position: top center;
    opacity: ${props => props.mobileImageOpacity};
  }

  ${media.tablet`
    &::before {
       background-position: top center;
    }
  `}

  ${media.ultraWide`
    text-align: initial;
    min-height: 60rem;
    height: 60vh;
    &::before {
      content: none;
    }
  `}
`;

const HeaderSectionGrid = styled.div`
  z-index: 2;
  display: grid;
  width: 100%;
  grid-template-areas:
    'left-box';
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  ${media.tablet`
    width: 70%;
    margin: 0 auto;
  `};
  ${media.ultraWide`
    width: 100%;
    grid-template-areas: 
      "left-box image";
     grid-template-columns: 7fr 5fr;
     grid-column-gap: 3rem;
  `};
`;

const Image = styled.img`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${props => props.alignImageRight && `right: 0;`}
`;

const ImageContainer = styled.div`
  grid-area: image;
  align-self: center;
  position: relative;
  display: none;
  ${media.ultraWide`
    display: block;
  `};
`;

const LeftBox = styled.div`
  grid-area: left-box;
`;

const HeaderGridSection = ({ image, alignImageRight, mobileImageOpacity, children}) => (
  <Section mobileImageOpacity={mobileImageOpacity} image={image}>
    <HeaderSectionGrid>
      <LeftBox>
        {children}
      </LeftBox>
      <ImageContainer>
        <Image src={image} alignImageRight={alignImageRight} />
      </ImageContainer>
    </HeaderSectionGrid>
  </Section>
);

HeaderGridSection.propTypes = {
  mobileImageOpacity: PropTypes.number,
  image: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  alignImageRight: PropTypes.bool,
};

HeaderGridSection.defaultProps = {
  mobileImageOpacity: 0.1,
  alignImageRight: false,
};

export default HeaderGridSection;
