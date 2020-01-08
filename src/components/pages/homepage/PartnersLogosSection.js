import React from 'react';
import styled from '@emotion/styled';

import azureLogo from '../../../assets/homepage/partnersLogos/azure-logo.svg';
import heiseOnlineLogo from '../../../assets/homepage/partnersLogos/heise-online-logo.svg';
import infoqLogo from '../../../assets/homepage/partnersLogos/infoq-logo.svg';
import infoWorldLogo from '../../../assets/homepage/partnersLogos/inforworld-logo.svg';
import sdTimesLogo from '../../../assets/homepage/partnersLogos/sd-times-logo.svg';
import zdnetLogo from '../../../assets/homepage/partnersLogos/zdnet-logo.svg';
import PageSection from '../PageSection';
import { media } from '../../../utils/emotion';

const LogosGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
  justify-items: center;
  align-items: center;
  ${media.tablet`
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
  `};
  ${media.desktop`
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: auto;
  `};
`;
const PartnersLogosSection = () => {
  return (
    <PageSection>
      <LogosGrid>
        <img src={azureLogo} alt="Azure logo" />
        <img src={infoWorldLogo} alt="Info world logo" />
        <img src={sdTimesLogo} alt="Sd times logo" />
        <img src={zdnetLogo} alt="Zdnet logo" />
        <img src={heiseOnlineLogo} alt="Heise online logo" />
        <img src={infoqLogo} alt="Infoq logo" />
      </LogosGrid>
    </PageSection>
  );
};

export default PartnersLogosSection;
