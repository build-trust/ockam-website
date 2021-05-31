import React from 'react';
import styled from '@emotion/styled';

import { media } from '../../../../utils/emotion';
import AnimateOnScroll from '../../../AnimateOnScroll';
import Heading from '../../../Heading';
import Subheading from '../../Subheading';
import Text from '../../../Text';
import BaseImage from '../../../Image';
import microchip from '../../../../assets/product/microchip.svg';
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
  width: 100%;
  padding: 0 3rem;
  margin-bottom: 5rem;
  ${media.tablet`
    width: 50%;
    margin-bottom: 0;
    padding-right: 0rem;
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
                Microchip Add-ons for Ockam
              </Heading>
            </TitleWrapper>
            <Text>
              Ockam and Microchip make it simple to keep cryptographic keys safe
              outside of the cloud.
            </Text>
            <CheckedListItemWrapper>
              <CheckedListItem>Key Generation</CheckedListItem>
            </CheckedListItemWrapper>
            <Text color="caption">
              Private keys are generated inside the chip.
            </Text>
            <CheckedListItemWrapper>
              <CheckedListItem>Key Management</CheckedListItem>
            </CheckedListItemWrapper>
            <Text color="caption">
              Private keys never leave the chip and are partitioned from
              application processes.
            </Text>
            <CheckedListItemWrapper>
              <CheckedListItem>Ease-of-Use</CheckedListItem>
            </CheckedListItemWrapper>
            <Text color="caption">
              Ockam brings key management into your application layer. We've
              already done the nitty-gritty of embedded security engineering.
            </Text>
          </AnimateOnScroll>
        </DescriptionContainer>
        <ImageContainer>
          <AnimateOnScroll slideIn="down">
            <Image src={microchip} />
          </AnimateOnScroll>
        </ImageContainer>
      </Container>
    </SpacingContainer>
  );
};

DescriptionSection.propTypes = {};

export default DescriptionSection;
