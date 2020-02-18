import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { grid } from 'styled-system';

import { media } from '../../../utils/emotion';
import PageSection from '../PageSection';

const Section = styled(PageSection)`
  background: ${({ theme }) => theme.colors.background};
  min-height: calc(100vh - 8rem);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 3rem;
  text-align: center;

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
    margin: 10rem 0 18rem 0;
  `}
`;
const Grid = styled('div')(grid);
const HeaderSectionGrid = styled(Grid)`
  z-index: 2;
  display: grid;
  width: 100%;
  grid-template-areas:
  'left-box'
  'image';
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  ${media.tablet`
    width: 70%;
    margin: 0 auto;
  `};
  ${media.desktop`
    width: 100%;
    grid-template-columns: 5fr 5fr;
    grid-template-areas: 
      "left-box image";
     grid-column-gap: 3rem;
  `};
`;

const Image = styled.img`
  display: none;
  ${media.desktop`
    display: inline;
    width: 100%;
    max-width: 100%;
  `};
`;

const MobileImage = styled.img`
  max-width: 70%;
  ${media.desktop`
    display: none;
  `};
`

const ImageContainer = styled.div`
  grid-area: image;
  align-self: center;
  position: relative;
`;

const LeftBox = styled.div`
  grid-area: left-box;
  margin-bottom: 5rem;
  ${media.desktop`
    margin-bottom: 0;
  `};
`;

const HeaderProductGrid = ({
  image,
  mobileImage,
  gridXlProportions,
  children,
}) => (
  <Section>
    <HeaderSectionGrid
      gridTemplateColumns={{
        _: ' 1fr',
        xl: `${gridXlProportions[0]} ${gridXlProportions[1]}`,
      }}
    >
      <LeftBox>{children}</LeftBox>
      <ImageContainer>
        <Image src={image} />
        <MobileImage src={mobileImage} />
      </ImageContainer>
    </HeaderSectionGrid>
  </Section>
);

HeaderProductGrid.propTypes = {
  image: PropTypes.string.isRequired,
  mobileImage: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  gridXlProportions: PropTypes.arrayOf(PropTypes.string),
};

HeaderProductGrid.defaultProps = {
  gridXlProportions: ['7fr', '5fr'],
};

export default HeaderProductGrid;
