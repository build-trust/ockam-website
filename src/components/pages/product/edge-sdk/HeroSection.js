import React from 'react';
import HeaderTextSection from '../../HeaderTextSection';
import Heading from '../../../Heading';
import Text from '../../../Text';
import SlideDownAnchor from '../../../SlideDownAnchor';

const HeroSection = () => {
  return (
    <HeaderTextSection>
      <Heading as="h1">Ockam Edge SDK</Heading>
      <Text mb={4}>
        Ockam Edge SDK includes everything you need to unblock the flow of data
        from your edge environments to the cloud. Developers of all skills and
        backgrounds can now use your components without specific edge
        integration skills or cryptographic know how.
      </Text>
      <SlideDownAnchor to="#content" />
    </HeaderTextSection>
  );
};

export default HeroSection;
