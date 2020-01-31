import React from 'react';

import HeaderSection from "../components/pages/product/HeaderSection";
import FeaturesSection from "../components/pages/product/FeaturesSection";
import TrustedDevicesSection from "../components/pages/product/TrustedDevicesSection";
import VaultSection from "../components/pages/product/VaultSection";
import SdkConnectSection from "../components/pages/product/SdkConnectSection";
import SEO from "../components/SEO";

const Product = () => {
  return (
    <>
      <SEO title="Ockam | Product" />
      <HeaderSection />
      <FeaturesSection />
      <TrustedDevicesSection />
      <VaultSection />
      <SdkConnectSection />
    </>
  );
};


export default Product;
