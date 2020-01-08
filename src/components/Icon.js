import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { color, space, layout } from 'styled-system'


const generateStyledIcon = (Icon) => styled(Icon)(
  props => ({
    color: props.theme.colors.icon,
  }),
  color,
  space,
  layout
);

const Icon = ({ icon: Component, size, ...rest  }) => {
  const IconComponent = generateStyledIcon(Component);
  return (
    <IconComponent size={size} {...rest} />
  );
};

Icon.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.elementType]).isRequired,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Icon.defaultProps = {
  size: 2,
};

export default Icon;
