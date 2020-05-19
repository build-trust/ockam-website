import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import ErrorMessage from '../ErrorMessage';

const Message = styled(ErrorMessage)`
  &:last-child {
    margin-bottom: 1rem;
  }
`;

const FieldErrorMessages = ({ errors }) =>
  errors.length > 0
    ? errors.map(error => <Message key={error}>{error}</Message>)
    : null;

FieldErrorMessages.propTypes = {
  errors: PropTypes.arrayOf(PropTypes.string),
};

FieldErrorMessages.defaultProps = {
  errors: [],
};

export default FieldErrorMessages;
