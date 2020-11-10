import React from 'react';
import styled from '@emotion/styled';

import Text from '../../../Text';
import DefaultGridSection from '../../DefaultGridSection';
import CheckedListItem from '../../../CheckedListItem';
import { media } from '../../../../utils/emotion';
import routerGraphics from '../../../../assets/product/router-hero.svg';
import routerBox from '../../../../assets/product/router-box.svg';
import routerBoxMobile from '../../../../assets/product/router-box-mobile.svg';

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
  background: transparent url(${routerBoxMobile}) no-repeat center center;
  background-size: contain;
  min-height: 48rem;
  ${media.tablet`
    margin-bottom: 9.6rem;
    background: transparent url(${routerBox}) no-repeat center center;
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
        image={routerGraphics}
        direction="imageOnRight"
        title="Ockam Hub"
        subtitle="Connect your distributed system with ease."
      >
        <Text>
          Ockam Hub is a service hosted in a cloud environment that makes it
          easy to route messages between an unlimited number of Ockam
          authenticated connections in your business.
        </Text>
        <CheckedListItem>
          Ockam Hub Service
          <Text color="caption">a cloud based routing service</Text>
        </CheckedListItem>
        <CheckedListItem>
          Ockam Add-Ons
          <Text color="caption">
            allow other services and environments to authenticate and message
            with an Ockam Hub.
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
