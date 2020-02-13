import React from 'react';

import Heading from '../../Heading';
import Text from '../../Text';
import seamlessImage from '../../../assets/homepage/seamless-section-image.svg';
import DefaultGridSection from '../DefaultGridSection';

const SeamlessConnectedSection = () => {
  return (
    <DefaultGridSection image={seamlessImage} direction="imageOnLeft">
      <Heading as="h2">
        Ockam Believes In
        <br />
        {' '}
A Connected Future.
      </Heading>
      <Text>
        It is inevitable that data and computing power will become evermore
        distributed and a part of our everyday lives. Consumer, enterprise, and
        industrial systems will become interconnected and automated around us.
        These systems require Trust Architectures to make our data secure and
        private.
      </Text>
    </DefaultGridSection>
  );
};

export default SeamlessConnectedSection;
