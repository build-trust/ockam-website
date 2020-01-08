import styled from '@emotion/styled';
import { transparentize } from 'polished';

const Blockquote = styled('blockquote')`
  border-left: 3px solid ${props => props.theme.colors.accentBackground};
  p {
    color: ${props => transparentize(0.25, props.theme.colors.text)};
  }
  margin-left: 0;
  padding-left: 2rem;
  font-style: italic;
`;

export default Blockquote;
