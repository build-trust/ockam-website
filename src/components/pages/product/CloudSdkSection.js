import React from 'react';

import cloudSdkGraphics from '../../../assets/product/cloud-section.svg';
import cloudSdkMobileGraphics from '../../../assets/product/cloud-section-mobile.svg';
import Text from '../../Text';
import StickySection from '../StickySection';
import Heading from '../../Heading';
import LinkAccent from "../../LinkAccent";

const CloudSdkSection = props => {
  return (
    <StickySection
      image={cloudSdkGraphics}
      mobileImage={cloudSdkMobileGraphics}
      title="Ockam Cloud SDK"
      environmentTitle="Cloud Environment"
    >
      <Heading display={{ _: 'none', lg: 'block' }} as="h2">
        Ockam Cloud SDK
      </Heading>
      <Text>
        Application developers build with your open-core cloud services as part
        of their stack. However, their workloads are not limited to the secure
        confines of the data center anymore; Builders want to connect cloud
        service to the edge!
      </Text>
      <Text>
        The Ockam Cloud SDK is crafted to create a common interface between
        cloud services and to edge networks. When cloud services are paired with
        the Ockam Cloud SDK, applications can trust data from the edge.
      </Text>
      <LinkAccent mt={3} to="product/cloud-sdk">Learn more about the  Cloud SDK</LinkAccent>
    </StickySection>
  );
};

CloudSdkSection.propTypes = {};

export default CloudSdkSection;
