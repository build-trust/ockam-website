import styled from '@emotion/styled';

import { media } from '../../utils/emotion';
import BaseContent from '../Content';

const Content = styled(BaseContent)`
  z-index: 10;
  ${media.desktop`
      width: 100%;
      max-width: 100%;
  `};
  ${media.ultraWide`
      width: 114rem;
      max-width: 114rem;
  `}
`;

export default Content;
