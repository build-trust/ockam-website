import React from 'react';
import styled from "@emotion/styled";
import { space } from 'styled-system';

import DefaultGridSection from "../DefaultGridSection";
import trustedDeviceGraphics from '../../../assets/trusted-device-graphics.svg'
import Heading from "../../Heading";
import Text from "../../Text";
import Subheading from "../Subheading";
import Button from "../../Button";
import useSiteMetadata from "../../../hooks/useSiteMetadata";
import Link from "../../Link";

const ButtonsContainer = styled('div')({
  display: 'flex',
}, space);

const TrustedDevicesSection = () => {
  const { ockamLibraryRepo } = useSiteMetadata();

  return (
    <>
      <DefaultGridSection direction='imageOnRight' image={trustedDeviceGraphics}>
        <Subheading mb={3}>FOR APP DEVELOPERS AND SYSTEM INTEGRATORS</Subheading>
        <Heading as='h2'>Ockam TrustedDevices</Heading>
        <Text>Most application developers rely on cloud infrastructure. We use open source cloud-native tools to build apps that are secure and scalable. We build fast.</Text>
        <Text>Now those same open source tool skills can be used to connect apps to connected devices that live outside of the cloud infrastructure. With Ockam TrustedDevices all application developers can connect to and trust data that moves to and from devices at the edge.</Text>
        <ButtonsContainer mt={3}>
          <Button as={Link} mr={3} size='small' to={ockamLibraryRepo}>Build with Ockam</Button>
          <Button outline='primary' size='small'>Contact sales</Button>
        </ButtonsContainer>
      </DefaultGridSection>
    </>
  );
};

export default TrustedDevicesSection;
