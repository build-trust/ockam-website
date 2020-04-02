import React, {useState} from 'react';
import isString from 'lodash/isString';
import styled from "@emotion/styled";
import LinkIcon from 'emotion-icons/ion-ios/Link';

import Icon from "../Icon";

import Heading from './Heading';
import Text from './Text';
import Code from './Code';
import CodeBlock from './CodeBlock';
import Pre from './Pre';
import AnchorTag from './Anchor';
import Blockquote from './Blockqute';
import Hr from './Hr';
import List from './List';
import ListOrdered from './ListOrdered';
import LinkedImage from './LinkedImage';
import Table from './Table';

// @todo Split to separate files and refactor

const isChildrenString = props =>
  props && props.children && typeof props.children === 'string';
const hasNestedStringChildren = props =>
  typeof props.children === 'object' && isChildrenString(props.children.props);

const generateIdFromName = (name) => {
  if(!isString(name)) return null;
  return name.replace(/\s+/g, '-').replace(/[/!@#$%":^.,?—+|‘’&*()\\]/g,'').toLowerCase();
};

const mapIconSize = {
  'h1': 24,
  'h2': 22,
  'h3': 20,
  'h4': 18,
  'h5': 16,
  'h6': 14,
};

const AnchorIcon = styled(Icon)`
  :hover {
  color: ${props => props.theme.colors.primary};
  }
`;

const generateHeading = size => props => {
  const [focus, setfocus] = useState(false);
  const onSetFocus = value => () => setfocus(value);
  let id;
  if (isChildrenString(props)) {
    id = generateIdFromName(props.children)
  } else if (hasNestedStringChildren(props)) {
    id = generateIdFromName(props.children.props.children)
  }
  return (
    <Heading onMouse id={id} {...props} as={size} onMouseEnter={onSetFocus(true)} onMouseLeave={onSetFocus(false)}>
      {props.children}
      <a href={`#${id}`}>
        <AnchorIcon ml={1} icon={LinkIcon} size={mapIconSize[size]} display={focus ? 'inline' : 'none'} />
      </a>
    </Heading>
  );
};

export default {
  h1: generateHeading('h1'),
  h2: generateHeading('h2'),
  h3: generateHeading('h3'),
  h4: generateHeading('h4'),
  h5: generateHeading('h5'),
  h6: generateHeading('h6'),
  p: props => <Text {...props} mt={3} mb={4} />,
  pre: Pre,
  code: CodeBlock,
  inlineCode: props => <Code {...props} />,
  a: props => <AnchorTag {...props} />,
  ul: props => <List {...props} />,
  ol: props => <ListOrdered {...props} />,
  img: props => <LinkedImage {...props} />,
  // TODO add `blockquote`
  // TODO add `li`
  table: props => <Table {...props} mb={4} />,
  blockquote: props => <Blockquote {...props} />,
  hr: props => <Hr {...props} />,
};
