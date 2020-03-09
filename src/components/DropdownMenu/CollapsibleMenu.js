import React, {useState} from "react";
import PropTypes from "prop-types";

import DropdownOptions from "./DropdownOptions";

const CollapsibleMenu = ({children, isCollapsedHeader, onClickItem, options}) => {
  const [show, setShow] = useState(false);
  const onClickElement = (e) => {
    e.preventDefault();
    setShow(val => !val)
  };

  return (
    <>
      {React.cloneElement(children, {onClick: onClickElement})}
      {show && <DropdownOptions onClickItem={onClickItem} isCollapsedHeader={isCollapsedHeader} options={options} />}
    </>
  )
};

CollapsibleMenu.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
  })).isRequired,
  isCollapsedHeader: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  onClickItem: PropTypes.func,
};

CollapsibleMenu.defaultProps = {
  isCollapsedHeader: false,
  onClickItem() {},
};

export default CollapsibleMenu;
