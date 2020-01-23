import styled from "@emotion/styled";

import Content from "../pages/Content";
import {media} from "../../utils/emotion";

const BlogContent = styled(Content)`
  background-color: ${props => props.theme.colors.blogTextBackground};
  padding: 6.5rem 3rem 0 3rem;
    ${media.desktop`
      padding: 6.5rem 9.5rem 6.5rem 9.5rem;
      width: 92rem;
      max-width: 92rem;
  `}
`;

export default BlogContent;
