import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import BaseImage from '../Image';

const Image = styled(BaseImage)`
  width: 100%;
`;
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
