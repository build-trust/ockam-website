import React from 'react';
import styled from '@emotion/styled';

import PageSection from '../PageSection';
import { media } from '../../../utils/emotion';
import Heading from '../../Heading';
import Text from '../../Text';
import seamlessImage from '../../../assets/homepage/seamless-section-image.svg'

const SeamlessGrid = styled.div`
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
    "content image";
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

const SeamlessConnectedSection = () => {
  return (
    <PageSection>
      <SeamlessGrid>
        <Image src={seamlessImage} />
        <Content>
          <Heading as='h2'>Ockam Believes In A Seamless Connected Future.</Heading>
          <Text>Vast interoperable systems of connected devices across consumer and enterprise will be able to interact trustfully. These systems will be secure and autonomously serve intuitive, user centric experiences that respect privacy.</Text>
        </Content>
      </SeamlessGrid>
    </PageSection>
  );
};

SeamlessConnectedSection.propTypes = {

};

export default SeamlessConnectedSection;
