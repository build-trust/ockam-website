import React from 'react';
import PropTypes from 'prop-types';
import styled from "@emotion/styled";

import Button from "../Button";

const Container = styled('div')`
  padding: 0 3rem 2.5rem 3rem;
  text-align: center;
`
const LoadMoreButton = ({ onClick }) => {
  return (
    <Container>
      <Button outline="primary" size="small" onClick={onClick}>Load more results</Button>
    </Container>
  );
};

LoadMoreButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default LoadMoreButton;
