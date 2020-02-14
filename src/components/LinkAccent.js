import React from 'react';
import PropTypes from 'prop-types';
import styled from "@emotion/styled";
import Link from "./Link";
import { space } from 'styled-system';

const BaseLink = styled(Link)(space);
const LinkAccent = styled(BaseLink)`
  color: ${props => props.theme.colors.accent};
  font-size: ${props => props.theme.fontSizes.body};
  display: inline-block;
`;

export default LinkAccent;
