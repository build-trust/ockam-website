import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ModalContext = React.createContext();

export const ModalContextProvider = ({ children }) => {
  const [modal, setModal] = useState(null);

  return (
    <ModalContext.Provider value={{ setModal }}>
      {children}
      {modal}
    </ModalContext.Provider>
  );
};

ModalContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default ModalContext;
