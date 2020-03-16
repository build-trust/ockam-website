import React from 'react';

import HeaderTextSection from '../../HeaderTextSection';
import Heading from '../../../Heading';
import Text from '../../../Text';
import SlideDownAnchor from '../../../SlideDownAnchor';
import AnimateOnScroll from "../../../AnimateOnScroll";

const HeroSection = () => {
  return (
    <HeaderTextSection>
      <AnimateOnScroll slideIn="down" animateOnce>
        <Heading as="h1">Ockam Embedded SDK</Heading>
        <Text mb={4}>
          The Ockam Embedded SDK includes everything you need to trust the flow of data
          between your IoT systems and cloud applications. Developers of all skills
          and backgrounds can now connect IoT to cloud services without specific distributed systems
          integration skills or cryptographic security know how.
        </Text>

        <SlideDownAnchor to="#content" />
      </AnimateOnScroll>
    </HeaderTextSection>
  );
};

HeroSection.propTypes = {};

export default HeroSection;
