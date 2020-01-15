import React from 'react';

import DefaultGridSection from "../DefaultGridSection";
import ockamVaultGraphics from '../../../assets/hardware-chipset-graphics.svg'
import Heading from "../../Heading";
import Text from "../../Text";
import Subheading from "../Subheading";
import Button from "../../Button";

const VaultSection = () => {
  return (
    <>
      <DefaultGridSection direction='imageOnLeft' image={ockamVaultGraphics}>
        <Subheading mb={3}>FOR HARDWARE AND CHIPSET ENGINEERS</Subheading>
        <Heading as='h2'>Ockam Vault</Heading>
        <Text>Trusted platform modules and secure compute environments are now prolific in connected device hardware. However, rarely are they used by application developers.</Text>
        <Text>When Ockam Vault is added to device firmware, or when an open source integration is supported within Ockam it becomes easy for all developers to simply access and to securely rely upon cryptographic secrets that are stored in your hardware.</Text>
        <Button mt={3} outline='primary' size='small'>Add support for your hardware</Button>
      </DefaultGridSection>
    </>
  );
};

export default VaultSection;
