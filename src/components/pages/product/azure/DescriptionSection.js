import React from 'react';
import styled from '@emotion/styled';

import { media } from '../../../../utils/emotion';
import AnimateOnScroll from '../../../AnimateOnScroll';
import Heading from '../../../Heading';
import Subheading from '../../Subheading';
import Text from '../../../Text';
import BaseImage from '../../../Image';
import azure from '../../../../assets/product/azure.svg';
import CheckedListItem from '../../../CheckedListItem';

const SpacingContainer = styled('div')`
  margin-top: 9rem;
  margin-bottom: 9rem;
  width: 100%;
  max-width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const DescriptionContainer = styled('div')`
  text-align: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  ${media.tablet`
    width: 50%;
    text-align: left;
  `}
`;

const ImageContainer = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 5rem;
  ${media.tablet`
    width: 50%;
    margin-bottom: 0;
    padding-left: 2rem;
  `}
`;

const Container = styled('div')`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  padding: 0 2rem;
  width: 100%;
  max-width: 100%;
  ${media.tablet`
    flex-direction: row;
  `}
  ${media.ultraWide`
      width: 114rem;
      max-width: 114rem;
  `};
`;

const TitleWrapper = styled('div')`
  grid-area: title;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-top: -1.5rem;
`;

const Image = styled(BaseImage)`
  width: 100%;
  height: 27rem;
  ${media.tablet`
    max-height: 100%;
    height: 54rem;
    max-width: 100%;
    width:54rem;
  `}
`;

const CheckedListItemWrapper = styled('div')`
  display: flex;
  justify-content: center;
  ${media.tablet`
    justify-content: flex-start;
  `}
`;

const DescriptionSection = () => {
  return (
    <SpacingContainer>
      <Container>
        <DescriptionContainer>
          <AnimateOnScroll>
            <Subheading>Simply and safely manage cryptographic keys</Subheading>
            <TitleWrapper>
              <Heading linked as="h2" textAlign={{ _: 'center', lg: 'left' }}>
                Azure HSM Add-on for Ockam
              </Heading>
            </TitleWrapper>
            <Text>
              Ockam and Azure make it simple to keep cryptographic keys safe inside
              the cloud.
            </Text>
            <CheckedListItemWrapper>
              <CheckedListItem>Key Generation</CheckedListItem>
            </CheckedListItemWrapper>
            <Text color="caption">
              Private keys are generated inside the HSM.
            </Text>
            <CheckedListItemWrapper>
              <CheckedListItem>Key Management</CheckedListItem>
            </CheckedListItemWrapper>
            <Text color="caption">
              Private keys never leave the HSM and can be rotated anytime.
            </Text>
            <CheckedListItemWrapper>
              <CheckedListItem>Ease-of-Use</CheckedListItem>
            </CheckedListItemWrapper>
            <Text color="caption">
              Ockam brings key management into your application layer. We've
              already done the nitty-gritty of IT and OT configurations.
            </Text>
          </AnimateOnScroll>
        </DescriptionContainer>
        <ImageContainer>
          <AnimateOnScroll slideIn="down">
            <Image src={azure} />
          </AnimateOnScroll>
        </ImageContainer>
      </Container>
    </SpacingContainer>
  );
};

DescriptionSection.propTypes = {};

export default DescriptionSection;
