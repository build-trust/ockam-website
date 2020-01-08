import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Row = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  div {
    background-color: #272a36;
    padding: 0.5rem;
    flex-grow: 1;
    text-align: center;
    margin: 2px;
  }
`;

const SampleComponent = ({ json }) => {
  return (
    <div>
      {json.map(item => (
        <Row key={item.label + item.value}>
          <div>{item.label}</div>
          <div>{item.value}</div>
          <div>{item.slug}</div>
        </Row>
      ))}
    </div>
  );
};

SampleComponent.propTypes = {
  json: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default SampleComponent;
