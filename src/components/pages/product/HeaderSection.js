import React from 'react';

import Text from '../../Text';
import Heading from '../../Heading';
import dotsGraphics from '../../../assets/dot-cube-graphics.svg';
import HeaderGridSection from '../HeaderGridSection';


const HeaderSection = () => (
  <HeaderGridSection image={dotsGraphics} mobileImageOpacity={0.3} alignImageRight>
    <Heading as="h1" fontSize={[5, 6, 8]}>
      Building Connected Systems You Can Trust Is Hard
    </Heading>
    <Text mt={4}>
      When open tools replace dedicated skills, individual developers are empowered to focus on building better products.
    </Text>
    <Text>
      The Ockam open source tool belt abstracts complexity and codifies security best practices so you can easily and quickly build secure connected solutions.
    </Text>
  </HeaderGridSection>
);

HeaderSection.propTypes = {};

export default HeaderSection;
