import styled from '@emotion/styled';

import { media } from '../utils/emotion';

const LearnGridLayout = styled('div')`
  width: 100%;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  max-width: 100%;
  ${media.desktop`
    grid-template-columns: minmax(22rem, 4fr) 10fr 3fr;
  `}
  ${media.ultraWide`
    grid-template-columns: minmax(25rem, 3fr) 10fr 3fr;
  `}
  ${media.xUltraWide`
    grid-template-columns: 30rem auto 25rem;
    max-width: 198rem;
    margin-left: auto;
    margin-right: auto;
  `}


`;

export default LearnGridLayout;
