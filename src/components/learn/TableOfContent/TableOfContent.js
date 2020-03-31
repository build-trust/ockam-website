import React from 'react';
import PropTypes from 'prop-types';
import styled from "@emotion/styled";

import config from '../../../../config';
import BaseHeading from "../../Heading";
import BaseList from '../../List';
import { media } from '../../../utils/emotion';

import TableOfContentItem from "./TableOfContentItem";

const StickyContainer = styled('div')`

  border-left: 1px solid ${props => props.theme.colors.tableOfContent.separatorBorder};
  display: none;
  margin-bottom: 4rem;
  ${media.desktop`
    display: block;
  `}
`;

const Heading = styled(BaseHeading)`
  text-transform: uppercase;
  font-weight: 500;
  margin-bottom: 0;
  padding-left: 1rem;
`;

const List = styled(BaseList)`
  margin-left: 0;
  margin-bottom: 0;
  padding-left: 0;
  ${TableOfContentItem} {
    margin: 0;
  }
`;

const isEmptyTableOfContent = (items) => {
  if(!items || items.length === 0) return true;
  return !items.some(lvl1 => lvl1.items && lvl1.items.length > 0)
};

const Item = ({item, level, isActive}) => (
  <TableOfContentItem level={level} isActive={isActive}>
    <a href={item.url}>{item.title}</a>
  </TableOfContentItem>
);

Item.propTypes = {
  item: PropTypes.shape({
    url: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
  level: PropTypes.number.isRequired,
  isActive: PropTypes.bool.isRequired,
};

const TableOfContent = ({ items, activeHash }) => {
  if(isEmptyTableOfContent(items)) return null;
  const itemsWithoutRoot = items[0].items;
  return (
    <StickyContainer>
      <Heading fontSize="caption" fontFamily="special" as="h6">On this page</Heading>
      <List>
        {itemsWithoutRoot.map(lvl1Item => (
          <>
            <Item item={lvl1Item} level={1} isActive={activeHash === lvl1Item.url} />
            {config.tableOfContentDeep > 1 && lvl1Item.items && lvl1Item.items.map(lvl2Item => (
              <Item item={lvl2Item} level={2} isActive={activeHash === lvl2Item.url} />
            ))}
          </>
        ))}
      </List>
    </StickyContainer>
  );
};

TableOfContent.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string,
    title: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
      url: PropTypes.string,
      title: PropTypes.string,
    })),
  })),
  activeHash: PropTypes.string,
};

TableOfContent.defaultProps = {
  items: [],
  activeHash: '',
};

export default TableOfContent;
