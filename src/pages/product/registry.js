import React from 'react';

import SEO from '../../components/SEO';
import DescriptionSection from '../../components/pages/product/registry/DescriptionSection';
import GetStartedSection from '../../components/pages/homepage/GetStartedSection';
import ConfigurationsSection from '../../components/pages/product/registry/ConfigurationsSection';

const seo = {
  title: 'Ockam Registry',
  description:
    'Ockam Registry is an open source secure distributed device and service registry based on distributed identifiers [DIDs] and verifiable claims.',
};
const Registry = () => {
  return (
    <>
      <SEO title={seo.title} description={seo.description} />
      <DescriptionSection />
      <ConfigurationsSection />
      <GetStartedSection />
    </>
  );
};

export default Registry;
