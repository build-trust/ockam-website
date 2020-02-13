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
`};
`;

const Content = styled.div`
  grid-area: content;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

const ImageContainer = styled('div')(
  props => ({
    gridArea: 'image',
    maxWidth: '50rem',
    position: props.isStickyImage ? `sticky` : `relative`,
    top: 0,
  }),
  flexbox
);

const Image = styled('img')`
  width: 100%;
`;

const DefaultGridSection = ({
  direction,
  image,
  gridLgProportions,
  children,
  isStickyImage,
}) => {
  return (
    <PageSection>
      <GridSection
        gridTemplateAreas={{
          _: `"image"
            "content";`,
          lg:
            direction === 'imageOnLeft'
              ? '"image content";'
              : '"content image";',
        }}
        gridTemplateColumns={{
          _: ' 1fr',
          lg: `${gridLgProportions[0]} ${gridLgProportions[1]}`,
        }}
      >
        <ImageContainer
          isStickyImage={isStickyImage}
          justifySelf={{
            _: 'center',
            lg: direction === 'imageOnLeft' ? 'start' : 'end',
          }}
        >
          <Image alt="grid graphics" src={image} />
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
  gridLgProportions: PropTypes.arrayOf(PropTypes.string),
  isStickyImage: PropTypes.bool,
};

DefaultGridSection.defaultProps = {
  direction: 'imageOnLeft',
  image: '',
  gridLgProportions: ['1fr', '1fr'],
  isStickyImage: false,
};

export default DefaultGridSection;
