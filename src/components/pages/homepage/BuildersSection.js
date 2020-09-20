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
      title="Ockam is built for all developers"
    >
      <Text>
        Ockam is obsessed with simple developer experiences. This is why we've
        created three interface abstractions depending upon your needs.
      </Text>
      <Text>
        If you are building an application you can utilize our simple
        application tools through APIs and pre-configured binaries.
      </Text>
      <Text>
        Ockam Add-on interfaces help our technical partners build unique
        connectors for cloud services and new hardware environments with ease.
      </Text>
      <Text>
        If you want to go deep into how Ockam is built, run a security audit,
        expose an issue, contribute an Add-on, or make an update - the raw
        open-source code in GitHub is for you.
      </Text>
    </DefaultGridSection>
  );
};

export default BuildersSection;
