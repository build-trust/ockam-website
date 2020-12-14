import React from 'react';
import styled from '@emotion/styled';

import HeaderSection from '../../components/pages/product/HeaderSection';
import SEO from '../../components/SEO';
import CloudSdkSection from '../../components/pages/product/CloudSdkSection';
import EdgeSdkSection from '../../components/pages/product/EdgeSdkSection';
import SectionArrowSeparator from '../../components/pages/product/SectionArrowSeparator';
import EmbeddedSdkSection from '../../components/pages/product/EmbeddedSdkSection';
import GetStartedSection from '../../components/pages/GetStartedSection';

const SpacingContainer = styled('div')`
  margin-top: 6rem;
`;

const Index = () => {
  return (
    <>
      <SEO
        title="Ockam | Product"
        description="Building connected systems you can trust is hard. Ockam's Open Source  developer tools make it easy."
      />
      <HeaderSection />
      <CloudSdkSection />
      <SectionArrowSeparator />
      <EdgeSdkSection />
      <SectionArrowSeparator />
      <EmbeddedSdkSection />
      <SpacingContainer>
        <GetStartedSection />
      </SpacingContainer>
    </>
  );
};

export default Index;
