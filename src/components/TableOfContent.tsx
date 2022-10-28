import { Box, Text, List, ListItem, Link as ChakraLink, BoxProps } from '@chakra-ui/react';
import NextLink from 'next/link';

import { TableOfContentItem } from '@typings/TableOfContentItem';

type TableOfContentProps = {
  data: TableOfContentItem[];
} & BoxProps;

const headingLevelsStyles = {
  2: {
    mt: 4,
    fontWeight: 'medium',
  },

  3: {
    mt: 2,
    ml: 3,
    fontWeight: 'medium',
    fontSize: 'sm',
  },

  4: {
    mt: 1,
    ml: 6,
    fontSize: 'xs',
  },
};

const TableOfContent = ({ data, ...restProps }: TableOfContentProps): JSX.Element => (
  <Box w="full" {...restProps}>
    <Text textTransform="uppercase" fontSize="xs" fontWeight="medium">
      Table of content
    </Text>

    <List display="flex" flexDir="column">
      {data.map((item) => (
        <NextLink key={item.id} id={item.id} href={`#${item.id}`} passHref>
          {/* @ts-ignore */}
          <ListItem as={ChakraLink} {...headingLevelsStyles[item.level]}>
            {item.title}
          </ListItem>
        </NextLink>
      ))}
    </List>
  </Box>
);

export default TableOfContent;
