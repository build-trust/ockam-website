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

const generateHeading = size => props => {
  let id;
  if (props.children && typeof props.children === 'string') {
    id = props.children.replace(/\s+/g, '').toLowerCase();
  } else if (
    typeof props.children === 'object' &&
    props.children.props &&
    typeof props.children.props.children === 'string'
  ) {
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
  // TODO add `blockquote`
  // TODO add `li`
  // TODO add `table`
  blockquote: props => <Blockquote {...props} />,
  hr: props => <Hr {...props} />,
};
