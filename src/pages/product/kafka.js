import React from 'react';

import HeaderSection from '../../components/pages/product/kafka/HeaderSection';
import GetStartedSection from '../../components/pages/product/kafka/GetStartedSection';
import ConfigurationsSection from '../../components/pages/product/kafka/ConfigurationsSection';
import SEO from '../../components/SEO';

const Kafka = () => {
  return (
    <>
      <SEO
        title="Ockam | Kafka"
        description="Building Connected Systems You Can Trust Is Hard. Ockam's enterprise-grade products make it easy !!!"
      />
      <HeaderSection />
      <ConfigurationsSection />
      <GetStartedSection />
    </>
  );
};

export default Kafka;
