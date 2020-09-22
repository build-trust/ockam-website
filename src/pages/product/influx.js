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
        description="Building trust in time series data across distributed networks is hard. Ockam and InfluxData makes it easy"
      />
      <HeaderSection />
      <ConfigurationsSection />
      <GetStartedSection />
    </>
  );
};

export default Influx;
