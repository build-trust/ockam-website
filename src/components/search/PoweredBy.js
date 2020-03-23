import styled from "@emotion/styled";
import Algolia from "emotion-icons/fa-brands/Algolia";
import React from "react";

import Icon from "../Icon";

const Container = styled('div')`
  font-size: 1.2rem;
  color: ${props => props.theme.colors.search.caption};
  padding: 1rem 3rem;
  text-align: right;
`;

const PoweredBy = () => (
  <Container>
    Powered by
    {` `}
    <a href="https://algolia.com">
      <Icon icon={Algolia} size="1em" />
      {' '}
      Algolia
    </a>
  </Container>
);

export default PoweredBy;
