import PropTypes from "prop-types";
import React from "react";
import styled from "@emotion/styled";

import {media} from "../../utils/emotion";

const ShareButtonStyled = styled('div')`
  margin-right: 2rem;
  display: inline-block;
  ${media.desktop`
    display: block;
    margin-right: 0;
    margin-bottom: 1rem;
  `}
`;

const ShareButton = ({ button: Button, url, children, ...rest }) => (
  <ShareButtonStyled>
    <Button
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      url={url}
      {...rest}
    >
      {children}
    </Button>
  </ShareButtonStyled>
);

ShareButton.propTypes = {
  button: PropTypes.oneOfType([
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
