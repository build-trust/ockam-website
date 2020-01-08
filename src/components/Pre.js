import styled from '@emotion/styled';
import { fontFamily, space, color } from 'styled-system';

const Pre = styled('pre')(
  {
    overflow: 'auto',
  },
  fontFamily,
  space,
  color
);

Pre.displayName = 'Pre';
Pre.defaultProps = {
  fontSize: 1,
  m: 0,
};

export default Pre;
