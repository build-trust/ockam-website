import styled from "@emotion/styled";
import React from 'react';

import Button from '../../Button';
import Link from '../../Link';
import Text from '../../Text';
import Heading from '../../Heading';
import homepageHeaderImage from '../../../assets/homepage/header-section-image.svg';
import HeaderGridSection from '../HeaderGridSection';
import circleCheck from '../../../assets/check-circle-icon.svg';
import config from '../../../../config';
import { media } from '../../../utils/emotion';

const FeatureElementContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 2rem;
  ${media.tablet`
    flex-direction:row;
    align-items: flex-start;
  `}
`;

const CircleCheck = styled.img`
  padding-top: .4rem;
`;

const FeatureElement = ({ children }) => (
  <FeatureElementContainer>
    <CircleCheck src={circleCheck} />
    <Text mb={0} ml={3}>
      {children}
    </Text>
  </FeatureElementContainer>
);


const HeaderSection = () => (
  <HeaderGridSection image={homepageHeaderImage}>
    <Heading as="h1" fontSize={[5, 6, 8]}>
      Build connected systems you can trust.
    </Heading>
    <Text mt={4}>
      Your customers expect security and data privacy from your products.
      Ockam’s developer tools enable you to:
    </Text>
    <div>
      <FeatureElement>Send end-to-end encrypted messages through your connected system,</FeatureElement>
      <FeatureElement>Establish authenticated channels between endpoints regardless of the transports or route,</FeatureElement>
      <FeatureElement>Create and manage cryptographic keys, unique device identifiers, and verifiable credentials in your connected environments.</FeatureElement>
    </div>
    <Text color="primary">Ockam makes it as simple as it should be.</Text>
    <Button mt="5.5rem" variant="white" as={Link} to={`mailto:${config.general.email}`}>
      Get started with Ockam
    </Button>
  </HeaderGridSection>
);

export default HeaderSection;
