import React from 'react';
import PropTypes from 'prop-types';
import { darken } from 'polished';
import styled from '@emotion/styled';

import OverlayPanel from '../OverlayPanel';

import DropdownOptions from './DropdownOptions';

const OverlayMenuPanel = styled(OverlayPanel)`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.dropdownMenuBackground};
  border: 1px solid
    ${props => darken(0.03, props.theme.colors.accentBackground)};
  box-shadow: ${({ theme }) =>
    `0 3px 8px 0 ${theme.colors.dropdownMenuShadow}`};
  padding: 1rem 0;
  margin-bottom: 0;
  align-items: flex-start;
  min-width: 15rem;
`;

const eventMap = new Map([
  [
    'click',
    action => ({
      onClick: action,
    }),
  ],
  [
    'mouseover',
    action => ({
      onMouseOver: action,
    }),
  ],
  [
    'default',
    action => ({
      onMouseOver: action,
    }),
  ],
]);

const OverlayMenu = ({
  options,
  isCollapsedHeader,
  triggerEvent,
  children,
}) => {
  return (
    <OverlayMenuPanel
      triggerEvent={triggerEvent}
      panelAction={(showPanel, hidePanel, ref) =>
        React.cloneElement(children, {
          ref,
          ...eventMap.get(triggerEvent)(showPanel),
        })
      }
    >
      <DropdownOptions
        isCollapsedHeader={isCollapsedHeader}
        options={options}
      />
    </OverlayMenuPanel>
  );
};

OverlayMenu.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
    })
  ).isRequired,
  isCollapsedHeader: PropTypes.bool,
  triggerEvent: PropTypes.oneOf(['mousedown', 'mouseover']),
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

OverlayMenu.defaultProps = {
  triggerEvent: 'mousedown',
  isCollapsedHeader: false,
};

export default OverlayMenu;
