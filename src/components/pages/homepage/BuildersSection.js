import React from 'react';
import styled from '@emotion/styled';

import PageSection from '../PageSection';
import { media } from '../../../utils/emotion';
import Heading from '../../Heading';
import Text from '../../Text';
import buildersSection from '../../../assets/homepage/builders-section-image.svg'

const BuildersGrid = styled.div`
  display: grid;
  grid-row-gap: 2rem;
  grid-template-areas: 
  "image"
  "content";
  
  ${media.desktop`
    grid-column-gap: 9rem;
    grid-rows-gap: 0;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 
    "image content";
`};
`;

const Content = styled.div`
  grid-area: content;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Image = styled.img`
  grid-area: image;
  place-self: center;
  width: 100%;
  max-width: 50rem;
`;

const BuildersSection = () => {
  return (
    <PageSection>
      <BuildersGrid>
        <Image src={buildersSection} />
        <Content>
          <Heading as='h2'>Ockam Believes In A Seamless Connected Future.</Heading>
          <Text>Vast interoperable systems of connected devices across consumer and enterprise will be able to interact trustfully. These systems will be secure and autonomously serve intuitive, user centric experiences that respect privacy.</Text>
        </Content>
      </BuildersGrid>
    </PageSection>
  );
};

export default BuildersSection;
