import React from 'react';
import PropTypes from 'prop-types';
import ArrowDown from 'emotion-icons/ion-md/ArrowDown';
import styled from '@emotion/styled';
import { color, space, typography } from 'styled-system';

import Icon from './Icon';

const Anchor = styled('a')(
  props => ({
    ':hover': {
      color: props.theme.colors.accentHover,
    },
    ':active': {
      color: props.theme.colors.accentActive,
    },
    cursor: 'pointer',
    transition: 'all 150ms ease-in-out',
  }),
  color,
  space,
  typography
);

Anchor.defaultProps = {
  color: 'accent',
  fontSize: 'body',
};

const AccentIcon = styled(Icon)`
  &:hover {
    color: ${props => props.theme.colors.accentHover};
  }
  &:active {
    color: ${props => props.theme.colors.accentActive};
  }
`;

const SlideDownAnchor = ({ label, to }) => {
  const handleScroll = () => {
    document.querySelector(to).scrollIntoView({ behavior: 'smooth', top: 200 });
  };

  return (
    <Anchor color="accent" onClick={handleScroll}>
      {label} <AccentIcon ml={2} icon={ArrowDown} size={24} color="accent" />
    </Anchor>
  );
};

SlideDownAnchor.propTypes = {
  label: PropTypes.string,
  to: PropTypes.string.isRequired,
};

SlideDownAnchor.defaultProps = {
  label: 'Show more',
};

export default SlideDownAnchor;
