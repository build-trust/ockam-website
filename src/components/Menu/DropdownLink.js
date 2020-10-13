import React from 'react';
import PropTypes from 'prop-types';
import ChevronDown from 'emotion-icons/material/ExpandMore';
import Cross from 'emotion-icons/material/Close';
import styled from '@emotion/styled';

import Link from '../Link';
import Icon from '../Icon';
import useActiveMenuStyles from '../../hooks/useActiveMenuStyles';

const Dropdown = styled.div`
  z-index: 10;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const DropdownLink = React.forwardRef(
  ({ to, fontSize, label, isDropdownVisible, ...rest }, ref) => {
    const { getActiveStyleForPathname } = useActiveMenuStyles();
    return (
      <Link
        fontSize={fontSize}
        onClick={e => e.preventDefault()}
        to={to}
        position="relative"
        display={{ _: 'flex' }}
        title={label}
        style={getActiveStyleForPathname(to)}
        padding={{ _: 2, lg: 3 }}
        ref={ref}
        {...rest}
      >
        <Dropdown>
          {label}
          <Icon
            ml={{ _: 'auto', lg: 2 }}
            icon={isDropdownVisible ? Cross : ChevronDown}
            size={22}
            color={getActiveStyleForPathname(to).color}
          />
        </Dropdown>
      </Link>
    );
  }
);

DropdownLink.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  fontSize: PropTypes.number.isRequired,
  isDropdownVisible: PropTypes.bool,
};

DropdownLink.defaultProps = {
  isDropdownVisible: false,
};

export default DropdownLink;
