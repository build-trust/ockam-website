import React from 'react';
import styled from "@emotion/styled";

import arrows from '../../../assets/product/arrows.svg';
import Content from "../Content";
import { media } from '../../../utils/emotion';
import AnimateOnScroll from "../../AnimateOnScroll";

const Container = styled(Content)`
  width: 100%;
  margin-top: 4rem;
  margin-bottom: 4rem;
  text-align: center;
  ${media.desktop`
    text-align:left;
  `}
  
`;

const Image = styled('img')`
  margin-left: auto;
  margin-right: auto;
   ${media.desktop`
    margin-left: 22%;
  `}
`;

const SectionArrowSeparator = () => {
  return (
    <AnimateOnScroll transformY offsetTopViewport={300}>
      <Container>
        <Image src={arrows} alt='connection arrow' />
      </Container>
    </AnimateOnScroll>
  );
};

SectionArrowSeparator.propTypes = {

};

export default SectionArrowSeparator;
