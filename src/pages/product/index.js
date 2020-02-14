import React from 'react';

import HeaderSection from '../../components/pages/product/HeaderSection';
import SEO from '../../components/SEO';
import CloudSdkSection from "../../components/pages/product/CloudSdkSection";
import EdgeSdkSection from "../../components/pages/product/EdgeSdkSection";
import SectionArrowSeparator from "../../components/pages/product/SectionArrowSeparator";
import EmbeddedSdkSection from "../../components/pages/product/EmbeddedSdkSection";
import CloudSection from "../../components/pages/product/CloudSection";
import GetStartedSection from "../../components/pages/homepage/GetStartedSection";
import RegistrySection from "../../components/pages/product/RegistrySection";
import RouterSection from "../../components/pages/product/RouterSection";


const Index = () => {
  return (
    <>
      <SEO title="Ockam | Product" />
      <HeaderSection />
      <CloudSection />
      <CloudSdkSection />
      <SectionArrowSeparator />
      <EdgeSdkSection />
      <SectionArrowSeparator />
      <EmbeddedSdkSection />
      <RegistrySection />
      <RouterSection />
      <GetStartedSection />
    </>
  );
};

export default Index;
