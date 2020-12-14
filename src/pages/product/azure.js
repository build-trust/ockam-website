import React from 'react';

import DescriptionSection from '../../components/pages/product/azure/DescriptionSection';
import GetStartedSection from '../../components/pages/GetStartedSection';
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
      <GetStartedSection demoPathname="/learn/how-to-guides/using-add-ons/vaults" />
    </>
  );
};

export default Azure;
