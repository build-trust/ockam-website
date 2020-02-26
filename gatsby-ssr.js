import React from 'react';

const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([<div key="modal-root" id="modal-root" />]);
};

// eslint-disable-next-line import/prefer-default-export
export { onRenderBody };
