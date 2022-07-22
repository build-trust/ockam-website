import {
  chakra,
  Table as ChakraTable,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
  TableProps,
  TableRowProps,
  TableCellProps,
  TableColumnHeaderProps,
  TableBodyProps,
  TableHeadProps,
  TableFooterProps,
  TableCaptionProps,
  HTMLChakraProps,
} from '@chakra-ui/react';

const Table = (props: TableProps): JSX.Element => (
  <TableContainer fontFamily="blogPostBody">
    <ChakraTable {...props} mb={4} />
  </TableContainer>
);

export const tableIntegralComponents = {
  tr: (props: TableRowProps): JSX.Element => <Tr {...props} />,
  td: (props: TableCellProps): JSX.Element => <Td {...props} />,
  th: (props: TableColumnHeaderProps): JSX.Element => <Th fontFamily="blogPostBody" {...props} />,
  tbody: (props: TableBodyProps): JSX.Element => <Tbody {...props} />,
  thead: (props: TableHeadProps): JSX.Element => <Thead {...props} />,
  tfoot: (props: TableFooterProps): JSX.Element => <Tfoot {...props} />,
  caption: (props: TableCaptionProps): JSX.Element => <TableCaption {...props} />,
  col: (props: HTMLChakraProps<'col'>): JSX.Element => <chakra.col {...props} />,
  colgroup: (props: HTMLChakraProps<'colgroup'>): JSX.Element => <chakra.colgroup {...props} />,
};

export default Table;
