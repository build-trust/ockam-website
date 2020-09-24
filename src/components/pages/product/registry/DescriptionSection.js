import React from 'react';
import styled from '@emotion/styled';

import { media } from '../../../../utils/emotion';
import DefaultGridSection from '../../DefaultGridSection';
import registryGraphics from '../../../../assets/product/registry-hero.svg';
import registryBox from '../../../../assets/product/registry-box.svg';
import registryBoxMobile from '../../../../assets/product/registry-box-mobile.svg';
import Text from '../../../Text';
import CheckedListItem from '../../../CheckedListItem';

const SpacingContainer = styled('div')`
  margin-top: 9rem;
`;

const ImageBoxContainer = styled('div')`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 100%;
`;

const ImageBox = styled('div')`
  display: flex;
  margin-bottom: 5rem;
  background: transparent url(${registryBoxMobile}) no-repeat center center;
  background-size: contain;
  min-height: 48rem;
  ${media.tablet`
    margin-bottom: 9.6rem;
    background: transparent url(${registryBox}) no-repeat center center;
    background-size: contain;
    min-height: 27rem;
  `}
  width: 100%;
  max-width: 110rem;
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
      <ImageBoxContainer>
        <ImageBox />
      </ImageBoxContainer>
    </SpacingContainer>
  );
};

DescriptionSection.propTypes = {};

export default DescriptionSection;
