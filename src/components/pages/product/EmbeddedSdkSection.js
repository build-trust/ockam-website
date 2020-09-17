import React from 'react';

import embeddedSdkGraphics from '../../../assets/product/embedded-section.svg';
import embeddedSdkMobileGraphics from '../../../assets/product/embedded-section-mobile.svg';
import Text from '../../Text';
import StickySection from '../StickySection';

const EmbeddedSdkSection = () => {
  return (
    <StickySection
      image={embeddedSdkGraphics}
      mobileImage={embeddedSdkMobileGraphics}
      title="Ockam Embedded SDK"
    >
      <Text>
        The Ockam Embedded SDK makes it easy for builders to access the
        cryptographic functions and key storage features of modern chips. Move
        data between the device and the cloud with Ockam’s built in security
        protocols.
      </Text>
      <Text>
        Most application developers struggle to utilize hardware's cryptographic
        functions and typically are not familiar with programming with hardware
        instruction sets. The Ockam Embedded SDK creates simple abstrations to
        these complex functions. This guarantees that application developers use
        cryptographic hardware functions as their engineers intended.
      </Text>
      <Text>
        If you are a manufacturer of chipsets, boards, or complete IoT devices,
        the Ockam Embedded SDK is also for you. You’ve built cryptographic
        capabilities into your silicon, Ockam’s SDK makes it easy for your
        customers to use it securely. Simply include the Ockam Embedded SDK
        along with your instruction set to simplify the developer experience for
        your customers.
      </Text>
    </StickySection>
  );
};

EmbeddedSdkSection.propTypes = {};

export default EmbeddedSdkSection;
