import styled from '@emotion/styled';
import { grid } from 'styled-system';

const BaseFieldContainer = styled.label`
  display: flex;
  flex-flow: column nowrap;
  width: ${props => (props.width ? props.width : '100%')};
  margin: 0 0 0.4rem;
`;

const FieldContainer = styled(BaseFieldContainer)(grid);

export default FieldContainer;
