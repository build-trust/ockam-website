import React from 'react';
import PropTypes from 'prop-types';
import {animated, useTransition} from "react-spring";
import styled from "@emotion/styled";

import Icon from "../Icon";
import {ReactComponent as ChevronRightIcon} from "../../assets/chevron-right-icon.svg";
import {ReactComponent as CrossIcon} from "../../assets/cross-icon.svg";

const IconContainer = styled('div')`
  position: relative;
`;
const AnimatedIcon = styled(animated.div)`
  display: flex;
  align-items: center;
`;

const ToggleIcon = ({ isCollapsed }) => {
  const transitions = useTransition(isCollapsed, null, {
    from: { position: 'absolute', opacity: 0, transform: 'scale(0)' },
    enter: { opacity: 1, transform: 'scale(1)', position: 'relative' },
    leave: { opacity: 0, transform: 'scale(0)',  position: 'absolute' },
  });

  return (
    <IconContainer>
      {transitions.map(({ item, key, props }) =>
        (item
          ? <AnimatedIcon key={key} style={props}><Icon icon={ChevronRightIcon} width='14px' height='14px' /></AnimatedIcon>
          : <AnimatedIcon key={key} style={props}><Icon icon={CrossIcon} width='14px' height='14px' /></AnimatedIcon>)
      )}
    </IconContainer>
  );
};

ToggleIcon.propTypes = {
  isCollapsed: PropTypes.bool.isRequired,
};

export default ToggleIcon;
