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
        description="Authenticating event streams across networks is hard. Ockam and Confluent makes it easy"
      />
      <HeaderSection />
      <ConfigurationsSection />
      <GetStartedSection />
    </>
  );
};

export default Kafka;
