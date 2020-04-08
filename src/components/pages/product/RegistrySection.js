import React from 'react';
import styled from "@emotion/styled";

import registryGraphics from '../../../assets/product/registry-section.svg';
import Heading from '../../Heading';
import Text from '../../Text';
import DefaultGridSection from '../DefaultGridSection';
import AnimateOnScroll from "../../AnimateOnScroll";
import Subheading from "../Subheading";
import Link from "../../Link";
import Button from "../../Button";

const Container = styled('div')`
  margin-top: 20rem;
`;

const RegistryTitle = () => (
  <>
    <Subheading textAlign={{ _: "center", lg: "left"}}>OCKAM HOSTED CLOUD SERVICES</Subheading>
    <Heading linked textAlign={{ _: "center", lg: "left"}} as="h2">Ockam Registry</Heading>
  </>
);

const RegistrySection = () => {
  return (
    <AnimateOnScroll threshold={20} delay={50}>
      <Container>
        <DefaultGridSection TitleComponent={RegistryTitle} contentAlign="top" image={registryGraphics} direction="imageOnRight">
          <Text>
            An Ockam Registry is a foundational component in the Trust Architecture
            of any secure connected device ecosystem. The Ockam Registry is a hosted
            cloud service that stores Decentralized Identifiers (DIDs), verified
            credentials, and metadata for your devices.
          </Text>
          <Button textAlign="center" as={Link} width={{ _: "100%", lg: 'auto'}} variant='white' mt={3} to="product/registry">Learn more about the Ockam Registry</Button>
        </DefaultGridSection>
      </Container>
    </AnimateOnScroll>
  );
};

RegistrySection.propTypes = {};

export default RegistrySection;
