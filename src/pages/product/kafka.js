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
        description="Building connected systems you can trust is hard. Ockam makes it easy"
      />
      <HeaderSection />
      <ConfigurationsSection />
      <GetStartedSection />
    </>
  );
};

export default Kafka;
