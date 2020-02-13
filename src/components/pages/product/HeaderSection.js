import React, { useState } from 'react';
import styled from '@emotion/styled';

import Text from '../../Text';
import Heading from '../../Heading';
import heroProductGraphics from '../../../assets/product/hero-product.svg';
import heroProductMobileGraphics from '../../../assets/product/hero-product-mobile.svg';
import { media } from '../../../utils/emotion';

import HeaderProductGrid from './HeaderProductGrid';
import AccordionItem from './AccordionItem';

const HeroHeading = styled(Heading)`
  ${media.desktop`
    font-size: 3.9rem;
  `};
`;

const HeaderSection = () => {
  const [activeAccordionNode, setActiveAccordionNode] = useState('SDK');
  const toggleActiveAccordionNode = key =>
    (key === activeAccordionNode
      ? setActiveAccordionNode(null)
      : setActiveAccordionNode(key));

  const isSdkActive = activeAccordionNode === 'SDK';
  const isHcsActive = activeAccordionNode === 'HCS';
  const isPsActive = activeAccordionNode === 'PS';

  return (
    <HeaderProductGrid
      image={heroProductGraphics}
      mobileImage={heroProductMobileGraphics}
    >
      <HeroHeading
        as="h1"
        fontSize={[5, 6, 8]}
        textAlign={{
          lg: 'left',
        }}
      >
        Building Connected Systems You Can Trust Is Hard
      </HeroHeading>
      <Text
        mt={4}
        textAlign={{
          lg: 'left',
        }}
      >
        Ockam’s enterprise-grade products make it easy
      </Text>
      <div>
        <AccordionItem
          isActive={isSdkActive}
          identifier="SDK"
          title="Software Development Kits"
          onClick={key => toggleActiveAccordionNode(key)}
        >
          <Text color="caption" textAlign="left" mb={1}>
            Embedded and IoT Devices
          </Text>
          <Text color="caption" textAlign="left" mb={1}>
            Linux Boxes at the Edge
          </Text>
          <Text color="caption" textAlign="left" mb={1}>
            Cloud Servers
          </Text>
        </AccordionItem>
        <AccordionItem
          isActive={isHcsActive}
          identifier="HCS"
          title="Hosted Cloud Services"
          onClick={key => toggleActiveAccordionNode(key)}
        >
          <Text color="caption" textAlign="left" mb={1}>
            Ockam Routers
          </Text>
          <Text color="caption" textAlign="left" mb={1}>
            Ockam Registry
          </Text>
        </AccordionItem>
        <AccordionItem
          isActive={isPsActive}
          identifier="PS"
          title="Professional Services"
          onClick={key => toggleActiveAccordionNode(key)}
        >
          <Text color="caption" textAlign="left" mb={1}>
            Enterprise Support
          </Text>
          <Text color="caption" textAlign="left" mb={1}>
            Custom Services
          </Text>
        </AccordionItem>
      </div>
    </HeaderProductGrid>
  );
};

HeaderSection.propTypes = {};

export default HeaderSection;
