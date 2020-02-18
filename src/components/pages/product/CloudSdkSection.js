import React from 'react';

import cloudSdkGraphics from '../../../assets/product/cloud-section.svg';
import cloudSdkMobileGraphics from '../../../assets/product/cloud-section-mobile.svg';
import Text from '../../Text';
import StickySection from '../StickySection';
import Heading from '../../Heading';
import Link from "../../Link";
import Button from "../../Button";
import Subheading from "../Subheading";

const CloudHeader = () => (
  <>
    <Subheading textAlign={{ _: "center", lg: "left"}}>Ockam's Hosted Cloud Services</Subheading>
    <Heading textAlign={{ _: "center", lg: "left"}} as="h2"> Ockam Cloud SDK</Heading>
  </>
);

const CloudSdkSection = () => {
  return (
    <StickySection
      image={cloudSdkGraphics}
      mobileImage={cloudSdkMobileGraphics}
      TitleComponent={CloudHeader}
      environmentTitle="Cloud Environment"
    >
      <Text>
        Application developers rely on lots of open-core cloud services as part of their stack. Datastores, stream processing engines, and Identity and Access Management (IAM) services are common examples. However, application workloads are not limited to the secure confines of the data center anymore; Builders want to connect cloud
        services to applications running in devices at the edge!
      </Text>
      <Text>
        The Ockam Cloud SDK is crafted to create simple interfaces between cloud services, and edge applications. When cloud services include the Ockam Cloud SDK, cloud applications can trust messages sent from applications running in devices at the edge.
      </Text>
      <Button textAlign="center" as={Link} size="small" variant='white' mt={3} to="product/cloud-sdk">Learn more about the  Cloud SDK</Button>
    </StickySection>
  );
};

CloudSdkSection.propTypes = {};

export default CloudSdkSection;
