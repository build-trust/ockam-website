import React from 'react';

import Text from '../../Text';
import Heading from '../../Heading';
import puzzleGraphics from '../../../assets/puzzle-graphics.svg';
import HeaderGridSection from '../HeaderGridSection';


const HeaderSection = () => (
  <HeaderGridSection image={puzzleGraphics} mobileImageOpacity={0.3} alignImageRight>
    <Heading as="h1" fontSize={[5, 6, 8]}>
      We Are On A Mission.
      {' '}
      <br />
      Ockam Builds For Builders.
    </Heading>
    <Text mt={4}>
      Builders of connected device systems are going to change the world. Ockam is building the infrastructure and the open source tools that will enable any developer, of any skill level, to build these ecosystems to be secure, trustworthy, and interoperable.
    </Text>
  </HeaderGridSection>
);

HeaderSection.propTypes = {};

export default HeaderSection;
