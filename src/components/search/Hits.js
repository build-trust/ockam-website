import React from "react";
import { connectInfiniteHits } from 'react-instantsearch-dom';
import PropTypes from 'prop-types';

import { LearnHit } from "./HitComps";
import LoadMoreButton from "./LoadMoreButton";

const Hits = ({  hasMore, refineNext, hits, onClick }) => (
  <>
    {hits.map(hit => (
      <LearnHit key={hit.objectID} hit={hit} onClick={onClick} />
    ))}
    {hasMore && (
    <LoadMoreButton onClick={refineNext}>
      Show more
    </LoadMoreButton>
)}
  </>
);

Hits.propTypes = {
  hasMore: PropTypes.bool.isRequired,
  refineNext: PropTypes.func.isRequired,
  hits: PropTypes.arrayOf(PropTypes.shape({
    objectID: PropTypes.string,
  })),
  onClick: PropTypes.func,

}

Hits.defaultProps = {
  hits: [],
  onClick() {},
}

export default connectInfiniteHits(Hits);
