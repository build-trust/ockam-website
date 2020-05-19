import React from 'react';

import DefaultGridSection from '../../DefaultGridSection';
import registryGraphics from '../../../../assets/product/subpage-registry-diagram.svg';
import Text from '../../../Text';
import CheckedListItem from '../../../CheckedListItem';

const DescriptionSection = () => {
  return (
    <DefaultGridSection
      image={registryGraphics}
      direction="imageOnRight"
      title="Content of Ockam Registry"
    >
      <Text>Ockam Registry includes:</Text>
      <CheckedListItem>
        Ockam Registry Service
        <Text color="caption">a cloud based storage service</Text>
      </CheckedListItem>
      <CheckedListItem>
        Ockam Cloud SDK
        <Text color="caption">
          allows other services and environments to authenticate and message
          with an Ockam Registry.
        </Text>
      </CheckedListItem>
      <CheckedListItem>
        A cloud based HSM (Hardware Security Module)
      </CheckedListItem>
    </DefaultGridSection>
  );
};

DescriptionSection.propTypes = {};

export default DescriptionSection;
