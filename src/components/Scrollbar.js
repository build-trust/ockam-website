import React from 'react';
import styled from '@emotion/styled';
import ReactScrollbar from 'react-scrollbars-custom';
import PropTypes from 'prop-types';

const Container = styled('div')`
  position: relative;
  height: 100%;
  .ScrollbarsCustom-Content {
    position: relative;
  }
  .ScrollbarsCustom-Wrapper {
    width: 100%;
    height: 100%;
  }
  .ScrollbarsCustom-TrackY {
    top: 0 !important;
    background-color: ${({ theme }) =>
      theme.custom.sidebar.customScrollTruckColor} !important;
    height: 100% !important;
    width: 4px !important;
  }
  .ScrollbarsCustom-ThumbY {
    background-color: ${({ theme }) =>
      theme.custom.sidebar.customScrollThumbColor} !important;
  }
`;

const Scrollbar = ({ children, ...rest }) => {
  return (
    <Container>
      <ReactScrollbar style={{ width: '100%', height: '100%' }} {...rest}>
        {children}
      </ReactScrollbar>
    </Container>
  );
};

Scrollbar.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default Scrollbar;
