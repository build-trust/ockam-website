import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { grid, flexbox } from 'styled-system';

import { media } from '../../utils/emotion';
import Heading from '../Heading';
import AnimateOnScroll from '../AnimateOnScroll';
import BaseImage from '../Image';

import Subheading from './Subheading';
import PageSection from './PageSection';

const Grid = styled('div')(grid);

const GridSection = styled(Grid)`
  display: grid;
  grid-row-gap: 2rem;
  grid-template-rows: ${props => {
    switch (props.contentAlign) {
      case 'top':
        return 'max-content auto';
      case 'center':
        return 'auto auto';
      default:
        return 'auto auto';
    }
  }};
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
    width: '100%',
    alignSelf: 'center',
  },
  flexbox
);

const TitleWrapper = styled('div')`
  grid-area: title;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const SubtitleWrapper = styled('div')`
  text-align: center;
  grid-area: title-start;
  max-width: 100%;
  margin-bottom: 8rem;
  ${media.phone`
    margin-bottom: 3.2rem;
  `};
  ${media.desktop`
    max-width: 85%;
    text-align: left;
  `};
`;

const Image = styled(BaseImage)`
  width: 100%;
  padding: 0 3rem;
  ${media.desktop`
    padding: 0;
  `};
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
  subtitle,
}) => {
  return (
    <PageSection id={id}>
      <GridSection
        contentAlign={contentAlign}
        gridTemplateAreas={{
          _: `"image"
              "title"
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
          <AnimateOnScroll slideIn="down">
            <Image src={image} />
          </AnimateOnScroll>
        </ImageContainer>
        {subtitle && (
          <SubtitleWrapper>
            <Subheading>{subtitle}</Subheading>
          </SubtitleWrapper>
        )}
        {title && (
          <TitleWrapper>
            <AnimateOnScroll>
              <Heading linked as="h2" textAlign={{ _: 'center', lg: 'left' }}>
                {title}
              </Heading>
            </AnimateOnScroll>
          </TitleWrapper>
        )}
        {TitleComponent && (
          <TitleWrapper as="div">
            <AnimateOnScroll>
              <TitleComponent />
            </AnimateOnScroll>
          </TitleWrapper>
        )}
        <Content>
          <AnimateOnScroll>{children}</AnimateOnScroll>
        </Content>
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
  contentAlign: PropTypes.oneOf(['top', 'center']),
  subtitle: PropTypes.string,
};

DefaultGridSection.defaultProps = {
  direction: 'imageOnLeft',
  image: '',
  subtitle: undefined,
  title: undefined,
  TitleComponent: undefined,
  gridLgProportions: ['1fr', '1fr'],
  isStickyImage: false,
  id: undefined,
  contentAlign: 'center',
};

export default DefaultGridSection;
