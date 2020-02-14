import React from 'react';
import HeaderTextSection from '../../HeaderTextSection';
import Heading from '../../../Heading';
import Text from '../../../Text';
import SlideDownAnchor from '../../../SlideDownAnchor';

const HeroSection = () => {
  return (
    <HeaderTextSection>
      <Heading as="h1">Ockam Embeded SDK</Heading>
      <Text mb={4}>
        Ockam Embedded SDK includes everything you need to unblock the flow of
        data from your IoT hardware environment to the cloud. Developers of all
        skills and backgrounds can now use your components without specific
        embedded hardware skills or cryptographic know how.
      </Text>

      <SlideDownAnchor to="#content" />
    </HeaderTextSection>
  );
};

HeroSection.propTypes = {};

export default HeroSection;
