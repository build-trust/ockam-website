import React from 'react';

import DefaultGridSection from '../../DefaultGridSection';
import embeddedGraphics from '../../../../assets/product/subpage-cloud-diagram.svg';
import Heading from '../../../Heading';
import Text from '../../../Text';
import CheckedListItem from '../../../CheckedListItem';

const DescriptionSection = () => {
  return (
    <DefaultGridSection
      image={embeddedGraphics}
      direction="imageOnRight"
      id="content"
    >
      <Heading as="h2">
        Ockam Embedded SDK is written in C and tuned for small devices.
      </Heading>
      <Text>
        Cloud Apps can easily connect, authenticate and trust data exchange with
        your hardware.
      </Text>
      <CheckedListItem>
        Processors with Secure Enclaves
      </CheckedListItem>
      <CheckedListItem>
        Microcontroller Boards equipped with cryptographic security elements
      </CheckedListItem>
      <CheckedListItem>
        Trusted Platform Modules
      </CheckedListItem>
    </DefaultGridSection>
  );
};

DescriptionSection.propTypes = {};

export default DescriptionSection;
