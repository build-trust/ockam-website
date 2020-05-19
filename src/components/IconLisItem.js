import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { space } from 'styled-system';

import { ReactComponent as CircleCheck } from '../assets/check-circle-icon.svg';

import Icon from './Icon';
import Text from './Text';

const Container = styled('div')(
  {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginBottom: '1rem',
  },
  space
);

const StyledIcon = styled(Icon)`
  flex-shrink: 0;
`;

const IconListItem = ({
  children,
  icon,
  iconStyle,
  containerStyle,
  ...rest
}) => {
  return (
    <Container {...containerStyle}>
      <StyledIcon icon={icon} mr={3} flex={1} {...iconStyle} />
      <Text mb={0} {...rest}>
        {children}
      </Text>
    </Container>
  );
};

IconListItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  iconStyle: PropTypes.shape({}),
  containerStyle: PropTypes.shape({}),
  icon: PropTypes.func,
};

IconListItem.defaultProps = {
  icon: CircleCheck,
  iconStyle: {},
  containerStyle: {},
};

export default IconListItem;
