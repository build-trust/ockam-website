import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { useSpring, animated } from 'react-spring';
import get from 'lodash/get';

import { media } from '../../utils/emotion';

import DropdownOptions from './DropdownOptions';

const Container = styled(animated.div)`
  border-bottom: 1px solid ${props => props.theme.colors.mobileMenuItemDivider};
  ${media.desktop`
    border-bottom: none;
  `}
`;

const OptionsContainer = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
`;

const getRefClientHeight = ref => get(ref, 'current.clientHeight', null);

const CollapsibleMenu = ({
  children,
  isCollapsedHeader,
  onClickItem,
  options,
}) => {
  const [show, setShow] = useState(false);
  const onClickElement = e => {
    e.preventDefault();
    setShow(val => !val);
  };
  const ref = useRef();
  const viewHeight = getRefClientHeight(ref);

  const { height, opacity, transform } = useSpring({
    from: { height: 0, opacity: 0, transform: `translate3d(0,-50px,0)` },
    to: {
      height: show ? viewHeight : 0,
      opacity: show ? 1 : 0,
      transform: show ? `translate3d(0,0,0)` : `translate3d(0,-50px,0)`,
    },
  });
  return (
    <Container>
      {React.cloneElement(children, {
        onClick: onClickElement,
        isDropdownVisible: show,
      })}
      <animated.div style={{ height, opacity, transform }}>
        <OptionsContainer ref={ref}>
          <DropdownOptions
            onClickItem={onClickItem}
            isCollapsedHeader={isCollapsedHeader}
            options={options}
          />
        </OptionsContainer>
      </animated.div>
    </Container>
  );
};

CollapsibleMenu.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
    })
  ).isRequired,
  isCollapsedHeader: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  onClickItem: PropTypes.func,
};

CollapsibleMenu.defaultProps = {
  isCollapsedHeader: false,
  onClickItem() {},
};

export default CollapsibleMenu;
