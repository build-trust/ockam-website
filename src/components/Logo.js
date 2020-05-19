import React from 'react';
import styled from '@emotion/styled';
import { layout, space } from 'styled-system';

import useThemeLogo from '../hooks/useThemeLogo';

const BaseLogo = styled.img(space, layout);

BaseLogo.defaultProps = {
  height: '5.5rem',
};

const Logo = props => {
  const logo = useThemeLogo();
  return <BaseLogo src={logo} alt="Ockam logo" {...props} />;
};

export default Logo;
