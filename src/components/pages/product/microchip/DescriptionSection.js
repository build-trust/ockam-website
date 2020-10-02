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
        title="Microchip Add-ons for Ockam"
        subtitle="Simply and safely manage cryptographic keys"
      >
        <Text>
          Ockam and Microchip make it simple to keep cryptogrpahic keys safe
          outside of the cloud.
        </Text>
        <CheckedListItem>
          Key Generation
          <Text color="caption">
            Private keys are generated inside the chip.
          </Text>
        </CheckedListItem>
        <CheckedListItem>
          Key Management
          <Text color="caption">
            Private keys never leave the chip and are partitioned from
            application processes.
          </Text>
        </CheckedListItem>
        <CheckedListItem>
          Ease-of-Use
          <Text color="caption">
            Ockam brings key management into your applicaiton layer. We've
            already done the nitty-gritty of embedded scurity engineering.
          </Text>
        </CheckedListItem>
      </DefaultGridSection>
    </SpacingContainer>
  );
};

DescriptionSection.propTypes = {};

export default DescriptionSection;
