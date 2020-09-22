import React from 'react';

import DescriptionSection from '../../components/pages/product/microchip/DescriptionSection';
import GetStartedSection from '../../components/pages/product/microchip/GetStartedSection';
import ConfigurationsSection from '../../components/pages/product/microchip/ConfigurationsSection';
import SEO from '../../components/SEO';

const Microchip = () => {
  return (
    <>
      <SEO
        title="Ockam | Microchip"
        description="Building trust between hardware at the egde and services in the cloud is hard. Ockam makes it easy"
      />
      <DescriptionSection />
      <ConfigurationsSection />
      <GetStartedSection />
    </>
  );
};

export default Microchip;
