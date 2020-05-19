import React, { useState, useRef } from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';
import PropTypes from 'prop-types';

import useOnEventOutside from '../hooks/useOnEventOutside';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

export const PanelContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const PanelContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  visibility: ${({ isActive }) => (isActive ? 'visible' : 'hidden')};
  animation: ${({ isActive }) => (isActive ? fadeIn : fadeOut)} 0.2s linear;
  transition: visibility 0.2s linear;
`;

const OverlayPanel = ({ panelAction, children, triggerEvent, ...rest }) => {
  const [isActive, setIsActive] = useState(false);
  const panelRef = useRef(null);
  const actionRef = useRef(null);
  useOnEventOutside(
    [actionRef, panelRef],
    () => setIsActive(false),
    triggerEvent
  );
  const showPanel = () => setIsActive(true);
  const hidePanel = () => setIsActive(false);

  return (
    <div>
      {panelAction(showPanel, hidePanel, actionRef)}
      {isActive && (
        <PanelContainer ref={panelRef}>
          <PanelContent isActive={isActive} {...rest}>
            {children}
          </PanelContent>
        </PanelContainer>
      )}
    </div>
  );
};

OverlayPanel.propTypes = {
  panelAction: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  triggerEvent: PropTypes.oneOf(['mousedown', 'mouseover']),
};

OverlayPanel.defaultProps = {
  panelAction() {},
  children: null,
  triggerEvent: 'mousedown',
};

export default OverlayPanel;
