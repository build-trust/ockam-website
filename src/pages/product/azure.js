import React from 'react';

import DescriptionSection from '../../components/pages/product/azure/DescriptionSection';
import GetStartedSection from '../../components/pages/product/azure/GetStartedSection';
import ConfigurationsSection from '../../components/pages/product/azure/ConfigurationsSection';
import SEO from '../../components/SEO';

const Azure = () => {
  return (
    <>
      <SEO
        title="Ockam | Azure"
        description="Building trust across distributed networks is hard. Ockam makes it easy"
      />
      <DescriptionSection />
      <ConfigurationsSection />
      <GetStartedSection />
    </>
  );
};

export default Azure;
