import React from 'react';

import DescriptionSection from '../../components/pages/product/influxdata/DescriptionSection';
import GetStartedSection from '../../components/pages/GetStartedSection';
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
      <GetStartedSection demoPathname="/learn/how-to-guides/using-add-ons/enterprise/influxdb/telegraf-influxdb-with-ockamd" />
    </>
  );
};

export default InfluxData;
