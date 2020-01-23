import styled from "@emotion/styled";

import Link from "../Link";
import Heading from "../Heading";

const PostLink = styled(Link)`
&:hover {
  ${Heading} {
    color: ${props => props.theme.colors.primary};
    text-decoration: underline;
  }
}
`;

export default PostLink;
