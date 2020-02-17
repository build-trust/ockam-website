import React from 'react';

import PageSection from '../../PageSection';
import Heading from '../../../Heading';
import FeaturesCardGrid from '../../FeaturesCardGrid';
import { ReactComponent as CodeIcon } from '../../../../assets/core-icon.svg';
import { ReactComponent as VaultIcon } from '../../../../assets/vault-icon.svg';
import { ReactComponent as TransferIcon } from '../../../../assets/transfer-icon.svg';
import AnimateOnScroll from "../../../AnimateOnScroll";

const features = [
  {
    title: 'Embedded Core SDK',
    icon: CodeIcon,
    description:
      'The core functionality and protocols for Ockam are in the Core SDK. The Core interfaces to easily plug in Vaults and Transports to complete the Embedded SDK.',
  },
  {
    title: 'Vault',
    icon: VaultIcon,
    description:
      'Vaults are adaptors that allow any cryptographically empowered chip to interface the Ockam Core. Store Ockam identifiers in trusted environments.',
  },
  {
    title: 'Transport',
    icon: TransferIcon,
    description:
      'Transports are adaptors that allow any transport to interface with the Ockam Core. Pick from TCP, Bluetooth, and LoRaWAN',
  },
];

const ElementsSection = () => {
  return (
    <PageSection>
      <AnimateOnScroll transformY animateOnce>
        <Heading as="h2" mb={5} textAlign="center">
          {' '}
          Elements of the Ockam Embedded SDK
        </Heading>
        <FeaturesCardGrid features={features} />
      </AnimateOnScroll>
    </PageSection>
  );
};

ElementsSection.propTypes = {};

export default ElementsSection;
