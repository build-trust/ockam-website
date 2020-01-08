import styled from '@emotion/styled';
import { space, color, typography } from 'styled-system';

const Subheading = styled('h6')(
  {
    textTransform: 'uppercase',
  },
  space,
  color,
  typography
);

Subheading.defaultProps = {
  color: 'accent',
  fontWeight: 0,
  fontSize: 'bodySmall',
  mb: 4,
  mt: 0,
  letterSpacing: 4,
};

export default Subheading;
