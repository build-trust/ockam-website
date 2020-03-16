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
        <Heading as="h1">Ockam Registry</Heading>
        <Text mb={4}>
          The Ockam Registry is a hosted cloud service datastore. It stores Decentralized Identifiers (DIDs), verified credentials, and metadata for the devices in your network. An Ockam Registry is a foundational component in the Trust Architecture of conected systems.
        </Text>
        <SlideDownAnchor to="#content" />
      </AnimateOnScroll>
    </HeaderTextSection>
  );
};

export default HeroSection;
