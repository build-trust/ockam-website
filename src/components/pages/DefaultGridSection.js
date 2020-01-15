import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { grid, flexbox } from 'styled-system';

import { media } from '../../utils/emotion';

import PageSection from './PageSection';

const Grid = styled('div')(grid);

const GridSection = styled(Grid)`
  display: grid;
  grid-row-gap: 2rem;
  ${media.desktop`
    grid-column-gap: 9rem;
    grid-rows-gap: 0;
    grid-template-columns: 1fr 1fr;
`};
`;

const Content = styled.div`
  grid-area: content;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

const ImageContainer = styled('div')({
  gridArea: "image",
  alignSelf: "center",
  maxWidth: '50rem',
}, flexbox);

const DefaultGridSection = ({ direction, image, children }) => {
  return (
    <PageSection>
      <GridSection
        gridTemplateAreas={{
          sm: `"image"
            "content";`,
          lg:
            direction === 'imageOnLeft'
              ? '"image content";'
              : '"content image";',
        }}
      >
        <ImageContainer
          justifySelf={{
            sm: 'center',
            lg: direction === 'imageOnLeft' ? 'start' : 'end',
          }}
        >
          <img alt='grid graphics' src={image} />
        </ImageContainer>
        <Content>{children}</Content>
      </GridSection>
    </PageSection>
  );
};

DefaultGridSection.propTypes = {
  direction: PropTypes.oneOf(['imageOnLeft', 'imageOnRight']),
  image: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,


};

DefaultGridSection.defaultProps = {
  direction: 'imageOnLeft',
  image: '',
};

export default DefaultGridSection;
