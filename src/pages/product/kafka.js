import React from 'react';

import DescriptionSection from '../../components/pages/product/kafka/DescriptionSection';
import GetStartedSection from '../../components/pages/GetStartedSection';
import ConfigurationsSection from '../../components/pages/product/kafka/ConfigurationsSection';
import SEO from '../../components/SEO';

const Kafka = () => {
  return (
    <>
      <SEO
        title="Ockam | Kafka"
        description="Authenticating event streams across networks is hard. Ockam and Confluent makes it easy"
      />
      <DescriptionSection />
      <ConfigurationsSection />
      <GetStartedSection />
    </>
  );
};

export default Kafka;
