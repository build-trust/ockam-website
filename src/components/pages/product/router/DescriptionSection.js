import React from 'react';
import styled from '@emotion/styled';

import Heading from '../../../Heading';
import Text from '../../../Text';
import CheckedListItem from '../../../CheckedListItem';
import PageSection from '../../PageSection';
import { media } from '../../../../utils/emotion';
import routerDiagram from '../../../../assets/product/subpage-router-diagram.svg';
import routerDiagramEdged from '../../../../assets/product/subpage-router-diagram-edged.svg';
import routerDiagramMobile from '../../../../assets/product/subpage-router-diagram-mobile.svg';
import AnimateOnScroll from "../../../AnimateOnScroll";
import Image from "../../../Image";

const Container = styled('div')`
  display: flex;
  flex-direction: column;

  ${media.desktop`
    flex-direction: row;
      align-items: center;
  `}
`;

const DescriptionBox = styled('div')`
  flex: 1;
  ${media.desktop`
    flex: 5;
    margin-left: 4rem;
  `}
`;

const ImageBox = styled('div')`
  display:none;
  position: relative;

  ${media.desktop`
    display:block;
    flex: 6;
    margin-left: 4rem;
    height: 480px;
    width: 100%;
  `}
  ${media.ultraWide`
    height: 567px;
  `};
 
`;

const DesktopImage = styled('div')`
  background-image: url(${routerDiagram}), url(${routerDiagramEdged});
  background-repeat: no-repeat, no-repeat;
  background-position: 0 center, 637px center;
  background-size: contain;
  position: absolute;
  height: 100%;
  width: 100vw;
`;

const ImageBoxMobile = styled(Image)`
  width: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 50rem;
  ${media.desktop`
    display:none;
  `}
`;

const RouterSection = styled(PageSection)`
  overflow-x: hidden;
`;

const DescriptionSection = () => {
  return (
    <RouterSection>
      <AnimateOnScroll transformY animateOnce>
        <Container>
          <DescriptionBox>
            <Heading linked as="h2">Content of Ockam Router</Heading>
            <Text>Ockam Router includes:</Text>
            <CheckedListItem>
              Ockam Router Service
              <Text color="caption">a cloud based routing service</Text>
            </CheckedListItem>
            <CheckedListItem>
              Ockam Cloud SDK
              <Text color="caption">
                allows other services and environments to securely connect with an
                Ockam Router.
              </Text>
            </CheckedListItem>
            <CheckedListItem>
              A cloud based HSM (Hardware Security Module)
            </CheckedListItem>
          </DescriptionBox>
          <ImageBox>
            <DesktopImage />
          </ImageBox>
          <ImageBoxMobile src={routerDiagramMobile} />
        </Container>
      </AnimateOnScroll>
    </RouterSection>
  );
};

DescriptionSection.propTypes = {};

export default DescriptionSection;
