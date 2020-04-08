import styled from '@emotion/styled';
import { space, color, typography, layout, flexbox } from 'styled-system';
import React, { useState } from 'react';
import LinkIcon from 'emotion-icons/ion-ios/Link';
import isString from 'lodash/isString';
import isObject from 'lodash/isObject';
import PropTypes from 'prop-types';

import Icon from './Icon';

const isChildrenString = props =>
  props && props.children && isString(props.children);
const hasNestedStringChildren = props =>
  isObject(props.children) && isChildrenString(props.children.props);

const generateIdFromName = name => {
  if (!isString(name)) return null;
  return name
    .replace(/\s+/g, '-')
    .replace(/[/!@#$%":^.,?—+|‘’&*()\\]/g, '')
    .toLowerCase();
};

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
  const [focus, setfocus] = useState(false);
  const onSetFocus = value => () => setfocus(value);

  const { linked, ...rest } = props;

  if (!linked) return <BaseHeading {...props} />;
  let id;
  if (isChildrenString(props)) {
    id = generateIdFromName(props.children);
  } else if (hasNestedStringChildren(props)) {
    id = generateIdFromName(props.children.props.children);
  }
  if(!id) return <BaseHeading {...props} />;

  return (
    <BaseHeading
      id={id}
      {...rest}
      onMouseEnter={onSetFocus(true)}
      onMouseLeave={onSetFocus(false)}
    >
      {props.children}
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
  linked: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7']).isRequired,
};

Heading.defaultProps = {
  linked: false,
};

export default Heading;
