import React from 'react';
import styled from "@emotion/styled";
import PropTypes from 'prop-types';
import { connectStateResults } from "react-instantsearch-dom"

const NoResultContainer = styled('div')`
  padding: 1rem 3rem 2rem 3rem;
  font-size: 1.6rem;
  color: ${props => props.theme.colors.search.resultText};
`;

const Results = ({ searchState: state, searchResults: res, children }) => {
  if(res && res.nbHits > 0) return children;
  return (
    <NoResultContainer>
      No results for
      &quot;
      {state.query}
      &quot;
      :(
    </NoResultContainer>
  )
};

Results.propTypes = {
  searchState: PropTypes.shape({
    query: PropTypes.string,
  }).isRequired,
  searchResults: PropTypes.shape({
    nbHits: PropTypes.array,
  }).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};


export default connectStateResults(Results);
