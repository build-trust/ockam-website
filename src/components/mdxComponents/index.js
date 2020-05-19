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
import Strong from './Strong';

const generateHeading = size => props => (
  <Heading {...props} as={size} linked>
    {props.children}
  </Heading>
);

export default {
  h1: generateHeading('h1'),
  h2: generateHeading('h2'),
  h3: generateHeading('h3'),
  h4: generateHeading('h4'),
  h5: generateHeading('h5'),
  h6: generateHeading('h6'),
  p: props => <Text {...props} mt={3} mb={3} />,
  pre: Pre,
  code: CodeBlock,
  strong: Strong,
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
