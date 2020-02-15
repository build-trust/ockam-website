import React from 'react';

import HeaderTextSection from '../../HeaderTextSection';
import Heading from '../../../Heading';
import Text from '../../../Text';
import SlideDownAnchor from '../../../SlideDownAnchor';
import AnimateOnScroll from "../../../AnimateOnScroll";

const HeroSection = () => {
  return (
    <HeaderTextSection>
      <AnimateOnScroll transformY animateOnce>
        <Heading as="h1">Ockam Edge SDK</Heading>
        <Text mb={4}>
          Ockam Edge SDK includes everything you need to unblock the flow of data
          from your edge environments to the cloud. Developers of all skills and
          backgrounds can now use your components without specific edge
          integration skills or cryptographic security know how.
        </Text>
        <SlideDownAnchor to="#content" />
      </AnimateOnScroll>
    </HeaderTextSection>
  );
};

export default HeroSection;
