import React from 'react';

import cloudSdkGraphics from '../../../assets/product/cloud-section.svg';
import cloudSdkMobileGraphics from '../../../assets/product/cloud-section-mobile.svg';
import Text from '../../Text';
import StickySection from '../StickySection';
import Heading from '../../Heading';
import Subheading from '../Subheading';

const CloudHeader = () => (
  <>
    <Subheading textAlign={{ _: 'center', lg: 'left' }}>
      Environment Specific Software Development Kits
    </Subheading>
    <Heading linked textAlign={{ _: 'center', lg: 'left' }} as="h2">
      Ockam Cloud SDK
    </Heading>
  </>
);

const CloudSdkSection = () => {
  return (
    <div id="sdk">
      <StickySection
        image={cloudSdkGraphics}
        mobileImage={cloudSdkMobileGraphics}
        TitleComponent={CloudHeader}
      >
        <Text>
          Application developers rely on lots of open-core cloud services as
          part of their stack. Datastores, stream processing engines, and
          Identity and Access Management (IAM) services are common examples.
          However, application workloads are not limited to the secure confines
          of the data center anymore; Builders want to connect cloud services to
          applications running in devices at the edge!
        </Text>
        <Text>
          The Ockam Cloud SDK is crafted to create simple interfaces between
          cloud services, and edge applications. When cloud services include the
          Ockam Cloud SDK, cloud applications can trust messages sent from
          applications running in devices at the edge.
        </Text>
      </StickySection>
    </div>
  );
};

CloudSdkSection.propTypes = {};

export default CloudSdkSection;
