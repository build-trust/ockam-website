import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Container = styled('div')`
 background-color: #272a36;
 width: 100%;
 position: relative;
 display: flex;
 height: 2rem;
`;

const Bar = styled('div')`
  background-color: #52c7ea;
  width: ${props => `${props.value}%`};
`;

const TextValue = styled('div')`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

const Progress = ({ value }) => {
  return (
    <Container>
      <TextValue>{value}</TextValue>
      <Bar value={value} />
    </Container>
  );
};

Progress.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Progress;
