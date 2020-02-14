import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import { ReactComponent as CircleCheck } from '../assets/check-circle-icon.svg';
import IconListItem from './IconLisItem';

const CheckedListItem = ({ children, containerStyle, ...rest }) => {
  return (
    <IconListItem icon={CircleCheck} containerStyle={containerStyle} iconStyle={{ marginTop: 1}} {...rest}>
      {children}
    </IconListItem>
  );
};

CheckedListItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  containerStyle: PropTypes.shape({}),
};

CheckedListItem.defaultProps = {
  containerStyle: {},
};

export default CheckedListItem;
