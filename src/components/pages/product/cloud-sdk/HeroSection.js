import React from 'react';

import HeaderTextSection from '../../HeaderTextSection';
import Heading from '../../../Heading';
import Text from '../../../Text';
import SlideDownAnchor from "../../../SlideDownAnchor";
import AnimateOnScroll from "../../../AnimateOnScroll";

const HeroSection = () => {
  return (
    <HeaderTextSection>
      <AnimateOnScroll slideIn="down">
        <Heading as="h1">Ockam Cloud SDK</Heading>
        <Text mb={4}>
            The Ockam Cloud SDK includes everything you need to trust the flow of data
            from edge environments into the cloud services that your applications depend upon. Developers of all skills
            and backgrounds can now connect cloud services to the edge without specific distributed systems
            integration skills or cryptographic security know how.
        </Text>
        <SlideDownAnchor to="#content" />
      </AnimateOnScroll>
    </HeaderTextSection>
  );
};

export default HeroSection;
