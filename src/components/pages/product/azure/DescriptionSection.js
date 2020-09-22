import React from 'react';
import styled from '@emotion/styled';

import { media } from '../../../../utils/emotion';
import DefaultGridSection from '../../DefaultGridSection';
import azure from '../../../../assets/product/azure.svg';
import azureBox from '../../../../assets/product/azure-box.svg';
import azureBoxMobile from '../../../../assets/product/azure-box-mobile.svg';
import Text from '../../../Text';
import CheckedListItem from '../../../CheckedListItem';

const SpacingContainer = styled('div')`
  margin-top: 9rem;
`;

const ImageBox = styled('div')`
  display: flex;
  margin-bottom: 5rem;
  background: transparent url(${azureBoxMobile}) no-repeat center center;
  background-size: contain;
  min-height: 74rem;
  ${media.tablet`
    margin-bottom: 9.6rem;
    background: transparent url(${azureBox}) no-repeat 45% center;
    background-size: contain;
    min-height: 20rem;
  `}
  width: 100%;
  max-width: 110rem;
`;

const ImageBoxContainer = styled('div')`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 100%;
`;

const DescriptionSection = () => {
  return (
    <SpacingContainer>
      <DefaultGridSection
        image={azure}
        direction="imageOnRight"
        title="Azure HSM Add-on for Ockam"
        subtitle="Simply and safely manage cryptographic keys"
      >
        <Text>
          Ockam and Azure make it simple to keep cryptogrpahic keys safe inside
          the cloud.
        </Text>
        <CheckedListItem>
          Key Generation
          <Text color="caption">Private keys are generated inside the HSM</Text>
        </CheckedListItem>
        <CheckedListItem>
          Key Management
          <Text color="caption">
            Private keys never leave the HSM and can be rotated anytime.
          </Text>
        </CheckedListItem>
        <CheckedListItem>
          Ease-of-Use
          <Text color="caption">
            Ockam brings key management into your applicaiton layer. We've
            already done the nitty-gritty of IT and OT configurations.
          </Text>
        </CheckedListItem>
      </DefaultGridSection>
      <ImageBoxContainer>
        <ImageBox />
      </ImageBoxContainer>
    </SpacingContainer>
  );
};

DescriptionSection.propTypes = {};

export default DescriptionSection;
