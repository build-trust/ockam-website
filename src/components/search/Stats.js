import React from 'react';
import styled from "@emotion/styled";
import { connectStateResults } from "react-instantsearch-dom"

const Text = styled('span')`
  font-size: 1.2rem;
  color: ${props => props.theme.colors.search.resultsCountText};
`;

const Stats = connectStateResults(
  ({ searchResults: res }) => {
    if(!res) return null;
    if(res.nbHits <= 0) return null;
    return (
      <Text>
        {res.nbHits}
        {' '}
        result
        {res.nbHits > 1 ? `s` : ``}
      </Text>
    )
  }
);

export default Stats;
