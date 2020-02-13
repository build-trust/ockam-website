import React from 'react';

import Button from '../../Button';
import Link from '../../Link';
import Text from '../../Text';
import Heading from '../../Heading';
import homepageHeaderImage from '../../../assets/homepage/header-section-image.svg';
import HeaderGridSection from '../HeaderGridSection';
import config from '../../../../config';
import CheckedListElement from "../../CheckedListElement";


const HeaderSection = () => (
  <HeaderGridSection image={homepageHeaderImage}>
    <Heading as="h1" fontSize={[5, 6, 8]}>
      Build connected systems you can trust.
    </Heading>
    <Text mt={4}>
      Your customers expect security and data privacy from your products.
      Ockam’s developer tools enable you to:
    </Text>
    <div>
      <CheckedListElement>
        <Text mb={0}>
          Send end-to-end encrypted messages through your connected system,
        </Text>
      </CheckedListElement>
      <CheckedListElement>
        <Text mb={0}>
          Establish authenticated channels between endpoints regardless of the
          transports or route,
        </Text>
      </CheckedListElement>
      <CheckedListElement>
        <Text mb={0}>
          Create and manage cryptographic keys, unique device identifiers, and
          verifiable credentials in your connected environments.
        </Text>
      </CheckedListElement>
    </div>
    <Text color="primary">Ockam makes it as simple as it should be.</Text>
    <Button
      mt="5.5rem"
      variant="white"
      as={Link}
      to={`mailto:${config.general.email}`}
    >
      Get started with Ockam
    </Button>
  </HeaderGridSection>
);


export default HeaderSection;
