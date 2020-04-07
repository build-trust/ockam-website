import React from 'react';
import PropTypes from 'prop-types';

import Link from '../Link';
import useModal from '../../hooks/useModal';
import ContactModal from '../../modals/ContactModal';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import useAllMdxAsTree from '../../hooks/useAllMdxAsTree';
import capitalize from '../../utils/capitalize';
import useActiveMenuStyles from '../../hooks/useActiveMenuStyles';

import ContactButton from "./ContactButton";
import DropdownLink from "./DropdownLink";

const productOptions = [
  {
    label: 'Overview',
    to: 'product',
    isRoot: true,
  },
  {
    label: 'Cloud SDK',
    to: 'product/cloud-sdk',
  },
  {
    label: 'Edge SDK',
    to: 'product/edge-sdk',
  },
  {
    label: 'Embedded SDK',
    to: 'product/embedded-sdk',
  },
  {
    label: 'Registry',
    to: 'product/registry',
  },
  {
    label: 'Router',
    to: 'product/router',
  },
];


const mapNodesToMenuOptions = nodes =>
  nodes.map(node => ({ label: capitalize(node.name), to: node.url }));

const MenuItems = ({ isCollapsedHeader, onClickItem, contactAsButton }) => {
  const { getActiveStyleForPathname } = useActiveMenuStyles();
  const [, showContactModal] = useModal(ContactModal);
  const { tree } = useAllMdxAsTree();
  const LinkFontSize = isCollapsedHeader ? 1 : 2;
  const learnOptions = mapNodesToMenuOptions(tree[0].nodes);

  learnOptions.unshift({
    label: 'Overview',
    to: 'learn',
    isRoot: true,
  });

  return (
    <>
      <DropdownMenu
        onClickItem={onClickItem}
        isCollapsedHeader={isCollapsedHeader}
        options={productOptions}
        triggerEvent="mouseover"
      >
        <DropdownLink fontSize={LinkFontSize} to="/product" label="Product" />
      </DropdownMenu>
      <Link
        fontSize={LinkFontSize}
        onClick={onClickItem}
        title="Team"
        style={getActiveStyleForPathname('/team')}
        padding={{ _: 2, lg: 3 }}
        to="/team"
      >
        Team
      </Link>
      <DropdownMenu
        onClickItem={onClickItem}
        isCollapsedHeader={isCollapsedHeader}
        options={learnOptions}
        triggerEvent="mouseover"
      >
        <DropdownLink fontSize={LinkFontSize} to="/learn" label="Learn" />
      </DropdownMenu>
      <ContactButton
        contactAsButton={contactAsButton}
        isCollapsedHeader={isCollapsedHeader}
        onClick={showContactModal}
        linkFontSize={LinkFontSize}
      />
    </>
  );
};

MenuItems.propTypes = {
  isCollapsedHeader: PropTypes.bool,
  onClickItem: PropTypes.func,
  contactAsButton: PropTypes.bool,
};

MenuItems.defaultProps = {
  isCollapsedHeader: false,
  contactAsButton: true,
  onClickItem() {},
};

export default MenuItems;
