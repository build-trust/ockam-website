import React from 'react';
import PropTypes from 'prop-types';
import styled from "@emotion/styled";

import capitalize from "../../utils/capitalize";

import Stats from "./Stats";

const Header = styled('header')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.3em;
  padding: 1.5rem 3rem 0 3rem;
  border-top: 1px solid ${props => props.theme.colors.search.resultsDividerColor};
  &:first-of-type {
    border-top: none;
  }
  h3 {
    color: ${props => props.theme.colors.primary};
    text-transform: uppercase;
  }
`;

const IndexHeader = ({ title }) => {
  return (
    <Header>
      <h3>{capitalize(title)}</h3>
      <Stats />
    </Header>
  );
};

IndexHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default IndexHeader;
