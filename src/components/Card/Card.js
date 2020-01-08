import styled from '@emotion/styled';
import { space, color, grid, border  } from 'styled-system';

const Card = styled('div')(space, color, grid, border);

Card.defaultProps = {
  backgroundColor: 'accentBackground',
  borderRadius: 'default',
};

export default Card;
