import React from 'react';

import HeaderTextSection from '../../HeaderTextSection';
import Heading from '../../../Heading';
import Text from '../../../Text';
import SlideDownAnchor from '../../../SlideDownAnchor';
import AnimateOnScroll from '../../../AnimateOnScroll';

const HeroSection = () => {
  return (
    <HeaderTextSection>
      <AnimateOnScroll slideIn="down" animateOnce>
        <Heading as="h1">Ockam Router</Heading>
        <Text mb={4}>
          Ockam Router is a service hosted in a cloud environment that makes it
          easy to route messages between an unlimited number of Ockam
          authenticated devices and applications in your trusted network.
        </Text>
        <SlideDownAnchor to="#content" />
      </AnimateOnScroll>
    </HeaderTextSection>
  );
};

export default HeroSection;
