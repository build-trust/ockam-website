import React from 'react';
import HeaderTextSection from '../../HeaderTextSection';
import Heading from '../../../Heading';
import Text from '../../../Text';
import SlideDownAnchor from '../../../SlideDownAnchor';

const HeroSection = () => {
  return (
    <HeaderTextSection>
      <Heading as="h1">Ockam Registry</Heading>
      <Text mb={4}>
        Ockam Registry is an open source secure distributed device and service
        registry based on distributed identifiers [DIDs] and verifiable claims.
        Makes it easy to manage an unlimited number of keys and credentials and
        speeds trustful authentication
      </Text>
      <SlideDownAnchor to="#content" />
    </HeaderTextSection>
  );
};

export default HeroSection;
