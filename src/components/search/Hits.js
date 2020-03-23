import React from "react";
import { connectHits } from 'react-instantsearch-dom';

import {LearnHit} from "./HitComps";

const Hits = ({ hits, onClick }) => (
  hits.map(hit => (
    <LearnHit key={hit.objectID} hit={hit} onClick={onClick} />
  ))
);

export default connectHits(Hits);
