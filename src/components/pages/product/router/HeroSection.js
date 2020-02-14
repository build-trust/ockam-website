import React from 'react';
import HeaderTextSection from '../../HeaderTextSection';
import Heading from '../../../Heading';
import Text from '../../../Text';
import SlideDownAnchor from '../../../SlideDownAnchor';

const HeroSection = () => {
  return (
    <HeaderTextSection>
      <Heading as="h1">Ockam Router</Heading>
      <Text mb={4}>
        Ockam Router is a service hosted in a cloud environment that makes it
        easy to route messages between an unlimited number of Ockam
        authenticated connections in your business.
      </Text>
      <SlideDownAnchor to="#content" />
    </HeaderTextSection>
  );
};

export default HeroSection;
