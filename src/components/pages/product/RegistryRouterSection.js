import React, { useRef, useState } from 'react';
import styled from '@emotion/styled';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import {layout, space} from "styled-system";

import { media } from '../../../utils/emotion';
import Content from '../Content';
import Heading from '../../Heading';
import Text from '../../Text';
import ReadDocsButton from '../../ReadDocsButton';
import registryRouterGraphics from '../../../assets/product/registry-router.svg';
import registryRouterMobileGraphics from '../../../assets/product/registry-router-mobile.svg';
import StartBuildingButton from '../../StartBuildingButton';
import AnimateOnScroll from "../../AnimateOnScroll";

const StickySectionContent = styled(Content)`
  display: flex;
  flex-direction: column;
  margin-top: 15rem;
  margin-bottom: 15rem;
  ${media.desktop`
    flex-direction: row;
  `}
`;

const StickyBox = styled('div')`
  position: -webkit-sticky;
  position: sticky;
  top: 8rem;
  text-align: center;
`;

const TextBox = styled('div')`
  flex: 6;

`;

const StickyContainer = styled('div')`
  flex: 6;
  ${media.desktop`
    padding-left:8rem;
  `};
`;

const BaseImage = styled('img')(layout, space);

const Image = styled(BaseImage)`
  display: none;
  width: 100%;
  max-width: 50rem;
  transition:
    all 250ms ${({ theme }) => theme.animations.productSections};
  border: 1px solid transparent;
   ${({ theme, showBorder }) =>
  showBorder &&
  `
  border: 1px solid ${theme.colors.primary};
  padding: 10px;
  border-radius: 10px;
 
 `};
   ${media.desktop`
    display: initial;
    max-width: initial;
  `}
`;

const MobileImage = styled(Image)`
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 3rem;
    max-width: 30rem;
   ${media.desktop`
    display: none;
    max-width: initial;
  `}
`

const RegistryRouterSection = () => {
  const routerTextRef = useRef(null);
  const [elementPosition, setElementPosition] = useState({ x: 0, y: 0 });

  useScrollPosition(
    ({ currPos }) => {
      setElementPosition(currPos);
    },
    [],
    routerTextRef
  );

  return (
    <AnimateOnScroll threshold={20} delay={50}>
      <StickySectionContent>
        <TextBox mb={5}>
          <Heading as="h2" textAlign={{_: "center", lg: 'left'}}>Ockam Registry</Heading>
          <MobileImage
            src={registryRouterMobileGraphics}
            showBorder={false}
          />
          <Text>
            An Ockam Registry is a foundational component in the Trust
            Architecture of any secure connected device ecosystem. The Ockam
            Registry is a hosted cloud service that stores Decentralized
            Identifiers (DIDs) and verified credentials for your devices.
          </Text>
          <StartBuildingButton width="24rem" />
          <br />
          <ReadDocsButton width="24rem" to="/" mb={6} />
          <Heading as="h2" textAlign={{_: "center", lg: 'left'}} ref={routerTextRef}>
            Ockam Router
          </Heading>
          <MobileImage
            src={registryRouterMobileGraphics}
            showBorder
          />
          <Text>
            Routing secure messages in a connected device ecosystem is complicated
            to get right. The Ockam Router is a hosted cloud service that combines
            an Ockam Router Service and the Cloud SDK, in an easy to deploy,
            hosted instance.
          </Text>
          <StartBuildingButton width="24rem" />
          <br />
          <ReadDocsButton width="24rem" to="/" />
        </TextBox>
        <StickyContainer>
          <StickyBox>
            <Image
              showBorder={elementPosition.y < 180}
              src={registryRouterGraphics}
              alt="example sticky"
              display={{_: 'none', lg: 'initial'}}
            />
          </StickyBox>
        </StickyContainer>
      </StickySectionContent>
    </AnimateOnScroll>
  );
};

RegistryRouterSection.propTypes = {};

RegistryRouterSection.defaultProps = {};

export default RegistryRouterSection;
