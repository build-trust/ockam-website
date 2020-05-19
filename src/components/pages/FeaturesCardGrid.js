import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { grid } from 'styled-system';

import { media } from '../../utils/emotion';
import Icon from '../Icon';
import Heading from '../Heading';
import Text from '../Text';
import AnimateOnScroll from '../AnimateOnScroll';

import FeatureCard from './FeatureCard';

const Grid = styled('div')(grid);
const FeaturesGrid = styled(Grid)`
  display: grid;
  grid-row-gap: 0.2rem;
  ${media.desktop`
    grid-column-gap: 0.2rem;
    grid-rows-gap: 0;
    grid-template-rows: auto;
  `};
`;

const FeaturesCardGrid = ({ features, cardPadding }) => {
  return (
    <FeaturesGrid
      columnsCount={features.length}
      gridTemplateColumns={['', '', '', `repeat(${features.length}, 1fr);`]}
    >
      {features.map((feature, index) => (
        <AnimateOnScroll
          slideIn="left"
          delay={150 * index}
          styles={{ height: '100%' }}
        >
          <FeatureCard key={feature.title} padding={cardPadding}>
            <Icon
              size={feature.iconSize || 3}
              color="primary"
              icon={feature.icon}
              mb={2}
            />
            <Heading as="h6" fontSize="bodySmall">
              {feature.title}
            </Heading>
            <Text fontSize="bodySmall">{feature.description}</Text>
          </FeatureCard>
        </AnimateOnScroll>
      ))}
    </FeaturesGrid>
  );
};

FeaturesCardGrid.propTypes = {
  cardPadding: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  features: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.func.isRequired,
      iconSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

FeaturesCardGrid.defaultProps = {
  cardPadding: '4rem',
};

export default FeaturesCardGrid;
