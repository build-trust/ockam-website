import React from 'react';

import HeaderSection from '../components/pages/homepage/HeaderSection';
import SeamlessConnectedSection from '../components/pages/homepage/SeamlessConnectedSection';
import BuildersSection from '../components/pages/homepage/BuildersSection';
import GetStartedSection from '../components/pages/GetStartedSection';
import BlogSection from '../components/pages/homepage/BlogSection';
import SEO from '../components/SEO';

const Index = () => {
  return (
    <>
      <SEO title="Ockam | Homepage" />
      <HeaderSection />
      <GetStartedSection />
      <SeamlessConnectedSection />
      <BuildersSection />
      <BlogSection />
    </>
  );
};

export default Index;
