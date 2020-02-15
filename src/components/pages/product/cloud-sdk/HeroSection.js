import React from 'react';

import HeaderTextSection from '../../HeaderTextSection';
import Heading from '../../../Heading';
import Text from '../../../Text';
import SlideDownAnchor from "../../../SlideDownAnchor";
import AnimateOnScroll from "../../../AnimateOnScroll";

const HeroSection = () => {
  return (
    <AnimateOnScroll transformY animateOnce>
      <HeaderTextSection>
        <Heading as="h1">Ockam Cloud SDK</Heading>
        <Text mb={4}>
          Ockam Cloud SDK includes everything you need to unblock the flow of data
          from edge environments to your cloud service. Developers of all skills
          and backgrounds can now use your cloud service without specific edge
          integration skills or cryptographic security know how.
        </Text>
        <SlideDownAnchor to="#content" />
      </HeaderTextSection>
    </AnimateOnScroll>
  );
};

export default HeroSection;
