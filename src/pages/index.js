import React from 'react';

import HeaderSection from '../components/pages/homepage/HeaderSection';
import FeaturesSection from '../components/pages/homepage/FeaturesSection';
import SeamlessConnectedSection from '../components/pages/homepage/SeamlessConnectedSection';
import BuildersSection from '../components/pages/homepage/BuildersSection';
import GetStartedSection from '../components/pages/homepage/GetStartedSection';
import BlogSection from '../components/pages/homepage/BlogSection';
import PartnersLogosSection from '../components/pages/homepage/PartnersLogosSection';


const Index = () => {
  return (
    <>
      <HeaderSection />
      <FeaturesSection />
      <SeamlessConnectedSection />
      <BuildersSection />
      <GetStartedSection />
      <BlogSection />
      <PartnersLogosSection />
    </>
  );
};

export default Index;
