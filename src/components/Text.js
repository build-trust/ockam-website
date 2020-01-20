import { space, color, typography  } from 'styled-system';
import styled from '@emotion/styled';

const Text = styled('p')(
  space,
  color,
  typography
);
Text.defaultProps = {
  marginTop: 0,
  fontFamily: 'body',
  lineHeight: 'body',
  mb: 3,
  fontWeight: 'body',
  fontSize: 'body',
};
Text.displayName = 'Text';

export default Text;
