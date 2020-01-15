import PropTypes from "prop-types";
import React from "react";
import styled from "@emotion/styled";
import {darken, rgba} from "polished";

import Card from "../Card";
import CardBody from "../Card/CardBody";

const StyledCard = styled(Card)`
  transition: transform 200ms ease-in-out, box-shadow 200ms ease-in-out;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 0px 29px 3px
      ${props => rgba(darken(0.1, props.theme.colors.background), 0.2)};
  }
`;

const FeatureCard = ({ children, padding }) => (
  <StyledCard>
    <CardBody padding={padding}>{children}</CardBody>
  </StyledCard>
);

FeatureCard.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  padding: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

FeatureCard.defaultProps = {
  padding: '4rem',
};

export default FeatureCard;
