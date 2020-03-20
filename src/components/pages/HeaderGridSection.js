import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import {grid} from "styled-system";

import { media } from '../../utils/emotion';
import AnimateOnScroll from "../AnimateOnScroll";
import BaseImage from '../Image';

import PageSection from './PageSection';

const Section = styled(PageSection)`
  background: ${({ theme }) => theme.colors.background};
  min-height: calc(100vh - 8rem);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 3rem;

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
    min-height: initial;
    margin: 10rem 0;
    
  `}

  ${media.ultraWide`
    text-align: initial;
    min-height: 40rem;
    height: initial;
    margin: 10rem 0 15rem 0;
    &::before {
      content: none;
    }
  `}
`;
const Grid = styled('div')(grid);
const HeaderSectionGrid = styled(Grid)`
  z-index: 2;
  display: grid;
  width: 100%;
  grid-template-areas: 'left-box';
  grid-template-rows: auto;
  ${media.tablet`
    width: 70%;
    margin: 0 auto;
  `};
  ${media.ultraWide`
    width: 100%;
    grid-template-areas: 
      "left-box image";
     grid-column-gap: 3rem;
  `};
`;

const Image = styled(BaseImage)`
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

const HeaderGridSection = ({
  image,
  alignImageRight,
  mobileImageOpacity,
  gridXlProportions,
  children,
}) => {

  return (
    <Section mobileImageOpacity={mobileImageOpacity} image={image}>
      <HeaderSectionGrid
        gridTemplateColumns={{
        _: ' 1fr',
        xl: `${gridXlProportions[0]} ${gridXlProportions[1]}`,
      }}
      >
        <LeftBox>
          <AnimateOnScroll slideIn='left'>
            {children}
          </AnimateOnScroll>
        </LeftBox>
        <ImageContainer>
          <AnimateOnScroll slideIn='right'>
            <Image src={image} alignImageRight={alignImageRight} />
          </AnimateOnScroll>
        </ImageContainer>
      </HeaderSectionGrid>
    </Section>
)};

HeaderGridSection.propTypes = {
  mobileImageOpacity: PropTypes.number,
  image: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  alignImageRight: PropTypes.bool,
  gridXlProportions: PropTypes.arrayOf(PropTypes.string),
};

HeaderGridSection.defaultProps = {
  mobileImageOpacity: 0.1,
  alignImageRight: false,
  gridXlProportions: ['7fr', '5fr'],
};

export default HeaderGridSection;
