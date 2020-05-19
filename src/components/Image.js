import React from 'react';
import PropTypes from 'prop-types';

import getMemoizedAltForFilepath from '../utils/getMemoizedAltForFilepath';

const Image = ({ src, alt, ...rest }) => {
  const imageAlt = alt || getMemoizedAltForFilepath(src);
  return <img src={src} alt={imageAlt} {...rest} />;
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

Image.defaultProps = {
  alt: '',
};

export default Image;
