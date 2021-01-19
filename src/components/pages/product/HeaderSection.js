import React from 'react';
import styled from '@emotion/styled';

import Text from '../../Text';
import opensourceImage from '../../../assets/product/opensource-hero.svg';
import DefaultGridSection from '../DefaultGridSection';
import SlideDownAnchor from '../../SlideDownAnchor';

const SpacingContainer = styled('div')`
  margin-top: 9rem;
`;

const HeaderSection = () => {
  return (
    <SpacingContainer>
      <DefaultGridSection
        image={opensourceImage}
        direction="imageOnRight"
        title="Ockam Open Source Tools"
        subtitle="Build trust between any device, any service, anywhere"
      >
        <Text>
          Our Open Source SDK includes everything you need to trust the
          flow of data from edge environments to and from the cloud services
          that your applications depend upon. Developers of all skills and
          backgrounds can now connect cloud services to the edge without
          specific distributed systems integration skills, cryptographic
          security know how, or even network protocol experience.
        </Text>
        <SlideDownAnchor to="#sdk" />
      </DefaultGridSection>
    </SpacingContainer>
  );
};

HeaderSection.propTypes = {};

export default HeaderSection;
