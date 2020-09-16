import React from 'react';

import Text from '../../Text';
import buildersSection from '../../../assets/homepage/builders-image.svg';
import DefaultGridSection from '../DefaultGridSection';

const BuildersSection = () => {
  return (
    <DefaultGridSection
      image={buildersSection}
      direction="imageOnRight"
      gridLgProportions={['4fr', '3fr']}
      title="Ockam is built for all developers. Pick your experience!"
    >
      <Text>
        Ockam is obsessed with simple developer experiences. This is why we've
        created three interface abstractions depending upon your needs. If you
        are building an application or an integration, you can utilize our
        simple interfaces. If you want to go deep into how Ockam is built, run a
        security audit, expose an issue, or make an update - the raw open-source
        code is for you.
      </Text>
    </DefaultGridSection>
  );
};

export default BuildersSection;
