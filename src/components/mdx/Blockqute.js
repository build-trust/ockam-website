import styled from '@emotion/styled';
import { transparentize } from 'polished';

const Blockquote = styled('blockquote')`
  border-left: 3px solid ${props => props.theme.colors.brand[500]};
  p {
    color: ${props => transparentize(0.25, props.theme.colors.gray[500])};
  }
  margin-left: 0;
  padding-left: 2rem;
  font-style: italic;
`;
export default Blockquote;
