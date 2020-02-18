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
          The Ockam Edge SDK includes everything you need to trust the flow of data
          from edge environments into the cloud applications you depend upon. Developers of all skills
          and backgrounds can now connect cloud applications to the edge without specific distributed systems
          integration skills or cryptographic security know how.
        </Text>
        <SlideDownAnchor to="#content" />
      </AnimateOnScroll>
    </HeaderTextSection>
  );
};

export default HeroSection;
