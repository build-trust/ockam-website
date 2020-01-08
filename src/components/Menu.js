import React, { Fragment } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import Link from './Link';
import Button from './Button';

const Container = styled.div`
  a:not(${Button}) {
    padding: 2rem;
    ${props =>
      props.isCollapsedHeader &&
      `
      padding: 1rem 1.5rem;
    `}
  }
`;

const isPartiallyActive = ({ isPartiallyCurrent }) => {
  return isPartiallyCurrent ? { className: 'active' } : null;
};

const Menu = ({ items, isCollapsedHeader, ...rest }) => (
  <Container {...rest} isCollapsedHeader={isCollapsedHeader}>
    {items.map(item => (
      <Fragment key={item.to}>
        {item.type === 'text' && (
          <Link
            fontSize={isCollapsedHeader && 1}
            getProps={isPartiallyActive}
            key={item.to}
            to={item.to}
          >
            {item.label}
          </Link>
        )}
        {item.type === 'button' && (
          <Button
            variant="primary"
            size={isCollapsedHeader ? 'xSmall' : 'small'}
            as={Link}
            ml={3}
            getProps={isPartiallyActive}
            key={item.to}
            to={item.to}
          >
            {item.label}
          </Button>
        )}
      </Fragment>
    ))}
  </Container>
);

Menu.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string,
      label: PropTypes.string,
      type: PropTypes.oneOf(['text', 'button']),
    })
  ).isRequired,
  isCollapsedHeader: PropTypes.bool,
};

Menu.defaultProps = {
  isCollapsedHeader: false,
};

export default Menu;
