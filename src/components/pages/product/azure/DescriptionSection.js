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
        title="Ockam Vault for Azure Key Store"
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
      <ImageBoxContainer>
        <ImageBox />
      </ImageBoxContainer>
    </SpacingContainer>
  );
};

DescriptionSection.propTypes = {};

export default DescriptionSection;
