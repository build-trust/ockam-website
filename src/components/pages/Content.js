import styled from '@emotion/styled';

import { media } from '../../utils/emotion';

const Content = styled.div`
  max-width: 100%;
  margin-left: auto;
  padding: 0 2rem;
  z-index: 10;
  margin-right: auto;
  ${media.desktop`
      width: 100%;
      max-width: 100%;
  `};
  ${media.ultraWide`
      width: 110rem;
      max-width: 110rem;
  `}

`;

export default Content;
