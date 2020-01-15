import React from 'react';

import Heading from '../../Heading';
import Text from '../../Text';
import seamlessImage from '../../../assets/homepage/seamless-section-image.svg'
import DefaultGridSection from "../DefaultGridSection";

const SeamlessConnectedSection = () => {
  return (
    <DefaultGridSection image={seamlessImage} direction="imageOnRight">
      <Heading as='h2'>Ockam Believes In A Seamless Connected Future.</Heading>
      <Text>Vast interoperable systems of connected devices across consumer and enterprise will be able to interact trustfully. These systems will be secure and autonomously serve intuitive, user centric experiences that respect privacy.</Text>
    </DefaultGridSection>
  );
};

export default SeamlessConnectedSection;
