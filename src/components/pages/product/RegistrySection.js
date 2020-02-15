import React from 'react';
import styled from "@emotion/styled";

import registryGraphics from '../../../assets/product/registry-section.svg';
import Heading from '../../Heading';
import Text from '../../Text';
import DefaultGridSection from '../DefaultGridSection';
import LinkAccent from "../../LinkAccent";
import AnimateOnScroll from "../../AnimateOnScroll";

const Container = styled('div')`
  margin-top: 20rem;
`;

const RegistrySection = () => {
  return (
    <AnimateOnScroll threshold={20} delay={50}>
      <Container>
        <DefaultGridSection image={registryGraphics} direction="imageOnRight">
          <Heading as="h2">Ockam Registry</Heading>
          <Text>
            An Ockam Registry is a foundational component in the Trust Architecture
            of any secure connected device ecosystem. The Ockam Registry is a hosted
            cloud service that stores Decentralized Identifiers (DIDs), verified
            credentials, and metadata for your devices.
          </Text>
          <LinkAccent mt={3} to="product/registry">Learn more about the Ockam Registry</LinkAccent>
        </DefaultGridSection>
      </Container>
    </AnimateOnScroll>
  );
};

RegistrySection.propTypes = {};

export default RegistrySection;
