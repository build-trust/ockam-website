import React from 'react';
import styled from '@emotion/styled';

import DefaultGridSection from '../../DefaultGridSection';
import microchip from '../../../../assets/product/microchip.svg';
import Text from '../../../Text';
import CheckedListItem from '../../../CheckedListItem';

const SpacingContainer = styled('div')`
  margin-top: 9rem;
`;

const DescriptionSection = () => {
  return (
    <SpacingContainer>
      <DefaultGridSection
        image={microchip}
        direction="imageOnRight"
        title="Ockam Vault for Microchip"
        subtitle="Share trust with anydevice, anywhere."
      >
        <Text>
          Ockam Registry is an open source secure distributed device and service
          registry based on distributed identifiers [DIDs] and verifiable
          claims. Makes it easy to manage an unlimited number of keys and
          credentials and speeds trustful authenticatio
        </Text>
        <CheckedListItem>
          Ockam Router Service
          <Text color="caption">a cloud based routing service</Text>
        </CheckedListItem>
        <CheckedListItem>
          Ockam Cloud SDK
          <Text color="caption">
            allows other services and environments to securely connect with an
            Ockam Router.
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
