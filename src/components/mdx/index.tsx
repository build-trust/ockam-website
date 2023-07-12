import { MDXRemoteProps } from 'next-mdx-remote';
import { SimpleGrid } from '@chakra-ui/react';

import StyleGuideResourceItem from '@root/components/StyleGuideResourceItem';
import { Feature } from '@root/views/homepage/Features';

import Paragraph from './Paragraph';
import headingsComponents from './Headings';
import CodeInline from './CodeInline';
import CodeBlock from './CodeBlock';
import Pre from './Pre';
import Link from './Link';
import Blockquote from './Blockqute';
import Strong from './Strong';
import Hr from './Hr';
import List from './List';
import ListOrdered from './ListOrdered';
import ListItem from './ListItem';
import LinkedImage from './LinkedImage';
import Table, { tableIntegralComponents } from './Table';
import AspectRatio from './AspectRatio';
import Video from './Video';
import Alert from './Alert';

export default {
  p: Paragraph,
  pre: Pre,
  code: CodeBlock,
  inlineCode: CodeInline,
  strong: Strong,
  a: Link,
  ul: List,
  ol: ListOrdered,
  li: ListItem,
  img: LinkedImage,
  blockquote: Blockquote,
  hr: Hr,
  table: Table,
  ...tableIntegralComponents,
  ...headingsComponents,
  AspectRatio,
  StyleGuideResourceItem,
  Video,
  Alert,
  Feature,
  SimpleGrid,
} as MDXRemoteProps['components'];
