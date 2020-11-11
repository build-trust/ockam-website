import React from 'react';

import DescriptionSection from '../../components/pages/product/influxdata/DescriptionSection';
import GetStartedSection from '../../components/pages/product/influxdata/GetStartedSection';
import ConfigurationsSection from '../../components/pages/product/influxdata/ConfigurationsSection';
import SEO from '../../components/SEO';

const InfluxData = () => {
  return (
    <>
      <SEO
        title="Ockam | InfluxData"
        description="Building trust in time series data across distributed networks is hard. Ockam and InfluxData makes it easy"
      />
      <DescriptionSection />
      <ConfigurationsSection />
      <GetStartedSection />
    </>
  );
};

export default InfluxData;
