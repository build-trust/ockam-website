import React from 'react';

import HeaderSection from '../../components/pages/product/influx/HeaderSection';
import GetStartedSection from '../../components/pages/product/influx/GetStartedSection';
import ConfigurationsSection from '../../components/pages/product/influx/ConfigurationsSection';
import SEO from '../../components/SEO';

const Influx = () => {
  return (
    <>
      <SEO
        title="Ockam | Influx"
        description="Building Connected Systems You Can Trust Is Hard. Ockam's enterprise-grade products make it easy !!!"
      />
      <HeaderSection />
      <ConfigurationsSection />
      <GetStartedSection />
    </>
  );
};

export default Influx;
