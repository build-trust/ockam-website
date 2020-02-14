import React from 'react';

import edgedSdkGraphics from '../../../assets/product/edge-section.svg';
import edgedSdkMobileGraphics from '../../../assets/product/edge-section-mobile.svg';
import Text from '../../Text';
import StickySection from '../StickySection';
import Heading from '../../Heading';
import LinkAccent from "../../LinkAccent";

const EdgeSdkSection = () => {
  return (
    <StickySection title="Ockam Edge SDK" image={edgedSdkGraphics} mobileImage={edgedSdkMobileGraphics} environmentTitle="Edge Environment">
      <Heading display={{_: 'none', lg: 'block'}} as="h2">Ockam Edge SDK</Heading>
      <Text>
        The Ockam Edge SDK is made for ‘linux boxes at the edge’. Gateways, computers, phones and even cars are tasked with moving data between the far edges of networks and the cloud.
      </Text>
      <Text>
        The Ockam Edge SDK supports the end-to-end encrypted messaging your complex systems integrations demand.
      </Text>
      <LinkAccent mt={3} to="product/edge-sdk">Learn more about the Edge SDK</LinkAccent>
    </StickySection>
  );
};

EdgeSdkSection.propTypes = {};

export default EdgeSdkSection;
