import React from 'react';

import HeaderSection from '../components/pages/homepage/HeaderSection';
import SeamlessConnectedSection from '../components/pages/homepage/SeamlessConnectedSection';
import BuildersSection from '../components/pages/homepage/BuildersSection';
import GetStartedSection from '../components/pages/homepage/GetStartedSection';
import BlogSection from '../components/pages/homepage/BlogSection';

const Index = () => {
  return (
    <>
      <HeaderSection />
      <SeamlessConnectedSection />
      <BuildersSection />
      <GetStartedSection />
      <BlogSection />
    </>
  );
};

export default Index;
