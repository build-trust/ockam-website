import React from 'react';

import SEO from '../../components/SEO';
import HeroSection from '../../components/pages/product/embedded-sdk/HeroSection';
import DescriptionSection from '../../components/pages/product/embedded-sdk/DescriptionSection';
import ElementsSection from '../../components/pages/product/embedded-sdk/ElementsSection';
import GetStartedSection from '../../components/pages/product/embedded-sdk/GetStartedSection';

const seo = {
  title: 'Ockam | Product | Embedded SDK',
  description:
    'Ockam Edge SDK includes everything you need to unblock the flow of data from your edge environments to the cloud. Developers of all skills and backgrounds can now use your components without specific edge integration skills or cryptographic know how.',
};
const EmbeddedSdk = () => {
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

export default EmbeddedSdk;
