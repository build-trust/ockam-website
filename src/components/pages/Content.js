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
      width: 110rem;
      max-width: 110rem;
  `}
`;

export default Content;
