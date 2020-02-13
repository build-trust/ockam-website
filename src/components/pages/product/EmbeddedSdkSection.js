import React from 'react';

import embeddedSdkGraphics from '../../../assets/product/embedded-section.svg';
import embeddedSdkMobileGraphics from '../../../assets/product/embedded-section-mobile.svg';
import Text from '../../Text';
import StickySection from '../StickySection';
import Heading from '../../Heading';
import ReadDocsButton from "../../ReadDocsButton";
import Button from "../../Button";

const EmbeddedSdkSection = () => {
  return (
    <StickySection image={embeddedSdkGraphics} mobileImage={embeddedSdkMobileGraphics} title="Ockam Embedded SDK" environmentTitle="Embedded Environment">
      <Heading display={{_: 'none', lg: 'block'}} as="h2">Ockam Embedded SDK</Heading>
      <Text>
        The Ockam Embedded SDK makes it easy for builders of connected systems to access the cryptographic capabilities and key storage features of modern chips.
      </Text>
      <ReadDocsButton width='24rem' to='/' />
      <Button mb={5} width='24rem' variant='primary'>Learn more</Button>
      <Text>
        If you are a manufacturer of chipsets, boards or IoT devices the Ockam Embedded SDK is for you. You’ve built cryptographic capabilities into your silicon, Ockam’s SDK makes it easy for your customers to use it securely. Move data between the device and the cloud with Ockam’s built in security.
      </Text>
    </StickySection>
  );
};

EmbeddedSdkSection.propTypes = {};

export default EmbeddedSdkSection;
