import styled from '@emotion/styled';
import { space, color } from 'styled-system';

const Hr = styled('hr')(
  props => ({
    border: 'none',
    borderBottom: `1px solid ${props.theme.colors.accentBackground}`,
  }),
  space,
  color
);
export default Hr;
