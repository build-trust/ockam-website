import PropTypes from 'prop-types';
import React from 'react';
import styled from '@emotion/styled';

import { media } from '../../utils/emotion';
import Icon from '../Icon';
import Caption from '../Caption';

const ShareButtonStyled = styled('div')`
  display: inline-block;
  ${media.desktop`
    display: block;
    margin-right: 0;
    margin-bottom: 1rem;
  `}
`;

const ShareButton = ({
  button: ButtonComponent,
  url,
  icon: IconComponent,
  children,
  ...rest
}) => (
  <ShareButtonStyled>
    <ButtonComponent
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      url={url}
      {...rest}
    >
      <Icon icon={IconComponent} />
      <Caption fontSize={1} ml={2} fontWeight={2}>
        {children}
      </Caption>
    </ButtonComponent>
  </ShareButtonStyled>
);

ShareButton.propTypes = {
  button: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.elementType,
  ]).isRequired,
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.elementType,
  ]).isRequired,
  url: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default ShareButton;
