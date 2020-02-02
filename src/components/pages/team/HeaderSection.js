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
      Builders are the ones that change the world. Ockam builds open source tools that empower any developer, of any skill level, to build trustful connected ecosystems.
    </Text>
  </HeaderGridSection>
);

HeaderSection.propTypes = {};

export default HeaderSection;
