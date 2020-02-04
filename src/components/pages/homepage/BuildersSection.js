import React from 'react';

import Heading from '../../Heading';
import Text from '../../Text';
import buildersSection from '../../../assets/homepage/builders-section-image.svg';
import DefaultGridSection from '../DefaultGridSection';

const BuildersSection = () => {
  return (
    <DefaultGridSection
      image={buildersSection}
      direction="imageOnRight"
      gridLgProportions={['4fr', '3fr']}
    >
      <Heading as="h2">
        Ockam’s mission is to empower millions of builders. Just like you.
      </Heading>
      <Text>
        Building distributed systems of interconnected devices is really
        difficult. It takes specialized skills and massive development budgets
        to do right. Very few teams have these resources.
      </Text>
      <Text>
        However, it will take millions of developers to build our connected
        future. This is why Ockam’s mission is to empower builders with our
        simple-to-use open source tools.
      </Text>
    </DefaultGridSection>
  );
};

export default BuildersSection;
