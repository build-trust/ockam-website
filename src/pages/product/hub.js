import React from 'react';

import SEO from '../../components/SEO';
import DescriptionSection from '../../components/pages/product/hub/DescriptionSection';
import GetStartedSection from '../../components/pages/GetStartedSection';
import ConfigurationsSection from '../../components/pages/product/hub/ConfigurationsSection';

const seo = {
  title: 'Ockam Hub',
  description:
    'Ockam Hub is a service hosted in a cloud environment that makes it easy to route messages between an unlimited number of Ockam authenticated connections in your business.',
};
const Hub = () => {
  return (
    <>
      <SEO title={seo.title} description={seo.description} />
      <DescriptionSection />
      <ConfigurationsSection />
      <GetStartedSection demoPathname="/learn/how-to-guides/using-add-ons/enterprise/influxdb/connect-and-use-ockam-hub" />
    </>
  );
};

export default Hub;
