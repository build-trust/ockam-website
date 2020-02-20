import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { grid, flexbox } from 'styled-system';

import { media } from '../../utils/emotion';
import Heading from "../Heading";

import PageSection from './PageSection';

const Grid = styled('div')(grid);

const GridSection = styled(Grid)`
  display: grid;
  grid-row-gap: 2rem;
  grid-template-rows: ${props => {
  switch(props.contentAlign) {
    case "top":
      return "max-content auto";
    case "center":
      return "auto auto";
    default:
      return "auto auto";
  }}
  };
  ${media.desktop`
    grid-column-gap: 9rem;
    grid-row-gap: 0;
`};
`;

const Content = styled.div`
  grid-area: content;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
`;

const ImageContainer = styled('div')(
  {
    gridArea: 'image',
    maxWidth: '50rem',
    position: `relative`,
    top: 0,
  },
  flexbox
);

const Title = styled(Heading)`
  grid-area: title;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const Image = styled('img')`
  width: 100%;
`;

const DefaultGridSection = ({
  direction,
  image,
  gridLgProportions,
  children,
  isStickyImage,
  contentAlign,
  title,
  TitleComponent,
  id,
}) => {
  return (
    <PageSection id={id}>
      <GridSection
        contentAlign={contentAlign}
        gridTemplateAreas={{
          _: `"title"
              "image"
              "content";`,
          lg:
            direction === 'imageOnLeft'
              ? `"image title"
                 "image content";`
              : `"title image"
                 "content image";`,
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
        {title && (
          <Title as="h2" textAlign={{ _: "center", lg: 'left'}}>
            {title}
          </Title>
        )}
        {TitleComponent && <Title as="div"><TitleComponent /></Title>}

        <Content>{children}</Content>
      </GridSection>
    </PageSection>
  );
};

DefaultGridSection.propTypes = {
  direction: PropTypes.oneOf(['imageOnLeft', 'imageOnRight']),
  image: PropTypes.string,
  title: PropTypes.string,
  TitleComponent: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  gridLgProportions: PropTypes.arrayOf(PropTypes.string),
  isStickyImage: PropTypes.bool,
  id: PropTypes.string,
  contentAlign: PropTypes.oneOf(["top", "center"]),
};

DefaultGridSection.defaultProps = {
  direction: 'imageOnLeft',
  image: '',
  title: undefined,
  TitleComponent: undefined,
  gridLgProportions: ['1fr', '1fr'],
  isStickyImage: false,
  id: undefined,
  contentAlign: 'center',
};

export default DefaultGridSection;
