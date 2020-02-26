import React, {
  useEffect, useContext, useState,
} from 'react';
import { createPortal } from 'react-dom';

import ModalContext from '../contexts/ModalContext';

const useModal = (Component, props = {}) => {
  if (typeof document === 'undefined') return [{ isActive: false }, () => {}, () => {}];
  const modalRoot = document.getElementById('modal-root');
  const context = useContext(ModalContext);

  const [isActive, setIsActive] = useState(false);
  const [payload, setPayload] = useState({});
  const hideModal = () => setIsActive(false);

  const showModal = (modalPayload = {}) => {
    setIsActive(true);
    setPayload(modalPayload);
  };

  const cleanUp = () => {
    context.setModal(createPortal(null, modalRoot));
  };

  useEffect(() => {
    const keyListener = (e) => {
      if (e.keyCode === 27) setIsActive(false);
    };
    document.addEventListener('keydown', keyListener);
    return () => document.removeEventListener('keydown', keyListener);
  });

  useEffect(() => {
    context.setModal(createPortal(
      <Component
        isActive={isActive}
        hide={hideModal}
        payload={payload}
        {...props}
      />,
      modalRoot
    ));

    return cleanUp;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActive]);


  return [{ isActive }, showModal, hideModal];
};

export default useModal;
