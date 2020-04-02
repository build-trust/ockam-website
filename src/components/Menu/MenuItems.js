import React from 'react';
import PropTypes from 'prop-types';
import ChevronDown from 'emotion-icons/fa-solid/ChevronDown';

import Link from '../Link';
import Button from '../Button';
import useModal from '../../hooks/useModal';
import ContactModal from '../../modals/ContactModal';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import Icon from '../Icon';
import useAllMdxAsTree from '../../hooks/useAllMdxAsTree';
import capitalize from '../../utils/capitalize';
import useActiveMenuStyles from "../../hooks/useActiveMenuStyles";

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

const ContactButton = ({ contactAsButton, isCollapsedHeader, onClick, linkFontSize }) => {
  if(contactAsButton) return (
    <Button
      variant="primary"
      size={isCollapsedHeader ? 'small' : 'default'}
      ml={{
        _: 0,
        lg: 3,
      }}
      onClick={onClick}
    >
      Contact us
    </Button>
  );
  return (
    <Link
      fontSize={linkFontSize}
      onClick={onClick}
      title="Contact us"
      padding={{
        _: 2,
        lg: 3,
      }}
    >
      Contact us
    </Link>
  );
};

ContactButton.propTypes = {
  contactAsButton: PropTypes.bool.isRequired,
  isCollapsedHeader: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  linkFontSize: PropTypes.number.isRequired,
};

ContactButton.defaultProps = {
  isCollapsedHeader: false,
};

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
        <Link
          fontSize={LinkFontSize}
          onClick={e => e.preventDefault()}
          to="/product"
          title="Product"
          style={getActiveStyleForPathname('/product')}
          padding={{
            _: 2,
            lg: 3,
          }}
          pl={{
            _: 2,
            lg: 0,
          }}
        >
          Product
          <Icon
            ml={2}
            icon={ChevronDown}
            size={12}
            color={getActiveStyleForPathname('/product').color}
          />
        </Link>
      </DropdownMenu>
      <div>
        <Link
          fontSize={LinkFontSize}
          onClick={onClickItem}
          title="Team"
          style={getActiveStyleForPathname('/team')}
          padding={{
            _: 2,
            lg: 3,
          }}
          to="/team"
        >
          Team
        </Link>
      </div>
      <DropdownMenu
        onClickItem={onClickItem}
        isCollapsedHeader={isCollapsedHeader}
        options={learnOptions}
        triggerEvent="mouseover"
      >
        <Link
          fontSize={LinkFontSize}
          style={getActiveStyleForPathname('/learn')}
          onClick={e => e.preventDefault()}
          title="Learn"
          to="/learn"
          padding={{
            _: 2,
            lg: 3,
          }}
        >
          Learn
          <Icon
            ml={2}
            icon={ChevronDown}
            size={12}
            color={getActiveStyleForPathname('/learn').color}
          />
        </Link>
      </DropdownMenu>
      <div>
        <ContactButton
          contactAsButton={contactAsButton}
          isCollapsedHeader={isCollapsedHeader}
          onClick={showContactModal}
          linkFontSize={LinkFontSize}
        />
      </div>
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
