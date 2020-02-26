import React, { Fragment } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import { media } from '../utils/emotion';
import useModal from "../hooks/useModal";
import ContactModal from "../modals/ContactModal";

import Link from './Link';
import Button from './Button';

const Container = styled.div`
  width: auto;
  margin-left: auto;
  display: none;
  ${media.desktop`
    display: block;
  `}

  a:not(${Button}) {
    padding: 2rem;
    ${props => props.isCollapsedHeader && `padding: 1rem 1.5rem;`}
  }
`;

const isPartiallyActive = ({ isPartiallyCurrent }) => {
  return isPartiallyCurrent ? { className: 'active' } : null;
};

const Menu = ({ items, isCollapsedHeader, ...rest }) => {
  const [, showContactModal] = useModal(ContactModal);
  const onShowContactModal = () => showContactModal();
  return (
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
            ml={3}
            getProps={isPartiallyActive}
            key={item.to}
            to={item.to}
            onClick={onShowContactModal}
          >
            {item.label}
          </Button>
        )}
        </Fragment>
    ))}
    </Container>
)};

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
