import React from 'react';
import PropTypes from 'prop-types';

import Image from './Image';


const LinkedImage = ({ src, ...rest }) => {
  return (
    <a href={src} rel="noopener noreferrer" target="_blank">
      <Image src={src} {...rest} />
    </a>
  );
};

LinkedImage.propTypes = {
  src: PropTypes.string.isRequired,
};

export default LinkedImage;
