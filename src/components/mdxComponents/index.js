import React from 'react';

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

const isChildrenString = props =>
  props && props.children && typeof props.children === 'string';
const hasNestedStringChildren = props =>
  typeof props.children === 'object' && isChildrenString(props.children.props);

const generateHeading = size => props => {
  let id;
  if (isChildrenString(props)) {
    id = props.children.replace(/\s+/g, '').toLowerCase();
  } else if (hasNestedStringChildren(props)) {
    id = props.children.props.children.replace(/\s+/g, '').toLowerCase();
  }
  return <Heading id={id} {...props} as={size} />;
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
