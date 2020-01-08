import styled from '@emotion/styled';
import { space, color, typography } from 'styled-system';

const Caption = styled('span')(props => ({
  color: props.theme.colors.caption,
  fontSize: props.theme.fontSizes.caption,
  display: 'inline-block',
}), space, color, typography);

export default Caption;
