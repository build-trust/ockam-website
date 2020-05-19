import React from 'react';

import DefaultGridSection from '../../DefaultGridSection';
import embeddedGraphics from '../../../../assets/product/subpage-embedded-diagram.svg';
import Text from '../../../Text';
import CheckedListItem from '../../../CheckedListItem';
import AnimateOnScroll from '../../../AnimateOnScroll';

const DescriptionSection = () => {
  return (
    <DefaultGridSection
      image={embeddedGraphics}
      direction="imageOnRight"
      title="The Embedded SDK is written in C and tuned for small devices."
    >
      <AnimateOnScroll slideIn="down" animateOnce>
        <Text>
          Cloud applications can easily connect, authenticate, and trust data
          exchange with your embedded-scale hardware including:
        </Text>
        <CheckedListItem>Processors with secure enclaves</CheckedListItem>
        <CheckedListItem>
          Microcontroller boards equipped with cryptographic security elements
        </CheckedListItem>
        <CheckedListItem>Trusted platform modules (TPM)</CheckedListItem>
      </AnimateOnScroll>
    </DefaultGridSection>
  );
};

DescriptionSection.propTypes = {};

export default DescriptionSection;
