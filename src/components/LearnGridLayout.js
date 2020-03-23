import styled from "@emotion/styled";

import {media} from "../utils/emotion";

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
    grid-template-columns: minmax(25rem, 4fr) 10fr 3fr;
  `}
`;

export default LearnGridLayout;
