import React from 'react';
import styled from "@emotion/styled";

const Image = styled('img')`
  width: 100%;
`
const LinkedImage = ({src, ...rest}) => {
  return (
    <a href={src} rel="noopener noreferrer" target="_blank">
      <Image src={src} {...rest} />
    </a>
  );
};

export default LinkedImage;
