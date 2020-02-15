import React from 'react';

import SEO from '../../components/SEO';
import HeroSection from '../../components/pages/product/cloud-sdk/HeroSection';
import DescriptionSection from '../../components/pages/product/cloud-sdk/DescriptionSection';
import ElementsSection from '../../components/pages/product/cloud-sdk/ElementsSection';
import GetStartedSection from '../../components/pages/product/cloud-sdk/GetStartedSection';

const seo = {
  title: 'Ockam | Product | Cloud SDK',
  description:
    ' Ockam Cloud SDK includes everything you need to unblock the flow of data from edge environments to your cloud service. Developers of all skills and backgrounds can now use your cloud service without specific edge integration skills or cryptographic know how.',
};
const CloudSdk = () => {
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

export default CloudSdk;
