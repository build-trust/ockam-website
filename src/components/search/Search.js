import React, {useState, useRef, useMemo, useCallback} from "react";
import {
  InstantSearch,
  Index,
  Configure,
  } from "react-instantsearch-dom"
import algoliasearch from "algoliasearch/lite"
import PropTypes from 'prop-types';

import config from '../../../config';
import useOnClickOutside from "../../hooks/useOnClickOutside";
import Scrollbar from "../Scrollbar";
import useSiteMetadata from "../../hooks/useSiteMetadata";

import Input from "./Input"
import Results from "./Results";
import Hits from "./Hits";
import IndexHeader from "./IndexHeader";
import SearchWrapper from "./SearchWrapper";
import HitsWrapper from "./HitsWrapper";
import PoweredBy from "./PoweredBy";



export default function Search({ indices }) {
  const ref = useRef();
  const { algoliaHitsPerPage } = useSiteMetadata();
  const [query, setQuery] = useState();
  const [focus, setFocus] = useState(false);

  const loseFocus = useCallback(() => {
    setFocus(false)
  },[]);
  useOnClickOutside(ref,loseFocus);

  const searchClient = useMemo(() => algoliasearch(
    config.env.ALGOLIA_APP_ID,
    config.env.ALGOLIA_SEARCH_API_KEY
  ),[]);

  return (
    <SearchWrapper ref={ref}>
      <InstantSearch
        searchClient={searchClient}
        indexName={indices[0]}
        onSearchStateChange={({ query: newQuery }) => setQuery(newQuery)}
      >
        <Configure hitsPerPage={algoliaHitsPerPage} />
        <Input onFocus={() => setFocus(true)} {...{ focus }} />
        {query && query.length && focus && (
        <HitsWrapper show={focus}>
          <Scrollbar>
            {indices.map((index) => (
              <Index key={index} indexName={index}>
                <IndexHeader title={index} />
                <Results>
                  <Hits onClick={loseFocus} />
                </Results>
              </Index>
              )
             )}
            <PoweredBy />
          </Scrollbar>
        </HitsWrapper>
        )}
      </InstantSearch>
    </SearchWrapper>
  )
}

Search.propTypes = {
  indices: PropTypes.arrayOf(PropTypes.string),
};

Search.defaultProps = {
  indices: [],
};
