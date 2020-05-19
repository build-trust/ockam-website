import React from 'react';
import PropTypes from 'prop-types';
import { animated, useTransition } from 'react-spring';
import styled from '@emotion/styled';
import { space, flex } from 'styled-system';

import Icon from '../Icon';
import { ReactComponent as ChevronRightIcon } from '../../assets/chevron-right-icon.svg';
import { ReactComponent as CrossIcon } from '../../assets/cross-icon.svg';

const IconContainer = styled('div')(
  {
    position: 'relative',
    cursor: 'pointer',
  },
  space,
  flex
);
const AnimatedIcon = styled(animated.div)`
  display: flex;
  align-items: center;
`;

const ToggleIcon = ({
  isCollapsed,
  CollapsedIcon,
  UncollapsedIcon,
  ...rest
}) => {
  const transitions = useTransition(isCollapsed, null, {
    from: { position: 'absolute', opacity: 0, transform: 'scale(0)' },
    enter: { opacity: 1, transform: 'scale(1)', position: 'relative' },
    leave: { opacity: 0, transform: 'scale(0)', position: 'absolute' },
  });

  return (
    <IconContainer {...rest}>
      {transitions.map(({ item, key, props }) =>
        item ? (
          <AnimatedIcon key={key} style={props}>
            <CollapsedIcon />
          </AnimatedIcon>
        ) : (
          <AnimatedIcon key={key} style={props}>
            <UncollapsedIcon />
          </AnimatedIcon>
        )
      )}
    </IconContainer>
  );
};

ToggleIcon.propTypes = {
  isCollapsed: PropTypes.bool.isRequired,
  CollapsedIcon: PropTypes.func,
  UncollapsedIcon: PropTypes.func,
};
ToggleIcon.defaultProps = {
  CollapsedIcon: () => (
    <Icon icon={ChevronRightIcon} width="14px" height="14px" />
  ),
  UncollapsedIcon: () => <Icon icon={CrossIcon} width="14px" height="14px" />,
};

export default ToggleIcon;
