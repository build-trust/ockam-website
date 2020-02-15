import React from 'react';

import SEO from '../../components/SEO';
import HeroSection from '../../components/pages/product/edge-sdk/HeroSection';
import DescriptionSection from '../../components/pages/product/edge-sdk/DescriptionSection';
import ElementsSection from '../../components/pages/product/edge-sdk/ElementsSection';
import GetStartedSection from '../../components/pages/product/edge-sdk/GetStartedSection';

const seo = {
  title: 'Ockam | Product | Edge SDK',
  description:
    'Ockam Embedded SDK includes everything you need to unblock the flow of data from your IoT hardware environment to the cloud. Developers of all skills and backgrounds can now use your components without specific embedded hardware skills or cryptographic know how.',
};
const EdgeSdk = () => {
  return (
    <>
      <SEO title={seo.title} description={seo.description} />
      <HeroSection />
      <DescriptionSection />
      <ElementsSection />
      <GetStartedSection />
    </>
  );
};

export default EdgeSdk;
