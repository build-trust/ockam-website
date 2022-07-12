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

const generateHeading = (size) => (props) =>
  (
    <Heading {...props} as={size} linked>
      {props.children}
    </Heading>
  );

export default {
  h1: (props) => (
    <Heading as="h1" fontSize={{ base: 'xl', sm: '3xl' }} mb={{ base: 6, sm: 10 }} {...props} />
  ),
  h2: (props) => (
    <Heading as="h2" fontSize={{ base: 'xl', sm: '3xl' }} mb={{ base: 6, sm: 10 }} {...props} />
  ),
  h3: (props) => (
    <Heading as="h3" fontSize={{ base: 'xl', sm: '3xl' }} mb={{ base: 6, sm: 10 }} {...props} />
  ),
  h4: (props) => (
    <Heading as="h4" fontSize={{ base: 'xl', sm: '3xl' }} mb={{ base: 6, sm: 10 }} {...props} />
  ),
  h5: (props) => (
    <Heading as="h5" fontSize={{ base: 'xl', sm: '3xl' }} mb={{ base: 6, sm: 10 }} {...props} />
  ),
  h6: (props) => (
    <Heading as="h6" fontSize={{ base: 'xl', sm: '3xl' }} mb={{ base: 6, sm: 10 }} {...props} />
  ),
  p: (props) => <Text {...props} mb={6} color="inherit" />,
  pre: (props) => <Pre {...props} mb={6} />,
  code: (props) => <CodeBlock {...props} mb={6} />,
  strong: (props) => <Strong {...props} mb={6} />,
  inlineCode: (props) => <Code {...props} mb={6} />,
  a: (props) => <Link {...props} mb={6} />,
  ul: (props) => <List {...props} mb={6} />,
  ol: (props) => <ListOrdered {...props} mb={6} />,
  li: ListItem,
  img: (props) => <LinkedImage {...props} mb={6} />,
  table: (props) => <Table {...props} mb={4} />,
  blockquote: Blockquote,
  hr: Hr,
};
