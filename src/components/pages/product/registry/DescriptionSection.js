import React from 'react';
import styled from '@emotion/styled';

import DefaultGridSection from '../../DefaultGridSection';
import registryGraphics from '../../../../assets/product/subpage-registry-diagram.svg';
import Text from '../../../Text';
import CheckedListItem from '../../../CheckedListItem';

const SpacingContainer = styled('div')`
  margin-top: 9rem;
`;

const DescriptionSection = () => {
  return (
    <SpacingContainer>
      <DefaultGridSection
        image={registryGraphics}
        direction="imageOnRight"
        title="Ockam Registry"
        subtitle="Share trust with any device, or any application, anywhere."
      >
        <Text>
          Ockam Registry is an open source secure distributed device and service
          registry based on distributed identifiers [DIDs] and verifiable
          claims. Makes it easy to manage an unlimited number of keys and
          credentials and speeds trustful authentication.
        </Text>
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
    </SpacingContainer>
  );
};

DescriptionSection.propTypes = {};

export default DescriptionSection;
