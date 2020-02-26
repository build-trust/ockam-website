import styled from "@emotion/styled";
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import { useTransition, animated } from 'react-spring';

import { media } from '../../utils/emotion';
import useOnClickOutside from "../../hooks/useOnClickOutside";

import ModalClose from './ModalClose';
import ModalWrapper from './ModalWrapper';

const AnimatedWrapper = animated(ModalWrapper);

const ModalContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 72rem;
  border-radius: ${props => props.theme.radii.default};
  background-color: ${props => props.theme.colors.background};
   padding: 7rem 2rem;
  box-shadow: 0 0.5rem 3rem -1rem ${props => props.theme.colors.modalShadow};
  margin: 5rem 1rem;
  ${media.desktop`
    padding: 7rem;
    width: auto;
    min-width: 72rem;
  `}
`;

const AnimatedModalContainer = animated(ModalContainer);

const Modal = ({ isActive, hide, children }) => {
  const modalRef = useRef(null);
  const containerRef = useRef();
  const modalTarget = modalRef && modalRef.current;
  useOnClickOutside(containerRef, () => hide());
  const cleanUp = () => clearAllBodyScrollLocks();

  useEffect(() => {
    if (isActive && modalTarget) enableBodyScroll(modalTarget);
    return cleanUp;
  }, [modalTarget, isActive]);

  const transitions = useTransition(isActive, null, {
    from: { opacity: 0, transform: 'translateY(-300px)' },
    enter: { opacity: 1, transform: 'translateY(0)' },
    leave: { opacity: 0, transform: 'translateY(-100vh)' },
    config: { tension: 60, friction: 5, mass: 0.25 },
  });
  return (
    transitions.map(({ item, key, props }) => item && (
      <AnimatedWrapper
        key={key}
        ref={modalRef}
        style={{ position: props.position, opacity: props.opacity }}
      >
        <AnimatedModalContainer ref={containerRef} style={{ transform: props.transform, opacity: props.opacity }}>
          <ModalClose onClick={hide} />
          {children}
        </AnimatedModalContainer>
      </AnimatedWrapper>
    )));
};

Modal.propTypes = {
  hide: PropTypes.func,
  children: PropTypes.node.isRequired,
  isActive: PropTypes.bool,
};

Modal.defaultProps = {
  hide() {},
  isActive: false,
};


export default Modal;
