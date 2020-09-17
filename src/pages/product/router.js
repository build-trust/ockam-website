import React from 'react';

import SEO from '../../components/SEO';
import DescriptionSection from '../../components/pages/product/router/DescriptionSection';
import GetStartedSection from '../../components/pages/homepage/GetStartedSection';
import ConfigurationsSection from '../../components/pages/product/router/ConfigurationsSection';

const seo = {
  title: 'Ockam | Product | Router',
  description:
    'Ockam Router is a service hosted in a cloud environment that makes it easy to route messages between an unlimited number of Ockam authenticated connections in your business.',
};
const Router = () => {
  return (
    <>
      <SEO title={seo.title} description={seo.description} />
      <DescriptionSection />
      <ConfigurationsSection />
      <GetStartedSection />
    </>
  );
};

export default Router;
