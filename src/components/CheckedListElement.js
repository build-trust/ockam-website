import React from 'react';
import PropTypes from 'prop-types';
import styled from "@emotion/styled";

import circleCheck from "../assets/check-circle-icon.svg";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 2rem;
`;

const CircleCheck = styled.img`
  padding-top: 0.4rem;
  margin-right: 2rem;
`;

const CheckedListElement = ({ children, ...rest }) => {
  return (
    <Container {...rest}>
      <CircleCheck src={circleCheck} />
        {children}
    </Container>
  );
};

CheckedListElement.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default CheckedListElement;
