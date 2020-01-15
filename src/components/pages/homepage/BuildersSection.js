import React from 'react';

import Heading from '../../Heading';
import Text from '../../Text';
import buildersSection from '../../../assets/homepage/builders-section-image.svg';
import DefaultGridSection from '../DefaultGridSection';

const BuildersSection = () => {
  return (
    <DefaultGridSection image={buildersSection} direction="imageOnLeft">
      <Heading as="h2">We Are Here To Enable Builders Like You.</Heading>
      <Text>
        The seamless connected future will be ushered in by builders who are
        focused on unlocking new user outcomes with connected devices. We seek
        to empower you to develop trustful IoT systems with our easy to use
        tools, methods, and protocols. We are building an open and thriving open
        source ecosystem to accrue ever increasing functionality for our users.
      </Text>
    </DefaultGridSection>
  );
};

export default BuildersSection;
