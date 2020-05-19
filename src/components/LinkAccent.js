import styled from '@emotion/styled';
import { space } from 'styled-system';

import Link from './Link';

const BaseLink = styled(Link)(space);
const LinkAccent = styled(BaseLink)`
  color: ${props => props.theme.colors.accent};
  font-size: ${props => props.theme.fontSizes.body};
  display: inline-block;
`;

export default LinkAccent;
