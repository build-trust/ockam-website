import React from 'react';
import styled from "@emotion/styled";

import Content from "../Content";
import cloudDesign from "../../../assets/product/cloud-design.svg";
import { media } from '../../../utils/emotion';
import AnimateOnScroll from "../../AnimateOnScroll";

const Container = styled(Content)`
  margin-top: 4rem;
  margin-bottom: 4rem;
  text-align: center;
  ${media.desktop`
      text-align: left;
  `};
`;

const Image = styled('img')`
  
  ${media.desktop`
      margin-left: 5%;
  `};
  
`;

const CloudSection = () => {
  return (
    <AnimateOnScroll transformY animateOnce>
      <Container>
        <Image src={cloudDesign} alt='cloud' />
      </Container>
    </AnimateOnScroll>
  );
};

export default CloudSection;
