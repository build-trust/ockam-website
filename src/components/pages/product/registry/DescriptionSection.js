import React from 'react';

import DefaultGridSection from '../../DefaultGridSection';
import registryGraphics from '../../../../assets/product/subpage-registry-diagram.svg';
import Heading from '../../../Heading';
import Text from '../../../Text';
import CheckedListItem from '../../../CheckedListItem';
import AnimateOnScroll from "../../../AnimateOnScroll";

const DescriptionSection = () => {
  return (
    <DefaultGridSection
      image={registryGraphics}
      direction="imageOnRight"
    >
      <AnimateOnScroll transformY animateOnce>
        <Heading as="h2">Content of Ockam Registry</Heading>
        <Text>Ockam Registry includes:</Text>
        <CheckedListItem>
          Ockam Registry Service
          <Text color="caption">a cloud based storage service</Text>
        </CheckedListItem>
        <CheckedListItem>
          Ockam Cloud SDK
          <Text color="caption">
            allows other services and environments to authenticate and message with an
            Ockam Registry.
          </Text>
        </CheckedListItem>
        <CheckedListItem>
          A cloud based HSM (Hardware Security Module)
        </CheckedListItem>
      </AnimateOnScroll>
    </DefaultGridSection>
  );
};

DescriptionSection.propTypes = {};

export default DescriptionSection;
