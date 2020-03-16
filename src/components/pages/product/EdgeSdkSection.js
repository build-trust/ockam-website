import React from 'react';

import edgedSdkGraphics from '../../../assets/product/edge-section.svg';
import edgedSdkMobileGraphics from '../../../assets/product/edge-section-mobile.svg';
import Text from '../../Text';
import StickySection from '../StickySection';
import Button from "../../Button";
import Link from "../../Link";

const EdgeSdkSection = () => {
  return (
    <StickySection title="Ockam Edge SDK" image={edgedSdkGraphics} mobileImage={edgedSdkMobileGraphics} environmentTitle="Edge Environment">
      <Text>
        The Ockam Edge SDK is made for ‘linux boxes at the edge’. Gateways, computers, phones and even cars are tasked with moving data between the far edges of networks and the cloud. Typically these devices are equipped with wired or wireless connectivity, significant processing capabilities, and run one of the the many popular distributions of Linux. Data that is generated, consumed, or passed through the edge must be trusted.
      </Text>
      <Text>
        The Ockam Edge SDK supports the end-to-end encrypted message handling that your complex systems integrations demand.
      </Text>
      <Button textAlign="center" as={Link} variant='white' mt={3} to="product/edge-sdk">Learn more about the Edge SDK</Button>
    </StickySection>
  );
};

EdgeSdkSection.propTypes = {};

export default EdgeSdkSection;
