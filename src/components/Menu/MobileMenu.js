import React  from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { a, animated } from 'react-spring'

import { media } from '../../utils/emotion';

import MenuItems from "./MenuItems";

const Wrapper = styled(animated.div)`
  display: flex;
  overflow: hidden;
  flex-direction: column;
  align-items: center;
  width: 100%;

  ${media.desktop`
    display: none;
  `}
`;

const Content = styled(a.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`;

const MobileMenu = ({ isCollapsedHeader, onClickItem, ...rest }) => {

  return (
    <Wrapper {...rest}>
      <Content>
        <MenuItems isCollapsedHeader={isCollapsedHeader} onClickItem={onClickItem}  />
      </Content>
    </Wrapper>
  )};

MobileMenu.propTypes = {
  isCollapsedHeader: PropTypes.bool,
  dependedRepos: PropTypes.arrayOf(PropTypes.shape({
    githubUrl: PropTypes.string,
    slug: PropTypes.string,
  })),
  onClickItem: PropTypes.func,
};

MobileMenu.defaultProps = {
  isCollapsedHeader: false,
  dependedRepos: [],
  onClickItem() {},
};

export default MobileMenu;
