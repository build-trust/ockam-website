import React from 'react';

import Button from '../../Button';
import Link from '../../Link';
import Text from '../../Text';
import Heading from '../../Heading';
import homepageHeaderImage from '../../../assets/homepage/header-section-image.svg';
import HeaderGridSection from '../HeaderGridSection';


const HeaderSection = () => (
  <HeaderGridSection image={homepageHeaderImage}>
    <Heading as="h1" fontSize={[5, 6, 8]}>
      Build Connected Systems
      <br />
      You Can Trust. As Simple As It Should Be.
    </Heading>
    <Text mt={4}>
      Ockam gives you the tools you need to establish an architecture for
      trust within your connected device applications. We make it simple to
      interconnect secure hardware with software services to facilitate
      trustful exchange of information within IoT systems.
    </Text>
    <Button mt="5.5rem" variant="white" as={Link} to="/">
      Request a demo
    </Button>
  </HeaderGridSection>
);

HeaderSection.propTypes = {};

export default HeaderSection;
