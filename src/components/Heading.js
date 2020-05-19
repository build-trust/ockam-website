import styled from '@emotion/styled';
import { space, color, typography, layout, flexbox } from 'styled-system';
import React, { useState } from 'react';
import LinkIcon from 'emotion-icons/ion-ios/Link';
import PropTypes from 'prop-types';

import Icon from './Icon';

const BaseHeading = styled('h1')(
  props => ({
    fontSize: props.as
      ? props.theme.fontSizes[props.as]
      : props.theme.fontSizes[0],
    textTransform: props.capitalize ? 'capitalize' : 'none',
  }),
  space,
  color,
  typography,
  layout,
  flexbox
);

BaseHeading.displayName = 'Heading';

BaseHeading.defaultProps = {
  mt: 0,
  mb: 3,
  lineHeight: 'heading',
  color: 'heading',
  fontFamily: 'heading',
  fontWeight: 'heading',
  capitalize: true,
};

const AnchorIcon = styled(Icon)`
  :hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const mapIconSize = {
  h1: 24,
  h2: 22,
  h3: 20,
  h4: 18,
  h5: 16,
  h6: 14,
};

const Heading = props => {
  const { id, children } = props;
  const [focus, setFocus] = useState(false);
  const onSetFocus = value => () => setFocus(value);
  const { linked, ...rest } = props;

  if (!linked) return <BaseHeading {...props} />;

  if (!id) return <BaseHeading {...props} />;

  return (
    <BaseHeading
      id={id}
      {...rest}
      onMouseEnter={onSetFocus(true)}
      onMouseLeave={onSetFocus(false)}
    >
      {children}
      <a href={`#${id}`}>
        <AnchorIcon
          ml={1}
          icon={LinkIcon}
          size={mapIconSize[props.as]}
          display={focus ? 'inline' : 'none'}
        />
      </a>
    </BaseHeading>
  );
};

Heading.propTypes = {
  id: PropTypes.string,
  linked: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7']).isRequired,
};

Heading.defaultProps = {
  id: '',
  linked: false,
};

export default Heading;
