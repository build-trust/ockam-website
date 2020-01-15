import React from 'react';

import DefaultGridSection from "../DefaultGridSection";
import cloudGraphics from '../../../assets/cloud-graphics.svg'
import Heading from "../../Heading";
import Text from "../../Text";
import Subheading from "../Subheading";
import Button from "../../Button";
import useSiteMetadata from "../../../hooks/useSiteMetadata";
import Link from "../../Link";


const SdkConnectSection = () => {
  const { ockamLibraryRepo } = useSiteMetadata();

  return (
    <>
      <DefaultGridSection direction='imageOnRight' image={cloudGraphics}>
        <Subheading mb={3}>FOR CLOUD SERVICE PRODUCT MANAGERS</Subheading>
        <Heading as='h2'>Ockam SDKConnect</Heading>
        <Text>As open source developers we build with stacks, not platforms. However, integrating time series datastores, access management tools, and analytics engines into highly distributed connected devices is hard.</Text>
        <Text>The Ockam open source SDK helps to make these integrations easy, so that app builders and system integrators can focus on what they do best - not complicated integrations. If you are a product manager of a cloud service that utilizes connected device data or controls IoT at the edge, then Ockam SDKConnect is for you.</Text>
        <Button mt={3} outline='primary' size='small' as={Link} to={ockamLibraryRepo}>Add support for your service</Button>
      </DefaultGridSection>
    </>
  );
};

export default SdkConnectSection;
