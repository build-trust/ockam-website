import React, { Fragment } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { useSpring, a, animated } from 'react-spring'

import {useMeasure} from "../hooks/useMeasure";
import { media } from '../utils/emotion';

import Link from './Link';
import Button from './Button';

const Wrapper = styled(animated.div)`
  
  display: flex;
  overflow: hidden;
  flex-direction: column;
  align-items: center;
  width: 100%;
  a:not(${Button}) {
    padding: 1rem 0;
  }
  ${media.desktop`
    display: none;
  `}
`;

const Content = styled(a.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const isPartiallyActive = ({ isPartiallyCurrent }) => {
  return isPartiallyCurrent ? { className: 'active' } : null;
};

const MobileMenu = ({ items, showMobileMenu, isCollapsedHeader, ...rest }) => {

  const [bind, { height: viewHeight }] = useMeasure();
  const { height, opacity, transform } = useSpring({
    from: { height: 0, opacity: 0, transform: 'translate3d(0,-120px,0)' },
    to: { height: showMobileMenu ? viewHeight : 0, opacity: showMobileMenu ? 1 : 0, transform: `translate3d(0, ${showMobileMenu ? 0 : -120}px,0)` },
  });


  return (
    <Wrapper style={{ opacity, height }} {...rest} isCollapsedHeader={isCollapsedHeader} showMobileMenu={showMobileMenu}>
      <Content style={{ transform }} {...bind}>
        {items.map(item => (
          <Fragment key={item.to}>
            {item.type === 'text' && (
              <Link
                fontSize={isCollapsedHeader && 1}
                getProps={isPartiallyActive}
                to={item.to}
              >
                {item.label}
              </Link>
            )}
            {item.type === 'button' && (
              <Button
                variant="primary"
                size={isCollapsedHeader ? 'xSmall' : 'small'}
                as={Link}
                ml={{
                  _: 0,
                  md: 3,
                }}
                getProps={isPartiallyActive}
                to={item.to}
              >
                {item.label}
              </Button>
            )}
          </Fragment>
        ))}

      </Content>
    </Wrapper>
  )};

MobileMenu.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string,
      label: PropTypes.string,
      type: PropTypes.oneOf(['text', 'button']),
    })
  ).isRequired,
  isCollapsedHeader: PropTypes.bool,
  showMobileMenu: PropTypes.bool,
};

MobileMenu.defaultProps = {
  isCollapsedHeader: false,
  showMobileMenu: false,
};

export default MobileMenu;
