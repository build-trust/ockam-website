import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { darken, lighten, rgba } from 'polished';
import { navigate } from 'gatsby';
import isAbsoluteUrl from 'is-absolute-url';

import arrowTopLeftIcon from '../assets/homepage/arrow-top-left-icon.svg';

import Card from './Card/Card';
import CardBody from './Card/CardBody';
import Heading from './Heading';

const StyledCard = styled(Card)`
  position: relative;
  height: 13.6rem;
  cursor: pointer;
  transition: all 300ms cubic-bezier(0.51, 0.92, 0.24, 1.15);
  &:before {
    content: '';
    width: 1.2rem;
    height: 1.2rem;
    position: absolute;
    top: 1rem;
    right: 1rem;
    opacity: 0.6;
    z-index: 2;
    background: url(${arrowTopLeftIcon}) no-repeat;
    transition: all 300ms cubic-bezier(0.51, 0.92, 0.24, 1.15);
  }
  &:hover {
    background-color: ${props =>
      lighten(0.08, props.theme.colors.accentBackground)};
    box-shadow: 0 0 29px 3px
      ${props => rgba(darken(0.2, props.theme.colors.background), 0.2)};
    z-index: 2;
    &:before {
      transform: rotate(45deg) translateX(-50%);
      top: 50%;
      opacity: 1;
    }
  }
`;

const StyledCardBody = styled(CardBody)`
  padding: 3rem 2.5rem;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  transition: padding 300ms cubic-bezier(0.51, 0.92, 0.24, 1.15);
  &:hover {
    padding: 3rem 2rem 3rem 0;
  }
`;

const ImageIcon = styled('img')`
  max-width: 4rem;
`;

const StyledHeading = styled(Heading)`
  margin-left: 1.6rem;
`;

const CardContent = styled(CardBody)`
  border: 1px solid ${props => props.theme.colors.accentBackground};
  flex: 1;
`;

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
`;

const GetStartedCard = ({ children, icon, title, to, onClick }) => {
  const handleClick = e => {
    if (to) {
      if (isAbsoluteUrl(to)) {
        window.location = to;
      } else navigate(to);
    }
    onClick(e);
  };

  return (
    <Wrapper>
      <StyledCard to={to} onClick={handleClick}>
        <StyledCardBody>
          <ImageIcon src={icon} alt="github icon" />
          <StyledHeading as="h5" mb={0} ml={2}>
            {title}
          </StyledHeading>
        </StyledCardBody>
      </StyledCard>
      {children ? (
        <CardContent>
          {' '}
          {children}
        </CardContent>
) : null}
    </Wrapper>
  );
};

GetStartedCard.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  to: PropTypes.string,
  onClick: PropTypes.func,
  icon: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

GetStartedCard.defaultProps = {
  to: '',
  onClick() {},
};

export default GetStartedCard;
