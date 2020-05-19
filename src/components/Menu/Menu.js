import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import { media } from '../../utils/emotion';

import MenuItems from './MenuItems';

const Container = styled.div`
  width: auto;
  margin-left: auto;
  display: none;
  ${media.desktop`
    display: flex;
    align-items: center;
  `}
`;

const Menu = ({ isCollapsedHeader, contactAsButton, ...rest }) => {
  return (
    <Container {...rest}>
      <MenuItems
        isCollapsedHeader={isCollapsedHeader}
        contactAsButton={contactAsButton}
      />
    </Container>
  );
};

Menu.propTypes = {
  isCollapsedHeader: PropTypes.bool,
  contactAsButton: PropTypes.bool,
};

Menu.defaultProps = {
  isCollapsedHeader: false,
  contactAsButton: true,
};

export default Menu;
