import styled from '@emotion/styled';
import { space, color, typography, layout, border } from 'styled-system';

const BaseInput = styled('input')`
  transition: border-color 200ms ease-in-out;
  &::placeholder {
    color: ${props => props.theme.colors.inputPlaceholder};
  }
  &:focus {
    border: 1px solid ${props => props.theme.colors.primary};
  }
`;
const Input = styled(BaseInput)(
  props => ({
    borderColor: props.errors
      ? props.theme.colors.accent
      : props.theme.colors.inputBorder,
  }),
  space,
  color,
  typography,
  layout,
  border
);

Input.defaultProps = {
  borderWidth: 1,
  borderStyle: 'solid',
  paddingX: '1.7rem',
  height: '4.8rem',
  fontSize: 'bodySmall',
  backgroundColor: 'inputBackground',
  color: 'inputText',
  borderRadius: 'default',
};

export default Input;
