import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { animated, useTransition } from 'react-spring';

import { media } from '../../utils/emotion';
import isBrowser from '../../utils/isBrowser';

import MenuItems from './MenuItems';

const Wrapper = styled(animated.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  overflow: auto;
  grid-column: 1 / 4;
  left: 0;
  ${media.desktop`
    display: none;
  `}

  a {
    width: 100%;
    text-align: left;
    padding: 2rem 0;
  }
`;

const Container = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: column;
  > a {
    border-bottom: 1px solid
      ${props => props.theme.colors.mobileMenuItemDivider};
    z-index: 10;
    ${media.desktop`
      border-bottom: none;
    `}
  }
`;

const MobileMenu = ({ isCollapsedHeader, isVisible, onClickItem, ...rest }) => {
  const clientHeight = isBrowser ? document.documentElement.clientHeight : 0;
  const vh = Math.max(clientHeight);
  const viewHeight = vh - (isCollapsedHeader ? 49 : 88);
  const transition = useTransition(isVisible, null, {
    from: { opacity: 0, height: 0, paddingTop: 0, paddingBottom: 0 },
    enter: {
      opacity: 1,
      height: viewHeight,
      paddingTop: 40,
      paddingBottom: 20,
    },
    leave: { opacity: 0, height: 0, paddingTop: 0, paddingBottom: 0 },
    config: {
      precision: 0.05,
    },
  });

  return transition.map(
    ({ item, key, props }) =>
      item && (
        <Wrapper
          key={key}
          isVisible={isVisible}
          isCollapsedHeader={isCollapsedHeader}
          {...rest}
          style={props}
        >
          <Container>
            <MenuItems
              isCollapsedHeader={isCollapsedHeader}
              onClickItem={onClickItem}
              contactAsButton={false}
            />
          </Container>
        </Wrapper>
      )
  );
};

MobileMenu.propTypes = {
  isCollapsedHeader: PropTypes.bool,
  dependedRepos: PropTypes.arrayOf(
    PropTypes.shape({
      githubUrl: PropTypes.string,
      slug: PropTypes.string,
    })
  ),
  onClickItem: PropTypes.func,
};

MobileMenu.defaultProps = {
  isCollapsedHeader: false,
  dependedRepos: [],
  onClickItem() {},
};

export default MobileMenu;
