import React from 'react';

import Heading from './Heading';
import Text from './Text';
import Code from './Code';
import CodeBlock from './CodeBlock';
import Pre from './Pre';
import Link from './Link';
import Blockquote from './Blockqute';
import Hr from './Hr';
import List from './List';
import ListOrdered from './ListOrdered';
import ListItem from './ListItem';
import LinkedImage from './LinkedImage';
import Table from './Table';
import Strong from './Strong';

const generateHeading = size => props => (
  <Heading {...props} as={size} linked>
    {props.children}
  </Heading>
);

export default {
  h1: props => <Heading as="h1" size="xl" {...props} />,
  h2: props => <Heading as="h1" size="lg" {...props} />,
  h3: props => <Heading as="h1" size="md" {...props} />,
  h4: props => <Heading as="h1" size="sm" {...props} />,
  h5: props => <Heading as="h1" size="xs" {...props} />,
  h6: props => <Heading as="h1" size="xs" {...props} />,
  p: props => <Text {...props} mt={3} mb={3} />,
  pre: Pre,
  code: CodeBlock,
  strong: Strong,
  inlineCode: Code,
  a: Link,
  ul: List,
  ol: ListOrdered,
  li: ListItem,
  img: LinkedImage,
  table: props => <Table {...props} mb={4} />,
  blockquote: Blockquote,
  hr: Hr,
};
