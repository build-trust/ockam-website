import {
  Box,
  Text,
  List,
  ListItem,
  Link as ChakraLink,
  ListItemProps,
  BoxProps,
  Flex,
} from '@chakra-ui/react';
import NextLink from 'next/link';

import useHeadingsTree from '@hooks/useHeadingsTree';
import useActiveHashInViewport from '@hooks/useActiveHashInViewport';

type TOCItemProps = {
  heading: { id: string; title: string; items?: [] };
  isActive: boolean;
} & ListItemProps;

const TOCListItem = ({ heading, isActive, ...restProps }: TOCItemProps): JSX.Element => (
  <NextLink id={heading.id} href={`#${heading.id}`} passHref>
    {/* @ts-ignore */}
    <ListItem as={ChakraLink} {...restProps} fontWeight={isActive ? 'bold' : 'medium'}>
      {heading.title}
    </ListItem>
  </NextLink>
);

type TableOfContentProps = {
  tableOfContentSource: HTMLDivElement | null;
} & BoxProps;

const TableOfContent = ({
  tableOfContentSource,
  ...restProps
}: TableOfContentProps): JSX.Element | null => {
  const { headingsTree, headingHashesList } = useHeadingsTree({ sourceEl: tableOfContentSource });
  const activeHashId = useActiveHashInViewport(headingHashesList);

  if (!headingsTree?.length) return null;

  return (
    <Box w="full" {...restProps}>
      <Text textTransform="uppercase" fontSize="xs" fontWeight="medium">
        Table of content
      </Text>

      <Flex direction="column" width="full">
        {headingsTree.map(({ items: nestedHeadings, ...heading }) => (
          <List p={0} m={0} display="flex" flexDir="column" key={heading.id}>
            <TOCListItem heading={heading} isActive={activeHashId === heading.id} mt={4} />

            {nestedHeadings?.map((nestedHeading) => (
              <TOCListItem
                key={nestedHeading.id}
                heading={nestedHeading}
                isActive={activeHashId === nestedHeading.id}
                mt={2}
                ml={3}
                fontSize="sm"
              />
            ))}
          </List>
        ))}
      </Flex>
    </Box>
  );
};

export default TableOfContent;
