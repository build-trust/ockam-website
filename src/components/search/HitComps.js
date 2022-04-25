import React from 'react';
import { Highlight } from 'react-instantsearch-dom';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import CalendarIcon from 'emotion-icons/ion-ios/Calendar';

import Icon from '../Icon';

const StyledLink = styled(Link)`
  padding: 2.5rem 3rem;
  display: block;
  color: ${props => props.theme.colors.search.resultText};
  font-size: ${props => props.theme.fontSizes.small};
  line-height: 1.5;
  h4 {
    color: ${props => props.theme.colors.heading};
    margin-top: 0;
    margin-bottom: 0.5em;
    font-weight: 500;
    font-size: 1.6rem;
  }
  &:hover {
    background-color: ${props => props.theme.colors.search.resultItemHover};
  }
`;

const Date = styled('div')`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 0.4rem;
`;

const LearnHit = ({ hit, onClick }) => (
  <StyledLink to={hit.slug} onClick={onClick}>
    <h4>
      {hit.title && <Highlight attribute="title" hit={hit} tagName="mark" />}
      {hit.articleName || ''}
    </h4>
    <Highlight attribute="text" hit={hit} tagName="mark" />
    {hit.date && (
      <Date>
        <Icon mr={1} size={15} icon={CalendarIcon} /> {hit.date}
      </Date>
    )}
  </StyledLink>
);

LearnHit.propTypes = {
  hit: PropTypes.shape({
    title: PropTypes.string,
    slug: PropTypes.string,
    articleName: PropTypes.string,
    date: PropTypes.string,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default LearnHit;
