import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import Heading from '../Heading';

const StyledHeading = styled(Heading)`
  text-align: center;
`;
const ModalTitle = ({ children }) => (
  <StyledHeading mt={0} mb={2} as="h2">
    {children}
  </StyledHeading>
);

ModalTitle.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default ModalTitle;
