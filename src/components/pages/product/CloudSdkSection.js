import React from 'react';

import cloudSdkGraphics from '../../../assets/product/cloud-section.svg';
import cloudSdkMobileGraphics from '../../../assets/product/cloud-section-mobile.svg';
import Text from '../../Text';
import StickySection from '../StickySection';
import Heading from '../../Heading';
import StartBuildingButton from '../../StartBuildingButton';
import ReadDocsButton from "../../ReadDocsButton";
import Button from "../../Button";

const CloudSdkSection = props => {
  return (
    <StickySection image={cloudSdkGraphics} mobileImage={cloudSdkMobileGraphics} title="Ockam Cloud SDK" environmentTitle="Cloud Environment">
      <Heading display={{_: 'none', lg: 'block'}} as="h2">Ockam Cloud SDK</Heading>
      <Text>
        Application developers build with your open-core cloud services as part
        of their stack. However, their workloads are not limited to the secure
        confines of the data center anymore; Builders want to connect cloud
        service to the edge!
      </Text>
      <StartBuildingButton width='24rem' mb={5} />

      <Text>
        Application developers build with your open-core cloud services as part
        of their stack. However, their workloads are not limited to the secure
        confines of the data center anymore; Builders want to connect cloud
        service to the edge!
      </Text>
      <ReadDocsButton width='24rem' to='/' />
      <Button mb={4} width='24rem' variant='primary'>Learn more</Button>
    </StickySection>
  );
};

CloudSdkSection.propTypes = {};

export default CloudSdkSection;
