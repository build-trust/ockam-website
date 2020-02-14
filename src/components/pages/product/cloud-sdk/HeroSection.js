import React from 'react';
import HeaderTextSection from '../../HeaderTextSection';
import Heading from '../../../Heading';
import Text from '../../../Text';
import SlideDownAnchor from "../../../SlideDownAnchor";

const HeroSection = () => {
  return (
    <HeaderTextSection>
      <Heading as="h1">Ockam Cloud SDK</Heading>
      <Text mb={4}>
        Ockam Cloud SDK includes everything you need to unblock the flow of data
        from edge environments to your cloud service. Developers of all skills
        and backgrounds can now use your cloud service without specific edge
        integration skills or cryptographic know how.
      </Text>
      <SlideDownAnchor to="#content"/>
    </HeaderTextSection>
  );
};

export default HeroSection;
